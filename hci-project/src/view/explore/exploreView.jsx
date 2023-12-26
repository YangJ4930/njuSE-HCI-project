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
