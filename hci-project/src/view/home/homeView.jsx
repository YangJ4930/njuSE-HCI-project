import React, {Component, useEffect} from 'react';
import {Row, Col, Space, Card, Carousel, Layout, Flex, Radio, List, Avatar, Tag} from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from "../../axios";
import {GameList} from "../search/component/GameList";
import {ListHomeNews} from "../news/component/listHomeNews";
import {ProList} from "@ant-design/pro-components";
import moment from "moment/moment";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {CardList} from "../community/communityView";
import {da} from "@faker-js/faker";
const { Header, Footer, Sider, Content } = Layout;

const HomeView = () => {
    return (
        <>
            <div style={{ marginLeft: 60, marginRight: 60 }}>
                <Header style={{ background: '#001529', marginBottom: 20 }}>
                    <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                        <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>游戏</span>
                    </Row>
                </Header>
                <GameHomeList></GameHomeList>
                <Header style={{ background: '#001529', marginBottom: 20 }}>
                    <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                        <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>
                            新闻咨询
                        </span>
                    </Row>
                </Header>
                <NewsHomeList />
                <Header style={{ background: '#001529', marginBottom: 20 }}>
                    <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                        <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>
                            最新动态
                        </span>
                    </Row>
                </Header>
                <CommunityList />
            </div>
        </>
    );
};

const GameHomeList = () => {
    const [gameList, setGameList] = React.useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/content/game').then((response) => {
            console.log(response);
            setGameList(response.data.content);
            console.log(response.data)
        });
    }, []);
    console.log(gameList)
    return (
        <>
            <GameList listData={gameList} widthData={300}/>
        </>
    );
};

const NewsHomeList = () => {
    const [newsList, setNewsList] = React.useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/content/news').then((response) => {
            console.log(response);
            setNewsList(response.data.content);
            console.log(response.data)
        });
    }, []);
    return (
        <ListHomeNews data={newsList}/>
    );
};

const CommunityList = () =>{
    const [communityList, setCommunityList] = React.useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/content/community').then((response) => {
            console.log(response);
            setCommunityList(response.data);
            console.log(response.data)
        });
    }, []);

    return(
            <CardList data={communityList}/>
    )

}

export default HomeView;
