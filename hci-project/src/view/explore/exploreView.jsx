import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { Recommendation } from './component/recommendation';
import { GuessLike } from './component/guessLike';
import { Other } from './component/other';
import { DaliyRecommendation } from './component/daliyRecommendation';
import { Button, Flex, FloatButton } from 'antd';
import { Header } from 'antd/es/layout/layout';
import BackTop from '../../component/BackTop';

const ExploreView = function ExploreView() {
    return (
        <div style={{ marginLeft: 60, marginRight: 60 }}>
            <Header style={{ background: '#001529', marginBottom: 20 }}>
                <Flex justify='space-between' align='center' style={{ height: '100%' }}>
                    <span style={{ fontSize: 23, lineHeight: 1.4, color: 'white' }}>探索</span>
                    <Link to={'/explore/gameRepository'} style={{ marginTop: 10 }}>
                        <Button
                            type='text'
                            style={{
                                fontSize: 18,
                                color: 'white',
                                borderColor: 'white',
                            }}
                        >
                            浏览更多
                        </Button>
                    </Link>
                </Flex>
            </Header>
            <GuessLike gameCount={4} />
            <div style={{ marginTop: 40, marginBottom: 40 }}></div>
            <DaliyRecommendation gameCount={4} />
            <div style={{ marginTop: 40, marginBottom: 40 }}></div>
            <Other gameCount={2} />
            <BackTop />
        </div>
    );
};

export default ExploreView;
