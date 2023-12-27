import {Link, useNavigate} from 'react-router-dom';
import {Avatar, Button, Card, List, Space} from 'antd';
import {CommentOutlined, EyeTwoTone, HeartTwoTone} from '@ant-design/icons';
import React, {useEffect, useState} from 'react';
import axios from "../../../axios";
import {useDispatch, useSelector} from "react-redux";
import {savePage} from "../../../redux/news/newsSlice";

const ListNews = ({data}) => {
    const newsPage = useSelector((state) => state.news.currentPage);
    const dispatch = useDispatch();

    return (
        <List
            itemLayout='vertical'
            size='large'
            pagination={{
                pageSize: 3,
                onChange: (page) => {
                    console.log(page);
                    dispatch(savePage(page));
                },
                showSizeChanger: false,
                current: newsPage,
            }}
            dataSource={data}
            renderItem={(item) => (
                <PostItem postInfo={item}/>
            )}
        />
    );
};

const PostItem = ({postInfo}) => {
    const title = postInfo.title;
    const id = postInfo.id;
    const avatar = postInfo.avatar;
    const description = postInfo.description;
    const cover = postInfo.cover;
    const [likes, setLikes] = useState(parseInt(postInfo.likes));
    const [views, setViews] = useState(parseInt(postInfo.views));
    const [comments, setComments] = useState(parseInt(postInfo.comments));


    const navigate = useNavigate();

    const likeClicked = (id) => {
        console.log(`like clicked: ${id}`);
        axios.post(`/news/${id}/like`).then((response) => {
            console.log(response);
            setLikes(parseInt(response.data.likes));
        }).catch((error) => {
            console.log(error);
        })
    }

    const postViewed = (id) => {
        console.log(`view clicked: ${id}`);
        axios.post(`/news/${id}/view`).then((response) => {
            console.log(response);
            setViews(parseInt(response.data.views));
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        axios.get(`/news/content/${id}`).then((response) => {
            setLikes(parseInt(response.data.likes));
            setViews(parseInt(response.data.views));
            setComments(parseInt(response.data.comments));
        }).catch((error) => {

        })
    })

    return (
        <Card>
            <List.Item
                key={title}
                actions={[
                    <Space>
                        <Button
                            icon={<HeartTwoTone twoToneColor='#eb2f96'/>}
                            onClick={() => {
                                likeClicked(id);
                            }}
                        >
                            <span>{likes}</span>
                        </Button>

                    </Space>,
                    <Space>
                        <EyeTwoTone
                        />
                        <span>{views}</span>
                    </Space>
                ]}
                extra={<img width={250} alt='cover' src={cover}/>}
            >
                <Card
                    hoverable={true}
                    onClick={() => {
                        console.log(`navigate to:${id}`);
                        navigate(`/news/content/${id}`);
                        postViewed(id);
                    }}
                >
                    <List.Item.Meta
                        avatar={<Avatar src={avatar}/>}
                        title={<Link to={id}>{title}</Link>}
                        description={<div style={{fontStyle:"italic"}}>创建时间： 2023.12.27</div>}
                    />
                    <div style={{marginLeft:"2.9vw"}}>{description}</div>
                </Card>
            </List.Item>
        </Card>
    )
}

export {ListNews};
