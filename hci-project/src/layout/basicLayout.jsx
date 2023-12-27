import React, { useState } from 'react';
import { Layout, Menu, Input, Avatar, Divider, Card, Button, Switch } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
    LoginOutlined,
    ReadOutlined,
    TeamOutlined,
    UserOutlined,
    CloseOutlined,
    CheckOutlined,
} from '@ant-design/icons';
import './Menu.css';

import { useSelector, useDispatch } from 'react-redux';
import Router from '../utils/Routes';
import { lastPath, setCurrent } from '../redux/navbar/navbarSlice';
import { setBasicCurrent } from '../redux/navbar/basicbarSlice';
import Logo from '../static/jgame.png';
import { changeTheme } from '../redux/theme/themeSlice';
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

const { Search } = Input;

const BasicLayout = () => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);

    const isVisible = useSelector((state) => state.navbar.visible);

    const location = useLocation();

    const themeMode = useSelector((state) => state.theme.IsChange);
    const changeSiderCollapsed = () => {
        setSiderCollapsed(!siderCollapsed);
    };

    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <Layout style={{}}>
            <Header
                style={{
                    background: '#fff',
                    padding: 0,
                }}
            >
                <BasicBar />
            </Header>

            <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <Router />
                </div>
            </Content>
            <div style={{ display: isVisible ? 'flex' : 'none', justifyContent: 'center' }}>
                <Footer
                    style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                    }}
                >
                    <div style={{ color: themeMode ? 'white' : 'black' }}>
                        <b>J Game</b> ©2023 Created by J Game
                    </div>
                </Footer>
            </div>
        </Layout>
    );
};

const BasicBar = () => {
    const [searchWord, setSearchWord] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.auth.isLogin);
    const userInfo = useSelector((state) => state.user);
    const isVisible = useSelector((state) => state.navbar.visible);
    let SearchJump = () => {
        if (!location.pathname.startsWith('/search')) {
            dispatch(lastPath(location.pathname));
        }
        dispatch(setCurrent('game'));

        navigate(`/search/game?content=${searchWord}`);
    };
    const current = useSelector((state) => state.basicBar.current);

    if (
        location.pathname.startsWith('/user') ||
        location.pathname.startsWith('/component') ||
        location.pathname.startsWith('/search')
    ) {
        dispatch(setBasicCurrent(''));
    } else if (location.pathname.startsWith('/news')) {
        dispatch(setBasicCurrent('news'));
    } else if (location.pathname.startsWith('/explore')) {
        dispatch(setBasicCurrent('explore'));
    } else if (location.pathname.startsWith('/community')) {
        dispatch(setBasicCurrent('community'));
    }

    const onClick = (e) => {
        console.log('click ', e);
        if (e.key == 'theme') {
        } else if (e.key !== 'search' && e.key !== 'logo') {
            dispatch(setBasicCurrent(e.key));
            navigate(`/${e.key}`);
        }
    };
    console.log('current is here');
    console.log(current);

    const items = [
        {
            label: <img src={Logo} style={{ width: 80, height: 30 }} />,
            key: 'logo',
        },
        {
            label: '探索',
            icon: <UserOutlined />,
            key: 'explore',
        },
        {
            label: '新闻',
            icon: <ReadOutlined />,
            key: 'news',
        },
        {
            label: '社区',
            icon: <TeamOutlined />,
            key: 'community',
        },
        {
            label: (
                <Search
                    placeholder='请输入搜索内容'
                    size='large'
                    style={{
                        width: '15vw',
                        marginLeft: '20vw',
                        marginTop: '0.75vw',
                    }}
                    value={searchWord}
                    onChange={(e) => {
                        setSearchWord(e.target.value);
                    }}
                    onSearch={SearchJump}
                />
            ),
            key: 'search',
        },
        {
            label: (
                <Link className='nav-link' to='/user' style={{ marginLeft: '25vw' }}>
                    {isLogin === true ? (
                        <Avatar
                            size='large'
                            src={<img width='40' src={userInfo.avatarUrl}></img>}
                        />
                    ) : (
                        <>
                            <Button
                                type='primary'
                                shape='round'
                                size='default'
                                icon={<LoginOutlined />}
                            >
                                {'登录/注册'}
                            </Button>
                        </>
                    )}
                </Link>
            ),
            key: 'user',
        },
        {
            label: (
                <>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                        onChange={(checked) => {
                            dispatch(changeTheme(checked));
                        }}
                    />
                </>
            ),
            key: 'theme',
        },
    ];

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            items={items}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='horizontal'
            theme='dark'
            style={{}}
        />
    );
};

export default BasicLayout;
