import React, { useState } from 'react';
import { Layout, Menu, Input, Avatar, Divider, Card, Button } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
    BarsOutlined,
    HeartOutlined,
    HomeOutlined,
    LoginOutlined,
    ReadOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './Menu.css';

import { useSelector, useDispatch } from 'react-redux';
import Router from '../utils/Routes';
import { lastPath, setCurrent } from '../redux/navbar/navbarSlice';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const { Search } = Input;

const BasicLayout = () => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.user);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const isVisible = useSelector((state) => state.navbar.visible);
    const [searchWord, setSearchWord] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();
    let SearchJump = () => {
        if (!location.pathname.startsWith('/search')) {
            dispatch(lastPath(location.pathname));
        }
        dispatch(setCurrent('game'));

        navigate(`/search/game?content=${searchWord}`);
    };

    const changeSiderCollapsed = () => {
        setSiderCollapsed(!siderCollapsed);
    };

    return (
        <Layout>
            <div style={{ display: isVisible ? 'flex' : 'none' }}>
                <Sider
                    theme='light'
                    collapsible
                    collapsed={siderCollapsed}
                    onCollapse={changeSiderCollapsed}
                >
                    <Card
                        bordered={false}
                        hoverable
                        className='av'
                        layout='center'
                        direction='column'
                    >
                        <Card.Meta
                            avatar={
                                <Link className='nav-link' to='/user'>
                                    {isLogin === true ? (
                                        <Avatar
                                            size='large'
                                            src={<img width='40' src={userInfo.avatarUrl}></img>}
                                        />
                                    ) : (
                                        <Button
                                            type='primary'
                                            shape='round'
                                            size='default'
                                            icon={<LoginOutlined />}
                                        >
                                            {siderCollapsed ? '' : '登录/注册'}
                                        </Button>
                                    )}
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
                                ) : (
                                    <></>
                                )
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
                    >
                        <Menu.Item key='1' icon={<HomeOutlined />}>
                            <Link className='nav-link' aria-current='page' to='/'>
                                首页
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<UserOutlined />}>
                            <Link className='nav-link' to='/explore'>
                                探索
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='3' icon={<ReadOutlined />}>
                            <Link className='nav-link' to='/news'>
                                新闻
                            </Link>
                        </Menu.Item>
                        <Menu.Item key='4' icon={<TeamOutlined />}>
                            <Link className='nav-link' to='/community'>
                                社区
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>
            <Layout>
                <Header
                    style={{
                        background: '#fff',
                        padding: 0,
                    }}
                >
                    <Search
                        placeholder='input search text'
                        // allowClear
                        enterButton='Search'
                        size='large'
                        style={{
                            width: 300,
                            float: 'right',
                        }}
                        value={searchWord}
                        // onClick={this.state.SearchLog}
                        onChange={(e) => {
                            setSearchWord(e.target.value);
                        }}
                        onSearch={SearchJump}
                    />
                </Header>

                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            background: '#fff',
                            minHeight: 360,
                            // height:100
                        }}
                    >
                        <Router />
                    </div>
                </Content>
                <div style={{ display: isVisible ? 'flex' : 'none' }}>
                    <Footer style={{ textAlign: 'center' }}>我最喜欢人机交互课了</Footer>
                </div>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;
