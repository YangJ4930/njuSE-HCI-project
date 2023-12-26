import { Button, Divider, Collapse, Flex } from 'antd';
import React, { useEffect, useState } from 'react';
import './explore.css';
import axios from '../../axios';
import BackTop from '../../component/BackTop';
import { GameList } from '../search/component/GameList';
import { useDispatch, useSelector } from 'react-redux';
import { selectGameTypes } from '../../redux/explore/gameSelectorSlice';
import { CheckOutlined } from '@ant-design/icons';

const ExploreGameRepositoryView = function Explore_gameRepositoryView() {
    const [gameList, setGameList] = useState([]);
    const [displayGames, setDisplayGames] = useState([]);
    const selected = useSelector((state) => state.game.selected);
    const gameTypes = useSelector((state) => state.game.gameTypes);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/explore/gameRepository').then((response) => {
            setGameList(response.data);
            setDisplayGames(response.data);
        });
    }, []);

    useEffect(() => {
        if (
            selected.every((value) => {
                return value === false;
            })
        ) {
            // 当全部游戏类型都未选中时，返回全部数据
            setDisplayGames(gameList);
        } else {
            const selectedData = gameList.filter((item) => {
                // 返回同时满足所有筛选条件的游戏
                return selected.every((isSelected, index) => {
                    const haveTag = item.tags.includes(gameTypes[index]);
                    return (isSelected && haveTag) || !isSelected;
                });
            });
            console.log('selected: ', selectedData);
            setDisplayGames(selectedData);
        }
    }, [selected]);

    return (
        <Flex justify={'flex-start'}>
            <GameTypeSelector />

            <GameList listData={displayGames} widthData={300} />

            <BackTop />
        </Flex>
    );
};

const GameTypeSelector = () => {
    const gameTypes = useSelector((state) => state.game.gameTypes);

    return (
        <Flex vertical={true} style={{ marginInline: 40 }}>
            <Divider style={{ color: 'white' }}>筛选器</Divider>
            {gameTypes.length > 0 &&
                gameTypes.map((item, index) => <PanelFlex key={index} index={index} name={item} />)}
        </Flex>
    );
};

function PanelFlex({ index, name }) {
    const [isSelected, setIsSelected] = useState(false);
    const selected = useSelector((state) => state.game.selected);
    const dispatch = useDispatch();
    const Change = () => {
        dispatch(selectGameTypes(index));
        setIsSelected(!isSelected);
    };

    return (
        <Button
            onClick={() => {
                Change();
            }}
            style={{
                backgroundColor: selected[index] ? 'grey' : 'black',
                color: 'white',
                border: 'inherit',
            }}
        >
            <Flex justify='space-between' horizontal>
                <div>{name}</div>
                {selected[index] && <CheckOutlined color={'white'} />}
            </Flex>
        </Button>
    );
}

function Yes_svg() {
    return (
        <svg
            className='icon'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
            color='#FFFFFF'
        >
            <path
                d='M392.533333 806.4L85.333333 503.466667l59.733334-59.733334 247.466666 247.466667L866.133333 213.333333l59.733334 59.733334L392.533333 806.4z'
                fill='#2c2c2c'
            ></path>
        </svg>
    );
}
export default ExploreGameRepositoryView;
