import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Avatar, Card, Col, Flex, Layout, Row} from "antd";
import {Comment} from "@ant-design/compatible";
import axios from "../../axios";
import {Header} from "antd/es/layout/layout";

const ExploreContentView = function ExploreContentView() {
    // 新闻id,从路由参数中获取
    const { id } = useParams();
    const [game, setGame] = useState({})
    const [content, setContent] = useState("")

    useEffect(() => {
        axios.get(`explore/contents/${id}`).then((response) => {
            console.log(response);
            setGame(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <React.Fragment>
            <Header style={{ background: '#001529', marginBottom: 20 }}>
                <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                    <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>{game.name}</span>
                </Row>
            </Header>
            <Flex justify='space-between' align='start' vertical>
                <img
                    src={game.imgUrl}
                    alt={"nop"}
                />
            </Flex>
        </React.Fragment>
    );
}

export default ExploreContentView;