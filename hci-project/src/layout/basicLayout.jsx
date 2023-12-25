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
import {setBasicCurrent} from "../redux/navbar/basicbarSlice";

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

    const onClick = (e) => {
        console.log('click ', e);
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
                    <BasicBar/>
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
                        placeholder='请输入搜索内容'
                        // allowClear
                        enterButton='搜索'
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

const items = [
    {
        label: (
            <Link className='nav-link' aria-current='page' to='/'>
                首页
            </Link>
        ),
        icon: <HomeOutlined />,
        key: 'home',
    },
    {
        label: (
            <Link className='nav-link' to='/explore'>
                探索
            </Link>
        ),
        icon: <UserOutlined />,
        key: 'explore',
    },
    {
        label: (
            <Link className='nav-link' to='/news'>
                新闻
            </Link>
        ),
        icon: <ReadOutlined />,
        key: 'news',
    },    {
        label: (
            <Link className='nav-link' to='/community'>
                社区
            </Link>
        ),
        icon: <TeamOutlined />,
        key: 'community',
    },

];

const BasicBar = ()=>{
    const current = useSelector((state) => state.basicBar.current);
    const dispatch = useDispatch()
    if(location.pathname.startsWith("/user") || location.pathname.startsWith("/component") ){
        dispatch(setBasicCurrent(""))
    }
    else if(location.pathname.startsWith("/news")){
        dispatch(setBasicCurrent("news"))
    }
    else if(location.pathname.startsWith("/explore")){
        dispatch(setBasicCurrent("explore"))
    }
    else if(location.pathname.startsWith("/community")){
        dispatch(setBasicCurrent("community"))
    }
    else{
        dispatch(setBasicCurrent("home"))
    }

    const onClick = (e) => {
        console.log('click ', e);
        dispatch(setBasicCurrent(e.key))
    };
    console.log("current is here")
    console.log(current)
    return <Menu onClick={onClick}
                 selectedKeys={[current]}
                 items={items}
                 className='a'
                 defaultSelectedKeys={['1']}
                 defaultOpenKeys={['sub1']}
                 mode='inline'
                 theme='dark'
          />;
}

export default BasicLayout;
