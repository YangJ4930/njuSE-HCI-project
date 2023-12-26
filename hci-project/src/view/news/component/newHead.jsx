import { Card, Col, Image, Layout, Row } from 'antd';
import React, { Component, useState } from 'react';
import logo from '../../../static/Store.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../../axios';
import Meta from 'antd/es/card/Meta';

const { Header, Footer, Sider, Content } = Layout;
export const NewHead = () => {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get('/news/head').then((response) => {
            console.log(response);
            setNewsList(response.data);
        });
    }, []);
    return (
        <React.Fragment>
            <div style={{ margin: 10 }} />
            <Row gutter={[16, 16]}>
                {newsList.map((item) => {
                    return (
                        <Col span={12} key={item.id}>
                            <NewsHeadCard
                                imgSrc={item.cover}
                                title={item.title}
                                shortContent={'最新资讯'}
                                goLink={`/news/content/${item.id}`}
                            ></NewsHeadCard>
                        </Col>
                    );
                })}
            </Row>
        </React.Fragment>
    );
};

const NewsHeadCard = ({ imgSrc, title, shortContent, goLink }) => {
    const navigate = useNavigate();
    return (
        <Card
            hoverable
            style={{ width: '100%' }}
            onClick={() => {
                navigate(goLink);
            }}
            cover={
                <img
                    src={imgSrc}
                    alt=''
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            }
        >
            <Meta title={title} description={shortContent} />
            <div style={{margin: 18}}></div>
            <div style={{fontSize: 18}}>阅读更多</div>
        </Card>
    );
};
