import { Col, Image, Layout, Row } from 'antd';
import React, {Component, useState} from 'react';
import logo from '../../../static/Store.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../../axios";

const { Header, Footer, Sider, Content } = Layout;
export const NewHead = () => {

    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:8080/news/head').then((response) => {
            console.log(response);
            setNewsList(response.data.content);
        });
    }, []);
    return (
        <React.Fragment>
            <Header style={{ background: '#001529' }}>
                <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                    <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>最新新闻</span>
                </Row>
            </Header>

            <Row>
                    {
                        newsList.map(
                        (item) => {
                            return(

                                    <Col span={12} key={item.id}>
                                        <NewsHeadCard
                                        imgSrc={
                                            item.cover
                                        }
                                        title={item.title}
                                        shortContent={
                                            "最新资讯"
                                        }
                                        goLink={`/news/content/${item.id}`}
                                    ></NewsHeadCard>
                                    </Col>

                        )})}
            </Row>

        </React.Fragment>
    );
};

const NewsHeadCard = ({ imgSrc, title, shortContent, goLink }) => {
    return (
        <div style={{ margin: 10 }}>
            <img
                src={imgSrc}
                alt=''
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Link className='nav-link' to={goLink}>
                <span
                    style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        letterSpacing: 0.2,
                        marginTop: 120,
                    }}
                >
                    {title}
                </span>
            </Link>
            <div style={{ margin: 5 }}>
                <span style={{ color: 'rgba(130,125,125)', fontSize: 16, fontWeight: 'normal' }}>
                    {shortContent}
                </span>
            </div>
        </div>
    );
};
