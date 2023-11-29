import React, { Component } from 'react';
import { Avatar, List, Space, Carousel } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import { th } from '@faker-js/faker';

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

// const data = Array.from({
//     length: 23,
// }).map((_, i) => ({
//     // ?chapter=${web.id}
//     href: `/news/content/?document=${i}`,
//     title: `人机交互为什么是我最喜欢的课的理由 ${i}`,
//     avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
//     description:
//       '人机交互人机交互人机交互',
//     content:
//       '人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互人机交互v',
//   }));
const IconText = ({ text }) => (
    <Space>
        {/* {React.createElement(icon)} */}
        {text}
    </Space>
);
const ListNews = ({ data }) => (
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
        footer={
            <div>
                <b>ant design</b> footer part
            </div>
        }
        renderItem={(item) => (
            <List.Item
                key={item.title}
                actions={[
                    <IconText text='156' key='' />,
                    <IconText text='156' key='' />,
                    <IconText text='2' key='' />,
                ]}
                extra={
                    <img
                        width={250}
                        alt='logo'
                        src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                    />
                }
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<Link to={item.href}>{item.title}</Link>}
                    description={item.description}
                />
                <div
                    style={{
                        whiteSpace: 'pre-line',
                    }}
                >
                    {item.description}
                </div>
            </List.Item>
        )}
    />
);

function NewsView() {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get('/news/content').then((response) => {
            setNewsList(response.data);
            console.log(response.data);
        });
    }, []);

    let data = Array.from({
        length: newsList.length,
    }).map((_, i) => ({
        // ?chapter=${web.id}
        href: `/news/content/?document=${newsList[i].id}`,
        title: newsList[i].title,
        avatar: newsList[i].avatar,
        description: newsList[i].description,
        content: newsList[i].content,
    }));
    return (
        <React.Fragment>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <ListNews data={data} />
        </React.Fragment>
    );
}

export default NewsView;
