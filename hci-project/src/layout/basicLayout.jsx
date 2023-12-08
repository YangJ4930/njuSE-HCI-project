import React, { useState } from 'react';
import { Layout, Menu, Input, Avatar, Divider, Card, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
    BarsOutlined,
    HeartOutlined,
    HomeOutlined,
    ReadOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import './Menu.css';

import { useSelector } from 'react-redux';
import Router from '../utils/Routes';

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const { Search } = Input;

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
                                {isLogin === true ? (
                                    <Avatar
                                        size='large'
                                        src={<img width='40' src={userInfo.avatarUrl}></img>}
                                    />
                                ) : (
                                    <Button type='primary' shape='round' size='large'>
                                        登录
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
                    inlineCollapsed={collapsed}
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
                    <SubMenu
                        key='sub1'
                        title={
                            <span>
                                <span>收藏</span>
                            </span>
                        }
                        icon={<HeartOutlined />}
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

                <Footer style={{ textAlign: 'center' }}>我最喜欢人机交互课了</Footer>
            </Layout>
        </Layout>
    );
};

export default BasicLayout;
