import {Avatar, Button, Card, Carousel, Flex, Radio, Segmented, Space} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import {Recommendation} from "./component/recommendation";
import {Free} from "./component/free";
import {Other} from './component/other'

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const freeData=[
    {
        name:'Destiny 2: Legacy Collection',
        cover:'https://cdn1-epicgames-1251447533.file.myqcloud.com/offer/d5241c76f178492ea1540fce45616757/Free-Game-1_1920x1080-d0877708418750425ae12a2bddae3277?h=480&quality=medium&resize=1&w=854'
    },
    {
        name:'神秘游戏 5天后解锁',
        cover:'https://cdn1-epicgames-1251447533.file.myqcloud.com/offer/d5241c76f178492ea1540fce45616757/Free-Game-2-teaser_1920x1080-38e83b583656dfb7b3d290a44cdfc6e8?h=480&quality=medium&resize=1&w=854'
    }
]

const otherData=[
    {
        name:'《PUBG: BATTLEGROUNDS》',
        cover:'https://cdn2.unrealengine.com/egs-pubg-rondo-breaker-1920x1080-c3b2e63a1715.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854'
    },
    {
        name:'《Chivalry 2》免费游玩周末',
        cover:'https://cdn2.unrealengine.com/egs-chivalry-ii-free-weekend-dec-23-breaker-1920x1080-6e986c0dad5d.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854'
    }
]

const recommendationData = [
    {
        bigCover: 'https://cdn2.unrealengine.com/egs-avatar-frontiers-of-pandora-carousel-desktop-1248x702-9346d193b313.jpg?h=720&quality=medium&resize=1&w=1280',
        smallCover: 'https://cdn2.unrealengine.com/egs-avatar-frontiers-of-pandora-carousel-desktop-1248x702-9346d193b313.jpg?h=720&quality=medium&resize=1&w=1280'
    },
    {
        bigCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
        smallCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360'
    },
    {
        bigCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
        smallCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360'
    },
    {
        bigCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
        smallCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360'
    },
    {
        bigCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
        smallCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360'
    },
    {
        bigCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360',
        smallCover: 'https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=480&quality=medium&resize=1&w=360'
    },
]

const ExploreView = function ExploreView() {
    const [exploreList, setExploreList] = React.useState([])

    React.useEffect(()=>{
        axios.get('/explore/content').then((response) => {
            console.log(response);
            setExploreList(response.data);
            console.log(response.data);
        });
    }, [])


    return (
        <>
            <div>
                <p>
                    <Recommendation data={recommendationData}/>
                </p>
                <div style={{marginTop: 40, marginBottom: 40}}></div>
                <p>
                    <Free data={freeData}/>
                </p>
                <div style={{marginTop: 40, marginBottom: 40}}></div>
                <p>
                    <Other data={otherData}/>
                </p>
            </div>
        </>
    );
};

function Discounts() {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h3>特惠游戏</h3>
                <Link
                    to={{
                        pathname: '/explore_gameRepositoryView',
                    }}
                >
                    <svg
                        className='icon_rightArrow'
                        viewBox='0 0 1024 1024'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='30'
                    >
                        <path
                            d='M733.44 550.464a54.4 54.4 0 0 0 0-76.928l-379.52-379.52A48 48 0 0 0 286.08 161.92L636.16 512l-350.08 350.08a48 48 0 1 0 67.84 67.84l379.52-379.456z'
                            fill='#2c2c2c'
                        ></path>
                    </svg>
                </Link>
            </div>
            <React.Fragment>
                <Carousel>
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
            </React.Fragment>
        </div>
    );
}

function SingleCard() {
    return (
        <>
            <Card
                style={{
                    width: '30%',
                    height: 100
                }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        style={{height:'90%'}}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </>
    );
}

/**
function Other() {
    return(
        <div>
            <Flex justify='space-between' align='center' style={{width:'100%', aspectRatio:1.8}} horizontal>
                <Flex gap='small' align='start' vertical style={{height:'100%', aspectRatio:2.0}}>
                    <img alt="《PUBG: BATTLEGROUNDS》"
                         src="https://cdn2.unrealengine.com/egs-pubg-rondo-breaker-1920x1080-c3b2e63a1715.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/egs-pubg-rondo-breaker-1920x1080-c3b2e63a1715.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{objectFit:'cover', height:'60%', aspectRatio:2.17, borderRadius:10}}
                    />
                    <h5>《PUBG: BATTLEGROUNDS》</h5>
                    <h6 style={{color:'rgba(190, 190, 190)'}}>来体验 2023 年度最大的更新。全新 8x8 地图 RONDO。</h6>
                </Flex>
                <Flex gap='small' align='start' style={{height:'100%', aspectRatio:2.0}} vertical>
                    <img alt="《Chivalry 2》免费游玩周末"
                         src="https://cdn2.unrealengine.com/egs-chivalry-ii-free-weekend-dec-23-breaker-1920x1080-6e986c0dad5d.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/egs-chivalry-ii-free-weekend-dec-23-breaker-1920x1080-6e986c0dad5d.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{objectFit:'cover', height:'60%', aspectRatio:2.17, borderRadius:10}}
                    />
                    <h5>《Chivalry 2》免费游玩周末</h5>
                    <h6 style={{color:'rgba(190, 190, 190)'}}>本周末来免费试玩《Chivalry 2》及其更新，更可四折购买</h6>

                </Flex>
            </Flex>
        </div>
    )
}
 **/

export default ExploreView;

