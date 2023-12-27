import { Button, Divider, Collapse, Flex, Col, Row } from 'antd';
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
    const themeMode = useSelector((state) => state.theme.IsChange);

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
        <Row gutter={2}>
            <Col span={3}>
                <GameTypeSelector />
            </Col>

            <Col span={20}>
                {displayGames.length > 0 ? (
                    <GameList listData={displayGames} widthData={300} />
                ) : (
                    <NotFound />
                )}
            </Col>
            <div style={{ margin: '400vw' }}></div>
            <BackTop />
        </Row>
    );
};

const GameTypeSelector = () => {
    const gameTypes = useSelector((state) => state.game.gameTypes);
    const themeMode = useSelector((state) => state.theme.IsChange);

    return (
        <Col style={{ color: themeMode ? 'white' : 'black' }}>
            <Row style={{ fontSize: 22, marginInline: 4 }}>筛选器</Row>
            <Divider></Divider>
            {gameTypes.length > 0 &&
                gameTypes.map((item, index) => (
                    <Row style={{ marginTop: 8 }}>
                        <PanelFlex key={index} index={index} name={item} />
                    </Row>
                ))}
        </Col>
    );
};

const PanelFlex = ({ index, name }) => {
    const [isSelected, setIsSelected] = useState(false);
    const selected = useSelector((state) => state.game.selected);
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.theme.IsChange);

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
                backgroundColor: selected[index] ? 'grey' : themeMode ? 'black' : 'white',
                color: themeMode ? 'white' : 'black',
                border: 'inherit',
                minWidth: '65%',
            }}
        >
            <Flex justify='space-between' horizontal>
                <div>{name}</div>
                {selected[index] && <CheckOutlined color={'white'} />}
            </Flex>
        </Button>
    );
};

const NotFound = () => {
    const themeMode = useSelector((state) => state.theme.IsChange);
    return (
        <div
            style={{
                color: themeMode ? 'white' : 'black',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <h1>未找到结果</h1>
            <h2>很遗憾，我没能找到与您搜索内容匹配的结果。</h2>
        </div>
    );
};

export { NotFound, GameTypeSelector };
export default ExploreGameRepositoryView;
