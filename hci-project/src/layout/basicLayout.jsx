import React, {useState} from 'react';
import {Layout, Menu, Input, Avatar, Divider, Card, Button} from 'antd';
import {Link, useLocation, useNavigate} from 'react-router-dom';
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

import {useSelector, useDispatch} from 'react-redux';
import Router from '../utils/Routes';
import {lastPath, setCurrent} from '../redux/navbar/navbarSlice';
import {setBasicCurrent} from "../redux/navbar/basicbarSlice";

const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;

const {Search} = Input;

const BasicLayout = () => {
    const [siderCollapsed, setSiderCollapsed] = useState(false);



    const isVisible = useSelector((state) => state.navbar.visible);

    const location = useLocation();


    const changeSiderCollapsed = () => {
        setSiderCollapsed(!siderCollapsed);
    };

    const onClick = (e) => {
        console.log('click ', e);
    };

    return (
        <Layout>
            {/*<div style={{display: isVisible ? 'flex' : 'none'}}>*/}
            {/*    <Sider*/}
            {/*        theme='light'*/}
            {/*        collapsible*/}
            {/*        collapsed={siderCollapsed}*/}
            {/*        onCollapse={changeSiderCollapsed}*/}
            {/*    >*/}
            {/*        <Card*/}
            {/*            bordered={false}*/}
            {/*            hoverable*/}
            {/*            className='av'*/}
            {/*            layout='center'*/}
            {/*            direction='column'*/}
            {/*        >*/}
            {/*            <Card.Meta*/}
            {/*                avatar={*/}
            {/*                    <Link className='nav-link' to='/user'>*/}
            {/*                        {isLogin === true ? (*/}
            {/*                            <Avatar*/}
            {/*                                size='large'*/}
            {/*                                src={<img width='40' src={userInfo.avatarUrl}></img>}*/}
            {/*                            />*/}
            {/*                        ) : (*/}
            {/*                            <Button*/}
            {/*                                type='primary'*/}
            {/*                                shape='round'*/}
            {/*                                size='default'*/}
            {/*                                icon={<LoginOutlined/>}*/}
            {/*                            >*/}
            {/*                                {siderCollapsed ? '' : '登录/注册'}*/}
            {/*                            </Button>*/}
            {/*                        )}*/}
            {/*                    </Link>*/}
            {/*                }*/}
            {/*                description={*/}
            {/*                    isLogin === true ? (*/}
            {/*                        <>*/}
            {/*                            <div className='v'>{userInfo.username}</div>*/}
            {/*                            <div className='vi'>*/}
            {/*                                <p>*/}
            {/*                                    <span className='qai'>{userInfo.description}</span>*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </>*/}
            {/*                    ) : (*/}
            {/*                        <></>*/}
            {/*                    )*/}
            {/*                }*/}
            {/*            ></Card.Meta>*/}
            {/*            <p></p>*/}
            {/*        </Card>*/}

            {/*    </Sider>*/}
            {/*</div>*/}
            <Layout>
                <Header
                    style={{
                        background: '#fff',
                        padding: 0,
                    }}
                >
                    <BasicBar/>

                </Header>

                <Content style={{margin: '24px 16px 0'}}>
                    {/*<div*/}
                    {/*    style={{*/}
                    {/*        padding: 24,*/}
                    {/*        background: '#fff',*/}
                    {/*        minHeight: 360,*/}
                    {/*        // height:100*/}
                    {/*    }}*/}
                    {/*>*/}
                        <Router/>
                    {/*</div>*/}
                </Content>
                <div style={{display: isVisible ? 'flex' : 'none' , justifyContent: 'center'}}>
                    <Footer style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <b>J Game</b> ©2023 Created by J Game
                    </Footer>
                </div>
            </Layout>
        </Layout>
    );
};



const BasicBar = () => {
    const [searchWord, setSearchWord] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLogin = useSelector((state) => state.auth.isLogin);
    const userInfo = useSelector((state) => state.user);
    let SearchJump = () => {
        if (!location.pathname.startsWith('/search')) {
            dispatch(lastPath(location.pathname));
        }
        dispatch(setCurrent('game'));

        navigate(`/search/game?content=${searchWord}`);
    };
    const current = useSelector((state) => state.basicBar.current);

    if (location.pathname.startsWith("/user") || location.pathname.startsWith("/component")) {
        dispatch(setBasicCurrent(""))
    } else if (location.pathname.startsWith("/news")) {
        dispatch(setBasicCurrent("news"))
    } else if (location.pathname.startsWith("/explore")) {
        dispatch(setBasicCurrent("explore"))
    } else if (location.pathname.startsWith("/community")) {
        dispatch(setBasicCurrent("community"))
    }
    // else {
    //     dispatch(setBasicCurrent("home"))
    // }

    const onClick = (e) => {
        console.log('click ', e);
        if(e.key !== 'search') {
            dispatch(setBasicCurrent(e.key))
            navigate(`/${e.key}`)
        }
    };
    console.log("current is here")
    console.log(current)

    const items = [
        // {
        //     label: (
        //         <Link className='nav-link' aria-current='page' to='/'>
        //             首页
        //         </Link>
        //     ),
        //     icon: <HomeOutlined/>,
        //     key: 'home',
        // },
        {
            label: (
                '探索'

            ),
            icon: <UserOutlined/>,
            key: 'explore',
        },
        {
            label: (
                    '新闻'
            ),
            icon: <ReadOutlined/>,
            key: 'news',
        },
        {
            label: (
                    '社区'
            ),
            icon: <TeamOutlined/>,
            key: 'community',
        },
        {
            label: (
                <Search
                    placeholder='请输入搜索内容'
                    // allowClear
                    enterButton='搜索'
                    size='large'
                    style={{
                        width: 300,
                        marginLeft: 450,
                        marginTop: 10
                    }}
                    value={searchWord}
                    // onClick={this.state.SearchLog}
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
                <Link className='nav-link' to='/user' style={{marginLeft: 450}}>
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
                            icon={<LoginOutlined/>}
                        >
                            {'登录/注册'}
                        </Button>
                    )}
                </Link>
            ),
            key:'user'
        }

    ];

    return <Menu onClick={onClick}
                 selectedKeys={[current]}
                 items={items}
                 defaultSelectedKeys={['1']}
                 defaultOpenKeys={['sub1']}
                 mode="horizontal"
                 theme='dark'
    />;
}

export default BasicLayout;
