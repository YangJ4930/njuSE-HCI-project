import React, {Component} from 'react';
import {Avatar, List, Space, Carousel, Row, Card, Image} from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Link, useNavigate} from 'react-router-dom';
import axios from '../../axios';
import {th} from '@faker-js/faker';
import {CommentOutlined, EyeTwoTone, HeartTwoTone, StarTwoTone} from "@ant-design/icons";
import Column from "antd/es/table/Column";
import TextArea from "antd/es/input/TextArea";

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
const ListNews = ({data}) => {
    const navigate = useNavigate();

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
            footer={
                <div>
                    <b>ant design</b> footer part
                </div>
            }
            renderItem={(item) => (
                <Card>
                    <List.Item
                        key={item.title}
                        actions={[
                            <Space>
                                <HeartTwoTone twoToneColor="#eb2f96"
                                              onClick={() => {
                                                  console.log('like')
                                              }}
                                />
                                <span>{item.likes}</span>
                            </Space>,
                            <Space>
                                <EyeTwoTone onClick={() => {
                                    console.log('view')
                                }}/>
                                <span>{item.views}</span>
                            </Space>,
                            <Space>
                                <CommentOutlined color={'#eb2f96'}
                                                 onClick={() => {
                                                     console.log('comments')
                                                 }}
                                />
                                <span>{item.comments}</span>
                            </Space>

                        ]}
                        extra={
                            <img
                                width={250}
                                alt='cover'
                                src={item.cover}
                            />
                        }
                    >
                        <Card
                            hoverable={true}
                            onClick={() => {
                                console.log(`navigate to:${item.id}`);
                                navigate(`/news/content/${item.id}`);
                            }}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar}/>}
                                title={<Link to={item.id}>{item.title}</Link>}
                                description={item.description}
                            />
                            {item.description}
                        </Card>
                    </List.Item>
                </Card>
            )}
        />
    )
}


function NewsView() {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get('/news/contents').then((response) => {
            console.log(response);
            setNewsList(response.data);
            console.log(response.data);
        });
    }, []);

    let data = Array.from({
        length: newsList.length,
    }).map((_, i) => ({
        id: newsList[i].id,
        title: newsList[i].title,
        avatar: newsList[i].avatar,
        description: newsList[i].description,
        content: newsList[i].content,
        cover: newsList[i].cover,
        likes: newsList[i].likes,
        views: newsList[i].views,
        comments: newsList[i].comments,
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
            <ListNews data={data}/>
        </React.Fragment>
    );
}

export default NewsView;
