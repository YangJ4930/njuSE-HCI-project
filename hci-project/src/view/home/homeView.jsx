import React, {Component} from 'react';
import {Row, Col, Space, Card, Carousel} from 'antd';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import GameListItem from '../../component/gameListItem';


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


class HomeView extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col span={17} style={{marginRight: 10}}>
                        <Carousel autoplay>
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                        <Row>
                            <Col span={12}>
                                比赛
                                <Card>
                                    <h2>
                                        比赛现状
                                    </h2>
                                </Card>
                            </Col>
                            <Col span={12}>
                                社区话题
                                <Card>
                                    <h2>
                                        最热社区
                                    </h2>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6}>
                        <Card style={{width: 250}}>
                            <h2>游戏排行榜</h2>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1" title="游戏1"></GameListItem>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1" title="游戏1"></GameListItem>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1" title="游戏1"></GameListItem>
                            <GameListItem
                                address="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                id="1" title="游戏1"></GameListItem>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>


        );
    }


    deal = () => {
        console.log("111");
    }

}

export default HomeView;