import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeVisible, setCurrent } from '../../redux/navbar/navbarSlice';
import { Layout, Menu, Row } from 'antd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { HomeFilled } from '@ant-design/icons';
import axios from '../../axios';
import {GameCard} from "./component/GameCard";
import {GameList} from "./component/GameList";
import {ListNews} from "../news/component/listNiews";

const { Header } = Layout;
const SearchHead = ({ name }) => {
    return (
        <Header style={{ background: '#001529' }}>
            <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>{name}</span>
            </Row>
        </Header>
    );
};

const SearchNavbar = ({ items }) => {
    const current = useSelector((state) => state.navbar.current);
    // const [current, setCurrent] = useState("game");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const path = useSelector((state) => state.navbar.path);
    const onClick = (e) => {
        console.log('click ', e);
        if(e.key === 'back'){
            navigate(path);
        }
        dispatch(setCurrent(e.key))

    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items} />;
};

const ChooseList = ({ content }) => {

    const location = useLocation();
    const pathname = location.pathname;
    const [gameList, setGameList] = useState([])
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/search/game?content=${content}`).then((response) => {
            console.log(response);
            setGameList(response.data);
            console.log(response.data);
        });

        axios.get(`http://localhost:8080/search/news?content=${content}`).then((response)=>{
            setNewsList(response.data);
            console.log("news")
            console.log(response.data)
        });

    }, [content, pathname]);


    if(pathname.startsWith("/search/game")){


        console.log(gameList)

        if (gameList.length === 0) {
            return (
                <h2>暂无信息</h2>
            )
        }
        else{
            return(
                <GameList listData={gameList}/>
            )
        }
    }
    else if(pathname.startsWith("/search/news")){
        return(
            <ListNews data={newsList}></ListNews>
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
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const content = searchParams.get("content")

    const itemlist = [
        {
            label: (
                <HomeFilled
                    style={{ fontSize: 20 }}>
                </HomeFilled>

            ),
            key: 'back',
        },
        {
            label: (
                <Link className='nav-link' to={`/search/game/?${searchParams}`} style={{ fontSize: 25 }}>
                    游戏
                </Link>
            ),
            key: 'game',
        },
        {
            label: (
                <Link className='nav-link' to={`/search/news/?${searchParams}`} style={{ fontSize: 25 }}>
                    新闻
                </Link>
            ),
            key: 'news',
        },
        {
            label: (
                <Link className='nav-link' to={`/search/community/?${searchParams}`} style={{ fontSize: 25 }}>
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
        };
    }, [dispatch]);
    return (
        <>
            <SearchNavbar items={itemlist} />
            <div style={{ margin: 30 }}></div>
            <ChooseList content = {content}/>
        </>
    );
};
export default SearchView;
