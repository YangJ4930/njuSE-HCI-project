import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {changeVisible, setCurrent} from '../../redux/navbar/navbarSlice';
import { Layout, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { HomeFilled } from '@ant-design/icons';
const { Header } = Layout;
const SearchHead = ({ name }) => {
    return(
        <Header style={{ background: '#001529' }}>
            <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>{name}</span>
            </Row>
        </Header>
    )
}

const SearchNavbar = ({ items }) => {
    const current = useSelector((state)=> state.navbar.current)
    // const [current, setCurrent] = useState("game");
    const dispatch = useDispatch()
    const onClick = (e) => {
        console.log('click ', e);
        dispatch(setCurrent(e.key))
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

const ChooseHead = () =>{
    const location = useLocation();
    const pathname = location.pathname


    if(pathname.startsWith("/search/game")){
        return(
            <SearchHead name ="游戏"/>
        )
    }
    else if(pathname.startsWith("/search/news")){
        return(
            <SearchHead name ="新闻"/>
        )
    }
    else if(pathname.startsWith("/search/community") ){
        return(
            <SearchHead name ="社区"/>
        )
    }
}

const SearchView = () =>{
    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const path = useSelector((state) => state.navbar.path);
    const itemlist = [
        {
            label: (
                <HomeFilled onClick={()=>{console.log(path);
                        navigate(path);
                    }}
                    style={{ fontSize: 20 }}
                />
            ),
            key: 'back',
        },
        {
            label: (
                <Link className='nav-link' to={'/search/game'} style={{ fontSize: 25 }}>
                    游戏
                </Link>
            ),
            key: 'game',
        },
        {
            label: (
                <Link className='nav-link' to={'/search/news'} style={{ fontSize: 25 }}>
                    新闻
                </Link>
            ),
            key: 'news',
        },
        {
            label: (
                <Link className='nav-link' to={'/search/community'} style={{ fontSize: 25 }}>
                    社区
                </Link>
            ),
            key: 'community',
        },
    ];
    useEffect(() => {
        // 根据路由的变化设置 visible 的值
        dispatch(changeVisible(false)); // 分发 action 更新可见性
    }, [location, dispatch]);

    useEffect(() => {
        return () => {
            dispatch(changeVisible(true)); // 组件返回时将 visible 设置为 true
        }
    }, [dispatch])
    return(
        <>
            <SearchNavbar items={itemlist} />
            <div style={{ margin: 30 }}></div>
            <ChooseHead />
        </>
    )
}
export default SearchView;
