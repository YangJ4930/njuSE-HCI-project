import {
    Avatar,
    Divider,
    List,
    Skeleton,
    Card,
    Space,
    Input,
    Row,
    Button,
    message
} from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import {
    MessageOutlined,
    LeftOutlined
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import CommentPost from '../../../component/commentPost';
import axios from '../../../axios'
import { marked } from 'marked';
import { useSelector, useDispatch } from 'react-redux'
const Communitydetail = function Comunitydetail({ communityId }) {
    console.log("Communitydetail生成")
    const user = useSelector(state => state.user)
    const userId = useSelector(state => state.user.id)
    const islogin = useSelector((state) => state.auth.isLogin);
    const key = 'updatable';
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
    });
    const navigate = useNavigate()
    const { Meta } = Card;
    const [load, setLoad] = useState(false);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState([])
    const [commentDetail, setCommentDetail] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const [comment, setComment] = useState(null);
    const [hasMore, setHasMore] = useState(true)
    //  const { communityId } = useParams();
    const back = () => {
        navigate(-1)
    }
    const loadMoreData = () => {
        console.log("nb: " + pageNumber)
        if (loading) {
            return;
        }
        setLoading(true);
        axios.get(`/community/findAllComment/${pageNumber}/${communityId}`)
            .then((response) => {
                console.log(response);
                setCommentDetail([...response.data, ...commentDetail])
                if (response.data.length == 0) {
                    setTimeout(() => {
                        setHasMore(false)
                    }, 1000)

                }
                const number = pageNumber + 1;
                setPageNumber(number);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
            })
    };
    const deleteComment = (CommentId) => {
        axios.delete(`/community/DeleteComment/${CommentId}/${communityId}`).then((response) => {
            console.log(response)
        })
    }
    const postcomment = () => {
        if (islogin) {
            message.open({
                key,
                type: 'loading',
                content: '正在发送评论。。。',
            });
            console.log("comId" + communityId);
            console.log("userId" + userId);
            axios.post('/community/Comment', { communityId, comment, userId })
                .then((response) => {
                    console.log(response);
                    setTimeout(() => {
                        message.open({
                            key,
                            type: 'success',
                            content: 'Loaded!',
                            duration: 2,
                        });

                    }, 1000);
                    //navigate(`/component/Communitydetail/${communityId}`)
                    setOpen(false)
                    setComment("")
                })
                .catch((error) => {
                    console.error(error);

                    //errorMsg.error(error.response.data.msg).then((r) => console.log(r));
                });

        } else {
            message.open({
                key,
                type: 'warning',
                content: '请先登录',
            });
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        // findCommunityDetail()
        setTimeout(() => {
            loadMoreData()
        }, 0)
            ;
    }, [communityId]);
    return (
        <>
            <PageContainer style={{
                height: 500,
                overflow: "auto"
            }}>
                <InfiniteScroll
                    infinite-scroll-disabled={false}
                    dataLength={commentDetail.length}
                    next={loadMoreData}
                    hasMore={commentDetail.length % 4 == 0 && hasMore}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget='scrollableDiv'
                >
                    <Row justify='space-between'></Row>
                    <Input width="100%" onChange={(e) => {
                        console.log(e.target.value)
                        setComment(e.target.value)
                    }} />
                    <div style={{
                        justifyItems: "right"
                    }}>
                        <Button style={{
                            marginTop: "10px",
                            marginLeft: "90%"
                        }} onClick={() => {
                            postcomment()
                            let x = commentDetail
                            let temp={
                                user:{
                                    avatarUrl:user.avatarUrl,
                                    id:user.id,
                                    username:user.username
                                },
                                comment:comment
                            }
                            x.unshift(temp)
                            setComment(comment)
                            setComment(null)
                            // window.location.reload()
                        }}>评论</Button>
                    </div>
                    <Divider orientation='left'>

                        <Row>
                            <div
                                style={{
                                    fontWeight: 'bold',
                                }}
                            >
                                评论
                                <MessageOutlined></MessageOutlined>
                            </div>
                        </Row>
                    </Divider>

                    <ProList
                        size='small'
                        itemLayout='vertical'
                        rowKey='id'
                        dataSource={commentDetail}
                        split={false}
                        renderItem={(item) => {
                            return (
                                <List.Item>
                                    <Card
                                        hoverable
                                        style={{ background: 'rgba(219,225,240,0.3)' }}
                                        bordered={false}
                                    >

                                        <List.Item.Meta
                                            avatar={<Avatar src={item.user.avatarUrl} />}
                                            title={<a href='https://ant.design'>{item.user.username}</a>}
                                            description={
                                                <div style={{ fontSize: 10, marginTop: -10 }}>
                                                    今天 11:21
                                                </div>
                                            }
                                        />
                                        <Row justify="space-between">
                                            <div
                                                style={{
                                                    marginLeft: 40,
                                                    flexDirection: "row"
                                                }}
                                            >
                                                {item.comment}

                                            </div>
                                            {item.user.id == user.id ? <><Button type="text"
                                                onClick={() => {
                                                    deleteComment(item.commentId)

                                                    //window.location.reload()
                                                }}
                                            >删除</Button></> : null}
                                        </Row>
                                    </Card>
                                </List.Item>
                            );
                        }}
                    ></ProList>
                </InfiniteScroll>
            </PageContainer>
        </>
    );
};
export default Communitydetail;
