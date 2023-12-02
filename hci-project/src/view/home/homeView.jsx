import React, { Component } from 'react';
import { Row, Col, Space, Card, Carousel } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import GameListItem from '../../component/gameListItem';
import gameImage from "../../static/gameImage2.jpg";
import homeImage1 from "../../static/homePlay1.png"
import homeImage2 from "../../static/homePlay2.png"
import homeImage3 from "../../static/homePlay3.png"
import homeImage4 from "../../static/homePlay4.png"


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79'
};

class HomeView extends Component {
    state = {};

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={16} >
                       <HomeSwiper/>
                        <Row>
                            <Col span={11}>
                                比赛
                                <Card>
                                    <h2>比赛现状</h2>
                                </Card>
                            </Col>
                            <Col span={12}>
                                社区话题
                                <Card>
                                    <h2>最热社区</h2>
                                </Card>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={6}>
                        <Card style={{ width: 250 }}>
                            <h2>游戏排行榜</h2>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1"
                                title="游戏1"
                            ></GameListItem>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1"
                                title="游戏1"
                            ></GameListItem>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1"
                                title="游戏1"
                            ></GameListItem>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1"
                                title="游戏1"

                            ></GameListItem>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

const HomeSwiper = ()=>{
    return(
            <Carousel autoplay>
                <div>
                    <img
                        src={homeImage1}
                        alt="Game"
                        style={{height: '100%', width: '100%', objectFit: 'cover'}}
                    />
                </div>
                <div>
                    <img
                        src={homeImage2}
                        alt="Game"
                        style={{height: '100%', width: '100%', objectFit: 'cover'}}
                    />
                </div>
                <div>
                    <img
                        src={homeImage3}
                        alt="Game"
                        style={{height: '100%', width: '100%', objectFit: 'cover'}}
                    />
                </div>
                <div>
                    <img
                        src={homeImage4}
                        alt="Game"
                        style={{height: '100%', width: '100%', objectFit: 'cover'}}
                    />
                </div>
            </Carousel>

    )

}


export default HomeView;
