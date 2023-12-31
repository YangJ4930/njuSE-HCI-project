import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Card, List, Space } from 'antd';
import { CommentOutlined, EyeTwoTone, HeartTwoTone } from '@ant-design/icons';
import React from 'react';
export const ListHomeNews = ({data}) => {
    const navigate = useNavigate();
    return(
        <List
            itemLayout="vertical"
            size="large"
            dataSource={data}
            renderItem={(item) => (
                <Card>
                    <List.Item
                        key={item.title}
                        actions={[
                            // eslint-disable-next-line react/jsx-key
                            <Space>
                                <HeartTwoTone
                                    twoToneColor='#eb2f96'
                                    onClick={() => {
                                        console.log('like');
                                    }}
                                />
                                <span>{item.likes}</span>
                            </Space>,
                            // eslint-disable-next-line react/jsx-key
                            <Space>
                                <EyeTwoTone
                                    onClick={() => {
                                        console.log('view');
                                    }}
                                />
                                <span>{item.views}</span>
                            </Space>,
                            // eslint-disable-next-line react/jsx-key
                            <Space>
                                <CommentOutlined
                                    color={'#eb2f96'}
                                    onClick={() => {
                                        console.log('comments');
                                    }}
                                />
                                <span>{item.comments}</span>
                            </Space>,
                        ]}
                        extra={<img width={250} alt='cover' src={item.cover}/>}
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

};
