import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { Recommendation } from './component/recommendation';
import { GuessLike } from './component/guessLike';
import { Other } from './component/other';
import {DaliyRecommendation} from "./component/daliyRecommendation";
import {Button, Flex, FloatButton} from "antd";
import {Header} from "antd/es/layout/layout";


const ExploreView = function ExploreView(){
    const [exploreList, setExploreList] = React.useState([]);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        axios.get('/explore/recommendation').then((response) => {
            console.log(response);
            if (response.data.length >= 30) {
                setExploreList(response.data);
            }
            console.log(response.data)
        }).catch((error) => {
            setError(error.message);
        });
    }, []);

    // 处理错误情况
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (exploreList.length < 30) {
        return <div>Loading...</div>;
    }

    let data = Array.from({
        length: exploreList.length,
    }).map((_, i) => ({
        id: exploreList[i].id,
        imgUrl: exploreList[i].imgUrl,
        name: exploreList[i].name
    }));



    return (
        <>
            <React.Fragment>
                <Header style={{ background: '#001529', marginBottom: 20 }}>
                    <Flex justify='space-between' align='center' style={{ height: '100%' }}>
                        <span style={{ fontSize: 23, lineHeight: 1.4, color: 'white' }}>探索</span>
                        <Link to={'/explore/gameRepository'} style={{marginTop: 10}}>
                            <Button type="text"  style={{
                                fontSize: 18, color: 'white',borderColor:'white'
                            }}>
                                浏览更多
                            </Button>
                        </Link>
                    </Flex>
                </Header>
                <GuessLike data={data.slice(4, 6)} />
                <div style={{ marginTop: 40, marginBottom: 40 }}></div>
                <DaliyRecommendation data={data.slice(10, 30)}/>
                <div style={{ marginTop: 40, marginBottom: 40 }}></div>
                <Other data={data.slice(6, 8)} />
                <FloatButton.BackTop className="backtop" />
            </React.Fragment>
        </>
    );
};

export default ExploreView;
