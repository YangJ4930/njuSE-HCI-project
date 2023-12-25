import {
    Avatar,
    Divider,
    List,
    Skeleton,
    Space,
    Card,
    Carousel,
    Image,
    Row,
    Tag,
    FloatButton,
    Button,

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
import CommentPost from '../component/commentPost';
import axios from '../axios'
import { marked } from 'marked';

const Communitydetail = function Comunitydetail() {
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
    const [detail, setDetail] = useState({
        id: "",
        author: "",
        context: "",
        imageUrl: "",
        title: "",
    });
    const [imageUrl, setImageUrl] = useState([])
    const [commentDetail, setCommentDetail] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const { communityId } = useParams();
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
                const number = pageNumber + 1;
                setPageNumber(number);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err)
                setLoading(false);
            })
    };
    const findCommunityDetail = () => {
        axios.get(`/community/findCommunityDetail/${communityId}`)
            .then((response) => {
                //console.log(response);
                var imageUrls = response.data.imageUrl;
                var shuzu = imageUrls.split(',')
                setImageUrl(shuzu.slice(0, shuzu.length - 1))
                // console.log(imageUrl);
                setDetail(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        findCommunityDetail()
        loadMoreData();
    }, []);
    return (
        <>
            <Button icon={<LeftOutlined />}

                    type="link"
                    onClick={() => {
                        back()
                    }}></Button>
            <PageContainer title={detail.title}>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Image.PreviewGroup
                        items={imageUrl}
                    >
                        <Image
                            height={400}
                            src={imageUrl[0]}>
                        </Image>
                    </Image.PreviewGroup>

                </div>
                <Divider plain></Divider>
                <Row>
                    <Card
                        bordered={false}
                        hoverable
                        style={{
                            width: '300px',
                        }}
                    >
                        <Meta
                            avatar={
                                <>
                                    <Avatar
                                        size={64}
                                        src='https://xsgames.co/randomusers/avatar.php?g=pixel'
                                    />
                                </>
                            }
                            title={
                                <Row>
                                    <div>{detail.author}</div>
                                    <Tag
                                        color='#2db7f5'
                                        style={{
                                            marginLeft: 10,
                                        }}
                                    >
                                        作者
                                    </Tag>
                                </Row>
                            }
                            description='杨静nb'
                        />
                    </Card>
                </Row>
                <Divider plain orientation='left'>
                    正文
                </Divider>
                <div
                    id='content'
                    //className='article-detail'
                    style={{ fontSize: 20, backgroundColor: 'white' }}
                    dangerouslySetInnerHTML={{ __html: marked(detail.context) }}
                />
                <br></br>
                <InfiniteScroll
                    infinite-scroll-disabled={false}
                    dataLength={commentDetail.length}
                    next={loadMoreData}
                    hasMore={commentDetail.length % 4 == 0}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget='scrollableDiv'
                >
                    <Row justify='space-between'></Row>
                    <Divider orientation='left'>
                        {' '}
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
                                        <div
                                            style={{
                                                marginLeft: 40,
                                            }}
                                        >
                                            {item.comment}
                                        </div>

                                        {/* <img
                  style={{
                    marginLeft: 60,
                  }}
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                /> */}
                                    </Card>
                                </List.Item>
                            );
                        }}
                    ></ProList>
                </InfiniteScroll>
            </PageContainer>
            <FloatButton.Group>
                <FloatButton description={<CommentPost communityId={communityId} ></CommentPost>}></FloatButton>
                <FloatButton.BackTop className="backtop" />
            </FloatButton.Group>
        </>
    );
};
export default Communitydetail;
