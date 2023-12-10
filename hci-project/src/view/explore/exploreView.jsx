import {Avatar, Button, Card, Carousel, Flex, Radio, Segmented, Space} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";


const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};



const ExploreView = function ExploreView() {
    return (
        <>
            <div>
                <p>
                    <Recommendation />
                </p>
                <div style={{marginTop: 20, marginBottom: 20}}></div>
                <p>
                    <Free />
                </p>
                <div style={{marginTop: 20, marginBottom: 20}}></div>
                <p>
                    <Other />
                </p>
            </div>
        </>
    );
};

function Recommendation() {
    return (
        <div>
            <div style={{marginTop: 20, marginBottom: 20}}></div>
            <div>
            <Flex justify="space-between" align="center" horizontal>
                    <Flex justify="space-between" align="center" horizontal>
                        <h5>精选优惠</h5>
                        <Link
                            to={{
                                pathname: '/explore_gameRepositoryView'
                            }}
                        >
                            <svg
                                className="icon_rightArrow"
                                viewBox="0 0 1024 1024"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                            >
                                <path
                                    d="M733.44 550.464a54.4 54.4 0 0 0 0-76.928l-379.52-379.52A48 48 0 0 0 286.08 161.92L636.16 512l-350.08 350.08a48 48 0 1 0 67.84 67.84l379.52-379.456z"
                                    fill="#2c2c2c"
                                ></path>
                            </svg>
                        </Link>
                    </Flex>

                    <Flex>
                        <div className="css-1525v2c" data-testid="prev-button">
                            <button className="css-17tg536" disabled="" aria-label="上一张幻灯片" tabIndex="0"><span
                                className="css-12wf8hj" aria-hidden="true" data-testid="icon"><svg
                                xmlns="http://www.w3.org/2000/svg" className="svg css-uwwqev" viewBox="0 0 5 9"><path
                                stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none"
                                fill-rule="evenodd"></path></svg></span></button>
                        </div>
                        <div className="css-1525v2c" data-testid="next-button">
                            <button className="css-17tg536" aria-label="下一张幻灯片" tabIndex="0"><span
                                className="css-13x459g" aria-hidden="true" data-testid="icon"><svg
                                xmlns="http://www.w3.org/2000/svg" className="svg css-uwwqev" viewBox="0 0 5 9"><path
                                stroke="currentColor" d="M1 1l3 3.5L1 8" fill="none"
                                fill-rule="evenodd"></path></svg></span></button>
                        </div>
                    </Flex>
                </Flex>
            </div>

            <Flex justify="space-between" align="center" horizontal>
                <div>
                    <div className="css-uwwqev" data-testid="picture"><img
                        alt="Scarlet Hood and the Wicked Wood"
                        src="https://cdn1.epicgames.com/salesEvent/salesEvent/egs-scarlethoodandthewickedwood-devespressogames-s2-1200x1600-79c48cfcce66_1200x1600-dbe1e01c0399b91da4b4e387ddd975cd?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                        className="css-174g26k"
                        data-image="https://cdn1.epicgames.com/salesEvent/salesEvent/egs-scarlethoodandthewickedwood-devespressogames-s2-1200x1600-79c48cfcce66_1200x1600-dbe1e01c0399b91da4b4e387ddd975cd?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                        data-testid="picture-image"
                        style={{width:205, height:273, borderRadius: 10}}
                    />
                    </div>
                    <Flex justify="flex-start" align="start" vertical>
                        <h8>基础游戏</h8>
                        <h7>Scarlet Hood and the Wicked Wood</h7>
                        <Space style={{width:'100%'}} size="middle">
                            <h9>-70%</h9>
                            <h8>¥50</h8>
                            <h8>¥15</h8>
                        </Space>
                    </Flex>
                </div>
                <div>
                    <div className="css-uwwqev" data-testid="picture">
                        <img alt="Lifespace Traveler"
                             src="https://cdn1.epicgames.com/spt-assets/cac738aad39247ab9773a935fa249a7a/lifespace-traveler-1n8vc.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             className="css-174g26k"
                             data-image="https://cdn1.epicgames.com/spt-assets/cac738aad39247ab9773a935fa249a7a/lifespace-traveler-1n8vc.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             data-testid="picture-image"
                             style={{width:205, height:273, borderRadius: 10}}/>
                    </div>
                    <Flex justify="flex-start" align="start" vertical>
                        <h8>基础游戏</h8>
                        <h7>Scarlet Hood and the Wicked Wood</h7>
                        <Space style={{width:'100%'}} size="middle">
                            <h9>-50%</h9>
                            <h8>¥47</h8>
                            <h8>¥23.50</h8>
                        </Space>
                    </Flex>
                </div>
                <div>
                    <div className="css-uwwqev" data-testid="picture">
                        <img alt="INDUSTRIA"
                             src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S2_1200x1600-b1181c183907044fe877286351ec9905?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             className="css-174g26k"
                             data-image="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_INDUSTRIA_Bleakmill_S2_1200x1600-b1181c183907044fe877286351ec9905?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             data-testid="picture-image"
                             style={{width:205, height:273, borderRadius: 10}}/>
                    </div>
                    <Flex justify="flex-start" align="start" vertical>
                        <h8>基础游戏</h8>
                        <h7>Scarlet Hood and the Wicked Wood</h7>
                        <Space style={{width:'100%'}} size="middle">
                            <h9>-70%</h9>
                            <h8>¥50</h8>
                            <h8>¥15</h8>
                        </Space>
                    </Flex>
                </div>
                <div>
                    <div className="css-uwwqev" data-testid="picture">
                        <img alt="Dead by Daylight"
                             src="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             className="css-174g26k"
                             data-image="https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             data-testid="picture-image"
                             style={{width:205, height:273, borderRadius: 10}}/>
                    </div>
                    <Flex justify="flex-start" align="start" vertical>
                        <h8>基础游戏</h8>
                        <h7>Scarlet Hood and the Wicked Wood</h7>
                        <Space style={{width:'100%'}} size="middle">
                            <h8>-70%</h8>
                            <h8>¥50</h8>
                            <h8>¥15</h8>
                        </Space>
                    </Flex>
                </div>
                <div>
                    <div className="css-uwwqev" data-testid="picture">
                        <img alt="Tiny Lands"
                             src="https://cdn1.epicgames.com/spt-assets/b284537d73d24482b4c58d6c1b2cafac/download-tiny-lands-offer-1nwq2.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             className="css-174g26k"
                             data-image="https://cdn1.epicgames.com/spt-assets/b284537d73d24482b4c58d6c1b2cafac/download-tiny-lands-offer-1nwq2.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360"
                             data-testid="picture-image"
                             style={{width:205, height:273, borderRadius: 10}}/>
                    </div>
                    <Flex justify="flex-start" align="start" vertical>
                        <h8>基础游戏</h8>
                        <h7>Scarlet Hood and the Wicked Wood</h7>
                        <Space style={{width:'100%'}} size="middle">
                            <h8>-70%</h8>
                            <h8>¥50</h8>
                            <h8>¥15</h8>
                        </Space>
                    </Flex>
                </div>
            </Flex>

            <div style={{marginTop: 20, marginBottom: 20}}></div>
            <Flex gap="middle" align="start" vertical>
                <Flex style={{width: '100%', height: 200}} justify="space-between" align="center">
                    <img alt="影子诡局：被诅咒的海盗"
                         src="https://cdn2.unrealengine.com/zh-cn-egs-dotw-shadow-gambit-the-cursed-crew-breaker-1920x1080-df1c4d29d5bf.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/zh-cn-egs-dotw-shadow-gambit-the-cursed-crew-breaker-1920x1080-df1c4d29d5bf.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{width:346, height:195, borderRadius: 10}}
                    />
                    <img alt="《Sherlock Holmes The Awakened》标准版"
                         src="https://cdn2.unrealengine.com/zh-cn-egs-dotw-sherlock-holmes-the-awakened-breaker-1920x1080-90cf91129e47.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/zh-cn-egs-dotw-sherlock-holmes-the-awakened-breaker-1920x1080-90cf91129e47.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{width:346, height:195, borderRadius: 10}}
                    />
                    <img alt="在这里查看全部本周特惠游戏。"
                         src="https://cdn2.unrealengine.com/zh-cn-sales-specials-dotw-breaker-asset-1920x1080-048cd00c08d4.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/zh-cn-sales-specials-dotw-breaker-asset-1920x1080-048cd00c08d4.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{width:346, height:195, borderRadius: 10}}
                    />

                </Flex>
            </Flex>

            <div style={{marginTop: 20, marginBottom: 20}}></div>
        </div>
    );
}

function Free(){
    return(
        <div>
            <div style={{background: 'rgba(42,42,42)', borderRadius: 10, width:'100%', height:410}}>
                <div style={{marginLeft: 25, marginRight:25}}>
                    <Flex gap="middle" align="start" vertical>
                        <Space size='small' align='center' style={{marginTop:20, marginBottom:20}}>
                            <svg t="1702112159290" className="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="2391" width="40" height="40">
                                <path
                                    d="M474.18097 127.290893l-134.35708 0q-13.933327 0-21.397609-6.469045t-10.449995-16.421421-2.985713-22.392847 1.990475-23.388084q0.995238-10.947614 3.980951-23.885703t8.45952-21.895228 14.430946-11.942852 21.895228 4.976188q14.928564 8.957139 33.83808 19.407134t36.823792 20.89999 33.340461 18.909515 23.388084 13.435708q9.952376 6.966663 14.928564 15.426183t3.980951 15.923802-7.961901 12.44047-19.904753 4.976188zM551.809505 126.295656l133.361843 0q13.933327 0 21.397609-6.469045t10.449995-16.421421 2.985713-22.392847-0.995238-23.388084q-1.990475-10.947614-4.478569-23.388084t-7.961901-21.397609-14.430946-11.942852-21.895228 3.980951q-14.928564 8.957139-33.83808 19.407134t-37.321411 20.89999-33.83808 18.909515-22.392847 13.435708q-10.947614 6.966663-15.923802 15.426183t-3.980951 15.923802 7.961901 12.44047 20.89999 4.976188zM460.247643 191.981339l-288.618913 0q-31.847604 0-41.302362 10.449995t-9.454758 33.340461l0 87.580912q0 24.880941 10.449995 36.823792t41.302362 11.942852l287.623676 0 0-180.138011zM568.728545 191.981339l284.637963 0q31.847604 0 43.292837 12.44047t11.445233 35.330936l0 85.590436q0 23.885703-10.449995 35.330936t-41.302362 11.445233l-287.623676 0 0-180.138011zM460.247643 424.866945l-305.537953 0 0 163.218972 0 64.690446 0 60.709496 0 51.752357 0 35.828555q0 50.757119 28.861891 78.623773t89.571387 27.866654l187.104675 0 0-482.690252zM568.728545 424.866945l304.542716 0 0 373.214112q-0.995238 50.757119-28.861891 80.116629t-88.576149 29.35951l-187.104675 0 0-482.690252z"
                                    p-id="2392" fill="#ffffff"></path>
                            </svg>
                            <h5 style={{color:'white'}}>免费游戏</h5>
                        </Space>
                        <Flex justify='space-between' align='center' horizontal style={{width:'100%'}}>
                            <Flex gap='small' align='start' vertical>
                                <img alt="《GigaBash 巨击大乱斗》"
                                     src="https://cdn1.epicgames.com/offer/16fc138ed83846bc90d923fe0d87ad72/EGS_GigaBash_PassionRepublicGames_S1_2560x1440-f0d657610403750a33b2ed4a372d21ec?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                                     className="css-1b2k567"
                                     data-image="https://cdn1.epicgames.com/offer/16fc138ed83846bc90d923fe0d87ad72/EGS_GigaBash_PassionRepublicGames_S1_2560x1440-f0d657610403750a33b2ed4a372d21ec?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                                     data-testid="picture-image"
                                     style={{width:330, height:186, borderRadius:10, marginBottom:20}}/>

                                <h6 style={{color:'white'}}>《GigaBash 巨击大乱斗》</h6>
                                <h6 style={{color:'white'}}>当前免费，12月14日00:00截止</h6>

                            </Flex>
                            <Flex gap='small' align='start' vertical>
                                <img alt="《Predecessor》"
                                     src="https://cdn1.epicgames.com/offer/85f0435aa88347d185dbcb147716609b/EGS_Predecessor_OmedaStudios_S1_2560x1440-9cc93232a68ae80a034f3fb291d788e5?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                                     className="css-1b2k567"
                                     data-image="https://cdn1.epicgames.com/offer/85f0435aa88347d185dbcb147716609b/EGS_Predecessor_OmedaStudios_S1_2560x1440-9cc93232a68ae80a034f3fb291d788e5?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                                     data-testid="picture-image"
                                     style={{width:330, height:186, borderRadius:10, marginBottom:20}}/>
                                <h6 style={{color:'white'}}>《Predecessor》</h6>
                                <h6 style={{color:'white'}}>当前免费，12月14日00:00截止</h6>
                            </Flex>
                            <Flex gap='small' align='start' vertical>
                                <img alt="被锁定的免费游戏"
                                     src="https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/Free-Game-1-16x9_1920x1080-10ac06e6d21704745c2ac290768e1a96?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                                     className="css-1b2k567"
                                     data-image="https://cdn1.epicgames.com/offer/d5241c76f178492ea1540fce45616757/Free-Game-1-16x9_1920x1080-10ac06e6d21704745c2ac290768e1a96?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                                     data-testid="picture-image"
                                     style={{width:330, height:186, borderRadius:10, marginBottom:20}}/>
                                <h6 style={{color:'white'}}>？</h6>
                                <h6 style={{color:'white'}}>四天后解锁</h6>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>

            </div>
        </div>
    )
}

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

function Other() {
    return(
        <div>
            <Flex justify='space-between' align='center' horizontal>
                <Flex gap='small' align='start' vertical>
                    <img alt="《PUBG: BATTLEGROUNDS》"
                         src="https://cdn2.unrealengine.com/egs-pubg-rondo-breaker-1920x1080-c3b2e63a1715.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/egs-pubg-rondo-breaker-1920x1080-c3b2e63a1715.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{width:536, height:301, borderRadius:10}}
                    />
                    <h5>《PUBG: BATTLEGROUNDS》</h5>
                    <h6 style={{color:'rgba(190, 190, 190)'}}>来体验 2023 年度最大的更新。全新 8x8 地图 RONDO。</h6>
                </Flex>
                <Flex gap='small' align='start' vertical>
                    <img alt="《Chivalry 2》免费游玩周末"
                         src="https://cdn2.unrealengine.com/egs-chivalry-ii-free-weekend-dec-23-breaker-1920x1080-6e986c0dad5d.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         className="css-1iusbvt"
                         data-image="https://cdn2.unrealengine.com/egs-chivalry-ii-free-weekend-dec-23-breaker-1920x1080-6e986c0dad5d.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854"
                         data-testid="picture-image"
                         style={{width:536, height:301, borderRadius:10}}
                    />
                    <h5>《Chivalry 2》免费游玩周末</h5>
                    <h6 style={{color:'rgba(190, 190, 190)'}}>本周末来免费试玩《Chivalry 2》及其更新，更可四折购买</h6>

                </Flex>
            </Flex>
        </div>
    )
}

export default ExploreView;

