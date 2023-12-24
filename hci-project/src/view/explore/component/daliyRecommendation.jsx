import React, {useEffect, useState} from "react";
import {Header} from "antd/es/layout/layout";
import {Button, Flex, Row, Space} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

export const DaliyRecommendation = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <React.Fragment>
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
        //4页 每页5张
        <React.Fragment>
            <div style={{ aspectRatio: 2.3, width: '100%'}}>
                <Flex justify='space-between' align='center' style={{width: '90%', height: '100%', marginLeft:'5%', marginRight:'5%'}} vertical>
                    <Flex
                        justify='space-between'
                        align='center'
                        style={{ marginTop: '2%', marginBottom: '2%' , height:'10%', width:'100%'}}
                        horizontal
                    >
                        <h5>今日推荐</h5>

                        <Space size={'small'}>
                            <Button type="primary" shape="circle" icon={<LeftOutlined/>} onClick={() => handlePageChange((currentIndex - 1 < 0) ? 3 : (currentIndex - 1))}/>
                            <Button type="primary" shape="circle" icon={<RightOutlined/>} onClick={() => handlePageChange((currentIndex + 1) % 4)}/>
                        </Space>
                    </Flex>
                    <Flex justify='space-between' align='center' style={{height:'80%', width:'100%'}} horizontal>
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '18%',
                                height: '100%',
                                borderRadius: 8,
                            }}
                            src={data[currentIndex * 5].imgUrl}
                            alt={`Slide 0`}
                        />
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '18%',
                                height: '100%',
                                borderRadius: 8,
                            }}
                            src={data[currentIndex * 5 + 1].imgUrl}
                            alt={`Slide 0`}
                        />
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '18%',
                                height: '100%',
                                borderRadius: 8,
                            }}
                            src={data[currentIndex * 5 + 2].imgUrl}
                            alt={`Slide 0`}
                        />
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '18%',
                                height: '100%',
                                borderRadius: 8,
                            }}
                            src={data[currentIndex * 5 + 3].imgUrl}
                            alt={`Slide 0`}
                        />
                        <img
                            style={{
                                objectFit: 'cover',
                                width: '18%',
                                height: '100%',
                                borderRadius: 8,
                            }}
                            src={data[currentIndex * 5 + 4].imgUrl}
                            alt={`Slide 0`}
                        />
                    </Flex>
                </Flex>
            </div>
        </React.Fragment>
    );
};
