import React, {useState} from 'react';
import {Layout, Menu, Input, Avatar, Divider, Card, Button} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import HomeView from '../view/home/homeView';
import NewsView from '../view/news/newsView';
import SearchView from '../view/search/searchView';
import CommunityView from '../view/community/communityView';
import Explore_gameRepositoryView from '../view/explore/explore_gameRepositoryView';
import ExploreView from '../view/explore/exploreView';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import UserView from '../view/user/userView';
import {
    BarsOutlined,
    HeartOutlined,
    HomeOutlined,
    ReadOutlined,
    TeamOutlined,
    UserOutlined,
    
} from '@ant-design/icons';
import NewsContentView from '../view/news/newsContentView';
import PostComponent from '../view/community/component/postComponent';
import Communitydetail from '../component/communitydetail';
import './Menu.css'

import GameDetailView from '../component/gameDetailView';
import {useSelector} from 'react-redux';
import {RegisterScreen} from "../view/user/RegisterScreen";
import {LoginScreen} from "../view/user/LoginScreen";

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const {Search} = Input;

const BasicLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user);
    const isLogin = useSelector((state) => state.auth.isLogin);
    let SearchLog = () => {
        console.log('hello');
        navigate('/search');
    };

    return (
        <Layout>
            <Sider theme='light' collapsible>
                <Card bordered={false} hoverable className='av' layout='center' direction='column'>
                    <Card.Meta
                        avatar={
                            <Link className='nav-link' to='/user'>
                                {
                                    isLogin === true ?
                                        <Avatar
                                            size='large'
                                            src={<img width='40' src={userInfo.avatarUrl}></img>}
                                        /> : <Button
                                            type='primary'
                                            shape='round'
                                            size='large'
                                        >登录</Button>
                                }
                            </Link>
                        }
                        description={
                            isLogin === true ? (
                                <>
                                    <div className='v'>{userInfo.username}</div>
                                    <div className='vi'>
                                        <p>
                                            <span className='qai'>{userInfo.description}</span>
                                        </p>
                                    </div>
                                </>
                            ) : <></>
                        }
                    ></Card.Meta>
                    <p></p>
                </Card>
                <Menu
                    className='a'
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode='inline'
                    theme='dark'
                    inlineCollapsed={collapsed}
                >
                    <Menu.Item key='1' icon={<HomeOutlined/>}>
                        <Link className='nav-link' aria-current='page' to='/'>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<UserOutlined/>}>
                        <Link className='nav-link' to='/explore'>
                            explore
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='3' icon={<ReadOutlined/>}>
                        <Link className='nav-link' to='/news'>
                            News
                        </Link>
                    </Menu.Item>
                    <Menu.Item key='4' icon={<TeamOutlined/>}>
                        <Link className='nav-link' to='/community'>
                            社区
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        key='sub1'
                        title={
                            <span>
                                <span>Navigation One</span>
                            </span>
                        }
                        icon={<HeartOutlined/>}
                    >
                        <Menu.Item key='5'>Option 5</Menu.Item>
                        <Menu.Item key='6'>Option 6</Menu.Item>
                        <Menu.Item key='7'>Option 7</Menu.Item>
                        <Menu.Item key='8'>Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>

            <Layout>
                <Header
                    style={{
                        background: '#fff',
                        padding: 0,
                    }}
                >
                    <Search
                        placeholder='input search text'
                        allowClear
                        enterButton='Search'
                        size='large'
                        style={{
                            width: 300,
                            float: 'right',
                        }}
                        // onClick={this.state.SearchLog}
                        onSearch={SearchLog}
                    />
                </Header>

                <Content style={{margin: '24px 16px 0'}}>
                    <div
                        style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360,
                        }}
                    >
                        <Routes>
                            <Route path='/' element={<HomeView></HomeView>}></Route>
                            <Route path='/search' element={<SearchView></SearchView>}></Route>
                            <Route path='/news' element={<NewsView></NewsView>}></Route>
                            <Route
                                path='/news/content'
                                element={<NewsContentView></NewsContentView>}
                            ></Route>
                            <Route
                                path='/community'
                                element={<CommunityView></CommunityView>}
                            ></Route>
                            <Route path='/explore' element={<ExploreView></ExploreView>}></Route>
                            <Route
                                path='/explore_gameRepositoryView'
                                element={<Explore_gameRepositoryView></Explore_gameRepositoryView>}
                            ></Route>
                            <Route path='/user' element={<UserView></UserView>}></Route>
                            <Route
                                path='/component/postComponent'
                                element={<PostComponent></PostComponent>}
                            ></Route>
                            <Route
                                path='/component/Communitydetail/:communityId'
                                element={<Communitydetail></Communitydetail>}
                            ></Route>
                            <Route
                                path='/game/:gameId'
                                element={<GameDetailView></GameDetailView>}
                            ></Route>
                            <Route
                                path={'/user/register'}
                                element={<RegisterScreen></RegisterScreen>}
                            ></Route>
                            <Route
                                path={'/user/login'}
                                element={<LoginScreen></LoginScreen>}
                            ></Route>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>我最喜欢人机交互课了</Footer>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;
