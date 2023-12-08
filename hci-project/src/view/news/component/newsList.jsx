import React, { Component } from 'react';
import { NewsListCard } from './newsListCard';
import { Avatar, List } from 'antd';
import { Link } from 'react-router-dom';

export const NewsList = ({ data }) => {
    return (
        <List
            itemLayout='vertical'
            size='large'
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={data}
            renderItem={(item) => <NewsListCard />}
        />
    );
};
