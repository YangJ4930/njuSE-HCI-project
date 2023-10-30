import React, {useState} from 'react'
import {Layout, Menu, Input, Avatar,Divider,Card} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import HomeView from '../view/homeView';
import NewsView from '../view/newsView';
import SearchView from '../view/searchView';
import CommunityView from '../view/community/communityView';
import Explore_gameRepositoryView from "../view/explore_gameRepositoryView";
import ExploreView from '../view/exploreView'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import UserView from "../view/userView";
import {BarsOutlined, HeartOutlined, HomeOutlined, ReadOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import NewsContentView from '../view/newsContentView';
import PostComponent from '../view/community/component/postComponent';
import Communitydetail from '../view/community/component/communitydetail';
import './Menu.css'

import GameDetailView from "../view/gameDetailView";

const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;


const {Search} = Input;


const BasicLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    let SearchLog = () => {
        console.log("hello")
        navigate("/search")
    }

    return (
        <Layout>
            <Sider  theme='light' collapsible>
                <Card bordered={false} hoverable className='av'
                      layout="center"
                      direction="column" >
                    <Card.Meta
                        avatar={<Avatar size='large' src={<img width="40" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></img>}></Avatar>}
                        description={
                            <>
                                <div className='v'>杨京</div>
                                <div className='vi' >
                                    <p>
                                        <span className='qai'>杨京，我爱上人机交互的课</span>
                                    </p>
                                </div>
                            </>
                        }
                    >
                    </Card.Meta>
                    <p></p>
                </Card>
                <Menu className='a'
                    defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
                    theme="dark" inlineCollapsed={collapsed}
                >

                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined/>}>
                        <Link className="nav-link" to="/user">用户</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ReadOutlined/>}>
                        <Link className="nav-link" to="/news">News</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<TeamOutlined/>}>
                        <Link className="nav-link" to="/community">社区</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span>
                            <span>Navigation One</span></span>} icon={<HeartOutlined/>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>

            <Layout>
                <Header style={{
                    background: '#fff', padding:
                        0
                }}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{
                            width: 300,
                            float: "right",
                        }}
                        // onClick={this.state.SearchLog}
                        onSearch={SearchLog}
                    />

                </Header>

                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{
                        padding: 24, background: '#fff', minHeight: 360
                    }}>
                        <Routes>
                            <Route path="/" element={<HomeView></HomeView>}></Route>
                            <Route path='/search' element={<SearchView></SearchView>}></Route>
                            <Route path="/news" element={<NewsView></NewsView>}></Route>
                            <Route path='/news/content' element={<NewsContentView></NewsContentView>}></Route>
                            <Route path="/community" element={<CommunityView></CommunityView>}></Route>
                            <Route path="/explore" element={<ExploreView></ExploreView>}></Route>
                            <Route path="/explore_gameRepositoryView"
                                   element={<Explore_gameRepositoryView></Explore_gameRepositoryView>}></Route>
                            <Route path="/user" element={<UserView></UserView>}></Route>
                            <Route path="/component/postComponent"element = {<PostComponent></PostComponent>}></Route>
                            <Route path="/component/Communitydetail"element = {<Communitydetail></Communitydetail>}></Route>
                            <Route path="/game/:gameId" element={<GameDetailView></GameDetailView>}></Route>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>无敌的yangj</Footer>
            </Layout>
        </Layout>
    );
}

export default BasicLayout;


