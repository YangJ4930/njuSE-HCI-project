import {Link, useNavigate} from "react-router-dom";
import {Avatar, Card, List, Space} from "antd";
import {CommentOutlined, EyeTwoTone, HeartTwoTone} from "@ant-design/icons";
import React from "react";

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

export {ListNews};