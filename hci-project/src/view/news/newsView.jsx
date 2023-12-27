import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from '../../axios';
import {NewHead} from './component/newHead';
import {NewsListCard} from './component/newsListCard';
import {ListNews} from './component/listNews';
import {Avatar, Card, Col, FloatButton, List, Row, Typography} from "antd";
import BackTop from "../../component/BackTop";

const NewsRankList = ({ title }) => {
    const dataList = [
        {
            name: "博德之门3新款发布：震撼全球"
        },
        {
            name: "元梦之心多人在线模式大更新"
        },
        {
            name:  "VR游戏界创新突破：惊艳亮相"
        },
        {
            name: "网易开发者荣获大奖"
        },
        {
            name: "巫师三全新DLC扩展上线"
        },
        {
            name:  "LOL比赛风云再起"
        },
        {
            name: "重磅消息：女神异闻录6确认"
        },
        {
            name: "天美工作室最新游戏"
        },
        {
            name: "塞尔达全球销量突破新纪录"
        },
        {
            name: "王者荣耀推出新的游戏模式"
        },
        {
            name: "tag年度最佳游戏公布"
        },
        {
            name: "刺客信条改编电影重磅上映"
        },
        {
            name: "英雄联盟赛季更新：全新内容曝光"
        },
        {
            name: "小小梦魇续作何时上线steam？"
        },
        {
            name: "国产游戏之光竟是..."
        },

    ]
    return (
        <Card
            hoverable
            style={{
                width: "82%",
                marginLeft: "20%",
                // backgroundColor:"rgba(0,0,0,0)",
                //backgroundImage:`url(${apex})`
            }}
            bodyStyle={{
                // backgroundColor:"black"

            }}
        >
            <div style={{
                fontSize: "20px",
                fontWeight: "bold"
            }}>{title}</div>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={dataList}
                renderItem={(item, index) => {
                    return (
                        <Row style={{
                            marginTop: "10px",
                            marginLeft: "5%"
                        }}>
                            <Col className="gutter-row" span={4}>
                                <div style={{
                                    fontSize: "15px",
                                    color: "rgb(255,69,0)"
                                }}>{index + 1}</div>
                            </Col>
                            <Col>
                                <div style={{
                                    fontSize: "14px",
                                }}>{item.name}</div>
                            </Col>

                        </Row>
                    )
                }}
            >
                <div style={{
                    marginLeft: "20%",
                    marginTop: "10px",
                    color: "gray"
                }}>显示更多</div>
            </List>

        </Card>
    )
}
function NewsView() {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get('/news/contents').then((response) => {
            console.log(response);
            setNewsList(response.data);
        });
    }, []);

    let data = Array.from({
        length: newsList.length,
    }).map((_, i) => ({
        id: newsList[i].id,
        title: newsList[i].title,
        avatar: newsList[i].avatar,
        description: newsList[i].description,
        content: newsList[i].content,
        cover: newsList[i].cover,
        likes: newsList[i].likes,
        views: newsList[i].views,
        comments: newsList[i].comments,
    }));
    return (
        <React.Fragment>
            <div style={{paddingLeft: "2vw", paddingRight: "6vw"}}>
                <Row gutter={[16, 16]}>
                    <Col span={7}>
                        <div style={{margin: 10}}>
                            <NewsRankList title={"热点新闻"} dataList={data}/>
                        </div>

                    </Col>
                    <Col span={17}>
                        <NewHead/>
                        <div style={{marginBottom: 20}}></div>
                        <ListNews data={data}/>
                    </Col>

                </Row>

                <BackTop/>
            </div>

        </React.Fragment>
    );
}

export default NewsView;
