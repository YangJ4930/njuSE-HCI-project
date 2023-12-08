import React, { Component } from 'react';
import { Row, Col, Space, Card, Carousel, Layout } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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
            </div>
        </>
    );
};

const GameHomeList = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={
                            'https://cdn2.unrealengine.com/fortnite-c4s4-home-2757x1047-3293a1c87b67.jpg'
                        }
                        alt={'Fortnite'}
                    />
                    <h5>Fortnite</h5>
                </Col>
                <Col span={6}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={
                            'https://cdn2.unrealengine.com/rl-epic-support-thumbnail-783x1047-783x1047-b040c42cdfc3.jpg'
                        }
                        alt={'Rocket League'}
                    />
                    <h5>Rocket League</h5>
                </Col>
                <Col span={6}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={
                            'https://cdn2.unrealengine.com/rls-epic-support-thumbnail-783x1047-783x1047-a246396ed9e5.jpg'
                        }
                        alt={'Rocket League'}
                    />
                    <h5>Rocket League Sideswipe</h5>
                </Col>
            </Row>
            <div style={{ marginTop: 40 }}></div>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={
                            'https://cdn2.unrealengine.com/aw2-egs-support-783x1047-cd0fb7119f53.jpg'
                        }
                        alt={'Fortnite'}
                    />
                    <h5>Alan Wake 2</h5>
                </Col>
                <Col span={6}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={'https://cdn2.unrealengine.com/pcbs-support-783x1047-3663f86d79c0.jpg'}
                        alt={'Fortnite'}
                    />
                    <h5>PC Building Simulator</h5>
                </Col>
                <Col span={6}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={
                            'https://cdn2.unrealengine.com/hc2-hero-783x1047-egs-banner-783x1047-cd1e114543c0.jpg'
                        }
                        alt={'Rocket League'}
                    />
                    <h5>Horizon Chase 2</h5>
                </Col>
                <Col span={6}>
                    <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        src={'https://cdn2.unrealengine.com/fall-guys-783x1047-c6adc350bf30.jpg'}
                        alt={'Rocket League'}
                    />
                    <h5>Fall Guys</h5>
                </Col>
            </Row>
            <div style={{ marginTop: 40 }}></div>
        </>
    );
};

const NewsHomeList = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={
                                'https://www.ign.com.cn/sm/t/ign_cn/feature/6/60-things-/60-things-we-love-in-the-legend-of-zelda-tears-of-the-kingdo_3rw5.1280.jpg'
                            }
                            alt={'Fortnite'}
                        />
                        <h4
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                color: 'white',
                                margin: 0,
                                backgroundColor: 'rgba(34, 63, 90, 0.75',
                                fontSize: 25,
                                lineHeight: 1.5,
                                padding: 24,
                                boxSizing: 'border-box',
                            }}
                        >
                            《塞尔达传说 王国之泪》中我们最喜欢的 60 个细节
                        </h4>
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={
                                'https://www.ign.com.cn/sm/t/ign_cn/slotter/default/deck_tq52.1280.jpg'
                            }
                            alt={'Rocket League'}
                        />
                        <h4
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                color: 'white',
                                margin: 0,
                                backgroundColor: 'rgba(34, 63, 90, 0.75',
                                fontSize: 25,
                                lineHeight: 1.5,
                                padding: 24,
                                boxSizing: 'border-box',
                            }}
                        >
                            《蒸汽世界》 建造 - 评测 7分
                        </h4>
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={
                                'https://www.ign.com.cn/sm/t/ign_cn/slotter/default/deck_2ymd.1280.jpg'
                            }
                            alt={'Rocket League'}
                        />
                        <h4
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                color: 'white',
                                margin: 0,
                                backgroundColor: 'rgba(34, 63, 90, 0.75',
                                fontSize: 25,
                                lineHeight: 1.5,
                                padding: 24,
                                boxSizing: 'border-box',
                            }}
                        >
                            IGN《行尸走肉：命运》评测：2 分
                        </h4>
                    </div>
                </Col>
                <Col span={6}>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={
                                'https://www.ign.com.cn/sm/t/ign_cn/slotter/default/agaabuq7nrbd-wkaqulpiajq7nv770v0_y3gr.1280.png'
                            }
                            alt={'Rocket League'}
                        />
                        <h4
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                color: 'white',
                                margin: 0,
                                backgroundColor: 'rgba(34, 63, 90, 0.75',
                                fontSize: 25,
                                lineHeight: 1.5,
                                padding: 24,
                                boxSizing: 'border-box',
                            }}
                        >
                            今年 App Store Awards 的入围游戏有些硬｜IGN 中国
                        </h4>
                    </div>
                </Col>
            </Row>
            <div style={{ marginBottom: 30 }}></div>
        </>
    );
};

export default HomeView;
