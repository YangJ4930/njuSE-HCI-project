import React, { Component, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// import "../assets/css/main.css"
import { Comment } from '@ant-design/compatible';
import { Avatar, Card, Col, Image, Layout, Row, Typography } from 'antd';

let content = ['a', 'b', 'c', 'd'];
const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

import gameImage from '../../static/gameImage1.jpg';
function NewsContentView() {
    // 新闻id,从路由参数中获取
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, []);

    return (
        <React.Fragment>
            <Layout>
                <Header style={{ background: '#001529' }}>
                    <Row justify='space-between' align='middle' style={{ height: '100%' }}></Row>
                </Header>
                <br />
                <Content style={{ padding: '20px' }}>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <NewsDetail />
                        </Col>
                    </Row>
                </Content>
            </Layout>

            <Card style={{}}>
                <Comment
                    author={<a>Han Solo</a>}
                    avatar={
                        <Avatar
                            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                            alt='Han Solo'
                        />
                    }
                    content={
                        <p>
                            We supply a series of design principles, practical patterns and high
                            quality design resources (Sketch and Axure), to help people create their
                            product prototypes beautifully and efficiently.
                        </p>
                    }
                />
            </Card>
        </React.Fragment>
    );
}

const NewsDetail = () => {
    return (
        <Typography>
            <Title style={{ justifyContent: 'center', textAlign: 'center' }}>空格怎么解决</Title>
            <Text style={{ justifyContent: 'center', textAlign: 'center' }}>
                一系列仪式谋杀案正威胁着亮瀑镇这个位于太平洋西北部，被荒野包围的小镇社区。
                作为以解决悬案而闻名的联邦调查局资深警探，萨贾·安德森为调查谋杀案而来到此地。
                当安德森发现一页页恐怖故事开始在身边化为现实时，她的案件陷入了一场噩梦。
                艾伦·韦克是一位迷失的作家，他正被困在我们世界以外的噩梦之中。而他写下了一篇黑暗故事，试图借此塑造自己周围的现实并逃离监狱。
                虽然某种黑暗阴森的恐怖力量对他穷追不舍，但韦克正努力保持自己的理智，试图掌控局面并击败魔鬼。
                安德森和韦克这两位英雄，虽身处两种截然不同的现实中且踏上了各自的亡命之旅，却以他们自己都无法理解的方式产生了心灵上的联结：他们相互映照与呼应，并用这种方式影响着周围的世界。
                在恐怖故事的推动下，超自然的黑暗力量侵入了辉落镇，腐化了当地居民并威胁着安德森和
                韦克的亲人。 他们只能依靠光明作为武器与避风港，来抵御自己面对的黑暗。
                受困于一个只有受害者和怪物、且凶险恐怖的故事中，他们能否担起命运委以的重任，逆境求生、成功逃脱？
            </Text>
            <br />
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Image src={gameImage} style={{ width: 500 }}></Image>
            </div>
            <Text style={{ justifyContent: 'center', textAlign: 'center' }}>
                一系列仪式谋杀案正威胁着亮瀑镇这个位于太平洋西北部，被荒野包围的小镇社区。
                作为以解决悬案而闻名的联邦调查局资深警探，萨贾·安德森为调查谋杀案而来到此地。
                当安德森发现一页页恐怖故事开始在身边化为现实时，她的案件陷入了一场噩梦。
                艾伦·韦克是一位迷失的作家，他正被困在我们世界以外的噩梦之中。而他写下了一篇黑暗故事，试图借此塑造自己周围的现实并逃离监狱。
                虽然某种黑暗阴森的恐怖力量对他穷追不舍，但韦克正努力保持自己的理智，试图掌控局面并击败魔鬼。
                安德森和韦克这两位英雄，虽身处两种截然不同的现实中且踏上了各自的亡命之旅，却以他们自己都无法理解的方式产生了心灵上的联结：他们相互映照与呼应，并用这种方式影响着周围的世界。
                在恐怖故事的推动下，超自然的黑暗力量侵入了辉落镇，腐化了当地居民并威胁着安德森和
                韦克的亲人。 他们只能依靠光明作为武器与避风港，来抵御自己面对的黑暗。
                受困于一个只有受害者和怪物、且凶险恐怖的故事中，他们能否担起命运委以的重任，逆境求生、成功逃脱？
            </Text>
        </Typography>
    );
};

export default NewsContentView;
