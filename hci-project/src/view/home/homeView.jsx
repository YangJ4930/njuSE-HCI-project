import React, { Component } from 'react';
import {Row, Col, Space, Card, Carousel, Layout} from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
const {Header, Footer, Sider, Content} = Layout;


const HomeView = () =>{

    return(
        <>
            <div style={{marginLeft: 60, marginRight: 60}}>
                <Header style={{background: '#001529', marginBottom: 20}}>
                    <Row justify="space-between" align="middle" style={{height: '100%'}}>
                        <span style={{fontSize: 18, lineHeight: 1.4, color: "white",}}>游戏</span>
                    </Row>
                </Header>
                <GameHomeList></GameHomeList>
            </div>
        </>
    )
}

const GameHomeList = () =>{
    return(
        <>
            <Row gutter={[16, 16]}>
                <Col span={12}>
                        <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                             src={"https://cdn2.unrealengine.com/fortnite-c4s4-home-2757x1047-3293a1c87b67.jpg"} alt={"Fortnite"}/>
                        <h5>Fortnite</h5>
                </Col>
                <Col span={6}>
                    <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                         src={"https://cdn2.unrealengine.com/rl-epic-support-thumbnail-783x1047-783x1047-b040c42cdfc3.jpg"} alt={"Rocket League"}/>
                    <h5>Rocket League</h5>
                </Col>
                <Col span={6}>
                    <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                         src={"https://cdn2.unrealengine.com/rls-epic-support-thumbnail-783x1047-783x1047-a246396ed9e5.jpg"} alt={"Rocket League"}/>
                    <h5>Rocket League Sideswipe</h5>
                </Col>
            </Row>
            <div style={{marginTop: 40}}></div>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                         src={"https://cdn2.unrealengine.com/aw2-egs-support-783x1047-cd0fb7119f53.jpg"} alt={"Fortnite"}/>
                    <h5>Alan Wake 2</h5>

                </Col>
                <Col span={6}>
                    <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                         src={"https://cdn2.unrealengine.com/pcbs-support-783x1047-3663f86d79c0.jpg"} alt={"Fortnite"}/>
                    <h5>PC Building Simulator</h5>

                </Col>
                <Col span={6}>
                    <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                         src={"https://cdn2.unrealengine.com/hc2-hero-783x1047-egs-banner-783x1047-cd1e114543c0.jpg"} alt={"Rocket League"}/>
                    <h5>Horizon Chase 2</h5>
                </Col>
                <Col span={6}>
                    <img style={{objectFit: "cover", width: "100%", height:"100%"}}
                         src={"https://cdn2.unrealengine.com/fall-guys-783x1047-c6adc350bf30.jpg"} alt={"Rocket League"}/>
                    <h5>Fall Guys</h5>
                </Col>
            </Row>
        </>
    )
}

export default HomeView;
