import React, { useEffect, useState } from 'react';
import {Col, Flex, List, Row, Space} from 'antd';
import { Header } from 'antd/es/layout/layout';

export const Recommendation = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <React.Fragment>
            <Header style={{ background: '#001529', marginBottom: 20 }}>
                <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                    <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>探索</span>
                </Row>
            </Header>

            <Slideshow data={data} interval={5000} onPageChange={handlePageChange} />
        </React.Fragment>
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
        <React.Fragment>
            <div style={{ aspectRatio: 2.17, width: '90%', marginLeft:'5%', marginRight:"5%"}}>
                <Flex
                    justify='space-between'
                    align='center'
                    style={{ width: '100%', height: '100%' }}
                    horizontal
                >
                    <img
                        style={{
                            objectFit: 'cover',
                            width: '60%',
                            height: '100%',
                            borderRadius: 20,
                        }}
                        src={data[currentIndex].imgUrl}
                        alt={`Slide ${currentIndex}`}
                    />

                    <Flex
                        justify='space-between'
                        align='center'
                        style={{ width: '33%', height: '100%' }}
                        vertical
                    >
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '22%',
                                borderRadius: 10,
                            }}
                            src={data[0].imgUrl}
                            alt={`Slide 0`}
                            onClick={() => handlePageChange(0)}
                        />

                        <img
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '22%',
                                borderRadius: 10,
                            }}
                            src={data[1].imgUrl}
                            alt={`Slide 1`}
                            onClick={() => handlePageChange(1)}
                        />

                        <img
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '22%',
                                borderRadius: 10,
                            }}
                            src={data[2].imgUrl}
                            alt={`Slide 2`}
                            onClick={() => handlePageChange(2)}
                        />

                        <img
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '22%',
                                borderRadius: 10,
                            }}
                            src={data[3].imgUrl}
                            alt={`Slide 3`}
                            onClick={() => handlePageChange(3)}
                        />
                    </Flex>
                </Flex>
            </div>
        </React.Fragment>
    );
};
