import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeVisible, setCurrent } from '../../redux/navbar/navbarSlice';
import {Col, FloatButton, Layout, Menu, Row, Typography} from 'antd';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { HomeFilled } from '@ant-design/icons';
import axios from '../../axios';
import {GameCard} from "./component/GameCard";
import {GameList} from "./component/GameList";
import {ListNews} from "../news/component/listNews";
import {CardList} from "../community/communityView";
import BackTop from "../../component/BackTop";
import {GameTypeSelector, NotFound} from "../explore/exploreGameRepositoryView";

const { Header } = Layout;
const { Title, Text } = Typography;
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
    const [DisplayList, setDisplayList] = useState([])
    const selected = useSelector((state) => state.game.selected);
    const gameTypes = useSelector((state) => state.game.gameTypes);

    useEffect(() => {
        axios.get(`/search/game?content=${content}`).then((response) => {
            console.log(response);
            setGameList(response.data);
            console.log(response.data);
        });
    }, [content, pathname])

    useEffect(() => {
        if (
            selected.every((value) => {
                return value === false;
            })
        ) {
            // 当全部游戏类型都未选中时，返回全部数据
            setDisplayList(gameList);
        } else {
            const selectedData = gameList.filter((item) => {
                // 返回同时满足所有筛选条件的游戏
                return selected.every((isSelected, index) => {
                    const haveTag = item.tags.includes(gameTypes[index]);
                    return (isSelected && haveTag) || !isSelected;
                });
            });
            console.log('selected: ', selectedData);
            setDisplayList(selectedData);
        }
    }, [selected, gameList, gameTypes, pathname]);

    return (
        <>

            <Row gutter={2}>
                <Col span={3}>
                    <GameTypeSelector />
                </Col>

                <Col span={20}>
                    <Text style={{color: "rgba(122,121,121, 0.8)", fontSize: "1.5vw", fontStyle: "italic"}}>搜索关键词：{content}</Text>
                    {DisplayList.length > 0 ? (
                        <GameList listData={DisplayList} widthData={300} />
                    ) : (
                        <NotFound />
                    )}
                </Col>

                <div style={{margin: "10vw"}}></div>

                <BackTop />
            </Row>
        </>

    );
}

const SearchView = () =>{

    const location = useLocation();
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();
    const content = searchParams.get("content")
    return (
        <>
            <div style={{ margin: 30 }}></div>
            <ChooseList content = {content}/>
            <BackTop/>
        </>
    );
};
export default SearchView;
