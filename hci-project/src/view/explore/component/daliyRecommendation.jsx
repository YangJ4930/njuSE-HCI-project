import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Flex, List, Row, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import axios from '../../../axios';
import { GameCard } from '../../search/component/GameCard';
import { Header } from 'antd/es/layout/layout';
import { GameList } from '../../search/component/GameList';
import { useSelector } from 'react-redux';

export const DaliyRecommendation = ({ gameCount }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios
            .get(`/explore/recommendation/${gameCount}`)
            .then((response) => {
                let data = Array.from({ length: response.data.length }).map((_, index) => ({
                    id: response.data[index].id,
                    imgUrl: response.data[index].imgUrl,
                    name: response.data[index].name,
                    tags: response.data[index].tags,
                }));
                setGameList(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <Slideshow data={gameList} interval={5000} onPageChange={handlePageChange} />
        </>
    );
};

const Slideshow = ({ data, interval, onPageChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const themeMode = useSelector((state) => state.theme.IsChange);

    useEffect(() => {
        // 定时器，每隔一定时间切换到下一张图片
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        }, interval);

        // 在组件卸载时清除定时器和监听
        return () => {
            clearInterval(timer);
        };
    }, [4, interval]);

    const handlePageChange = (pageIndex) => {
        setCurrentIndex(pageIndex);
        onPageChange(pageIndex);
    };

    return (
        <>
            <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                <span
                    style={{ fontSize: 22, lineHeight: 1.4, color: themeMode ? 'white' : 'black' }}
                >
                    今日推荐
                </span>
            </Row>
            <div style={{ margin: 20 }}></div>
            <GameList listData={data} widthData={330} />
        </>
    );
};
