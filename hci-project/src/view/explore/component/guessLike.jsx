import React, { useEffect, useState } from 'react';
import { Card, Divider, Flex, Row, Space } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import { GameCard } from '../../search/component/GameCard';
import { GameList } from '../../search/component/GameList';
import { Header } from 'antd/es/layout/layout';
import axios from '../../../axios';

const GuessLike = ({ gameCount }) => {
    //监听窗口大小，获取card内cover高度，不懂为什么直接设置height为比例不生效
    const [coverHeight, setCoverHeight] = useState(0);

    const [gameList, setGameList] = useState([]);
    const resizeUpdate = (e) => {
        let h = e.target.innerWidth * 0.18;
        setCoverHeight(h);
    };

    useEffect(() => {
        axios
            .get(`/explore/recommendation/${gameCount}`)
            .then((response) => {
                let data = Array.from({ length: response.data.length }).map((_, index) => ({
                    id: response.data[index].id,
                    imgUrl: response.data[index].imgUrl,
                    name: response.data[index].name,
                }));
                setGameList(data);
            })
            .catch((error) => {
                console.error(error);
            });

        //页面刚加载完成后获取窗口宽度
        let h = window.innerWidth * 0.18;
        setCoverHeight(h);

        //页面变化时候获取浏览器窗口宽度
        window.addEventListener('resize', resizeUpdate);

        return () => {
            //组件销毁时移除监听事件
            window.removeEventListener('resize', resizeUpdate);
        };
    }, []);

    return (
        <React.Fragment>
            <Header style={{ background: 'white', marginBottom: 20 }}>
                <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                    <Divider plain orientation={'left'}>
                        <span style={{ fontSize: 22, lineHeight: 1.4, color: 'black' }}>
                            猜你喜欢
                        </span>
                    </Divider>
                </Row>
            </Header>
            <GameList listData={gameList} widthData={300} />
        </React.Fragment>
    );
};

export { GuessLike };
