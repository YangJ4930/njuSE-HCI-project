import React, {Component} from 'react';
import {Row, Col, Space, Card, Carousel, Layout} from 'antd';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import GameListItem from '../../component/gameListItem';
import gameImage from "../../static/gameImage2.jpg";
import homeImage1 from "../../static/homePlay1.png"
import homeImage2 from "../../static/homePlay2.png"
import homeImage3 from "../../static/homePlay3.png"
import homeImage4 from "../../static/homePlay4.png"

const {Header, Footer, Sider, Content} = Layout;
class HomeView extends Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                {/*<Header style={{background: '#001529'}}>*/}
                {/*    <Row justify="space-between" align="middle" style={{height: '100%'}}>*/}
                {/*        <span style={{fontSize: 18, lineHeight: 1.4, color: "white",}}>首页</span>*/}
                {/*    </Row>*/}
                {/*</Header>*/}
                <Row>
                    <Col span={16} >
                       <HomeSwiper/>
                        <Row>
                            <Col span={11}>
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
                    <Col span={7}>
                        <Card style={{width: 370}}>
                            <h1>游戏排行榜</h1>
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