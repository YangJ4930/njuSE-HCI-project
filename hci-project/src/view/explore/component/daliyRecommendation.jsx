import React, { useEffect, useState } from 'react';
import { Button, Card, Divider, Flex, List, Row, Space } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import axios from '../../../axios';
import { GameCard } from '../../search/component/GameCard';
import { Header } from 'antd/es/layout/layout';
import { GameList } from '../../search/component/GameList';

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
            <Header style={{ background: 'white', marginBottom: 20 }}>
                <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                    <Divider plain orientation={'left'}>
                        <span style={{ fontSize: 22, lineHeight: 1.4, color: 'black' }}>
                            今日推荐
                        </span>
                    </Divider>
                </Row>
            </Header>
            <GameList listData={data} widthData={300} />
        </>
    );
};

const SingleCard = ({ singleCardData }) => {
    return (
        <Link
            to={`/game/${singleCardData.id}`}
            style={{
                width: '18%',
                height: '100%',
                borderRadius: 8,
            }}
        >
            <Card
                hoverable
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                }}
                cover={
                    <img
                        alt='example'
                        src={singleCardData.imgUrl}
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                            aspectRatio: 0.75,
                            width: '100%',
                        }}
                    />
                }
            >
                <Meta title={singleCardData.name} style={{ height: '15%' }} />
            </Card>
        </Link>
    );
};
