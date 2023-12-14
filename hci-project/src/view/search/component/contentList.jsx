import React from 'react';
import {ContentListCard} from './contentListCard';
import { List } from 'antd';

export const ContentList = ({ data }) => {
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
            renderItem={(item) => <ContentListCard/>}
        />
    );
};