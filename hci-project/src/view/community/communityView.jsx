import { PageContainer } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import {
    Avatar,
    Divider,
    FloatButton,
    List,
    Skeleton,
    Image,
    Row,
    Select,
    Tag,
    Col,
    Card,
    Tabs,
    Popconfirm,
    Flex,
    Modal,
    message,
    Button,
    Carousel,
} from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import { PlusOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './community.css';
import moment from 'moment';
import apex from './component/logo-apex-legends1.jpg';
import BoDe from './component/BoDe.jpg';
import WWQY from './component/无畏契约.jpg';
import C6 from './component/6.jpg';
import Myworld from './component/Myworld.jpg';
import er from './component/er.jpg';
import zd from './component/战地5.jpg';
import it_takes_two from './component/it_takes_two.jpg';
import all from './component/all.png';
import { useSelector, useDispatch } from 'react-redux';
import { SaveScroll, Savelist } from '../../redux/user/communitySlice';
import axios from '../../axios';
import BackTop from '../../component/BackTop';
import StickyBox from 'react-sticky-box';
import back from './component/backgroud.jpg';
import Communitydetail from './component/communitydetail';

const pushShow = (id, navigate) => {
    navigate(`/component/Communitydetail/${id}`);
};
const Likeslist = ({ likeNumber }) => {
    const [number, setNumber] = useState(likeNumber);
    const [isxuan, setIsxuan] = useState(false);
    return (
        <>
            {' '}
            <Row
                justify='center'
                onClick={() => {
                    if (isxuan) {
                        let x = number - 1;
                        setNumber(x);
                        setIsxuan(false);
                    } else {
                        let x = number + 1;
                        setNumber(x);
                        setIsxuan(true);
                    }
                }}
            >
                <LikeOutlined style={{ fontSize: '22px' }} />
                <div style={{ marginLeft: '10px' }}>{number}</div>
            </Row>
        </>
    );
};
export const CardList = (props) => {
    const tag = props.tag;
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const savelist = useSelector((state) => state.community);
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [hasMore, setHaveMore] = useState(true);
    const [commentModal, setCommentModal] = useState(false);
    const [communityId, setcommunityId] = useState(-1);
    const [likes, setLikes] = useState();
    console.log('loading' + tag);
    console.log('loading' + data.length);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        console.log('begining');
        fetch(axios.defaults.baseURL + `/community/findAllCommunity/${page}/${tag}`)
            .then((res) => res.json())
            .then((body) => {
                console.log(body);
                setData([...data, ...body]);
                if (body.length == 0) {
                    setTimeout(() => {
                        setHaveMore(false);
                    }, 1000);
                }
                setPage(page + 1);
                setLoading(false);
            })
            .catch((endMessage) => {
                console.log(endMessage);
                setLoading(false);
            });
    };
    useEffect(() => {
        console.log(savelist.listData);
        setData(savelist.listData);
        setPage(savelist.pageNumber);
        loadMoreData();
        setTimeout(() => {
            window.scrollTo(0, savelist.scrollTo);
        }, 0);
    }, []);
    return (
        <>
            <InfiniteScroll
                infinite-scroll-disabled={false}
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length % 4 == 0 && hasMore}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget='scrollableDiv'
                ref={ref}
            >
                <ProList
                    size='small'
                    itemLayout='vertical'
                    rowKey='id'
                    dataSource={data}
                    //loading={true}
                    style={{
                        overflow: 'auto',
                        //backgroundColor:"red",
                        backgroundColor: 'rgba(0,0,0,0)',
                    }}
                    renderItem={(item) => {
                        var formattedTimestamp = moment(item.createdAt).format('YYYY-MM-DD');
                        if (item.tags != null) {
                            if (item.tags.indexOf(tag) == -1 && tag !== '全部') {
                                return null;
                            }
                        }
                        return (
                            <List.Item
                                style={{
                                    backgroundColor: 'rgba(0,0,0,0)',
                                }}
                            >
                                <Card
                                    hoverable
                                    style={{
                                        backgroundColor: 'rgba(220,220,220,0.2)',
                                        marginTop: '20px',
                                    }}
                                    bordered={false}
                                    onClick={() => {}}
                                    actions={[
                                        <Likeslist likeNumber={item.likeNumber}></Likeslist>,
                                        <>
                                            {' '}
                                            <Row
                                                justify='center'
                                                onClick={() => {
                                                    setCommentModal(true);
                                                    setcommunityId(item.id);
                                                }}
                                            >
                                                <MessageOutlined style={{ fontSize: '22px' }} />
                                                <div style={{ marginLeft: '10px' }}>
                                                    {item.commentNumber}
                                                </div>
                                            </Row>
                                        </>,
                                    ]}
                                >
                                    <Row>
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                                            }
                                            title={
                                                <Row>
                                                    <div
                                                        style={{
                                                            color: 'blue',
                                                        }}
                                                    >
                                                        {item.author}
                                                    </div>
                                                    {item.tags == null
                                                        ? null
                                                        : item.tags.map((key, index) => {
                                                              return (
                                                                  <Tag
                                                                      color='#2db7f5'
                                                                      style={{
                                                                          marginLeft: 10,
                                                                      }}
                                                                  >
                                                                      {key}
                                                                  </Tag>
                                                              );
                                                          })}
                                                </Row>
                                            }
                                            description={
                                                <div>
                                                    <div>发表时间: {formattedTimestamp}</div>
                                                    <p
                                                        style={{
                                                            fontSize: '22px',
                                                            color: 'Black',
                                                        }}
                                                    >
                                                        {item.title}
                                                    </p>
                                                    <p
                                                        style={{
                                                            fontSize: '16px',
                                                            color: 'Black',
                                                        }}
                                                    >
                                                        {item.content}
                                                    </p>
                                                </div>
                                            }
                                        ></List.Item.Meta>
                                        {item.image === null ? null : (
                                            <Image
                                                //preview={false}
                                                width={180}
                                                alt='logo'
                                                src={item.image}
                                            />
                                        )}
                                    </Row>
                                </Card>
                            </List.Item>
                        );
                    }}
                ></ProList>
            </InfiniteScroll>
            <Modal
                destroyOnClose={true}
                width='50vw'
                maskClosable={true}
                cancelButtonProps={<Button></Button>}
                okButtonProps={<Button></Button>}
                onCancel={() => {
                    setCommentModal(false);
                }}
                open={commentModal}
            >
                <Communitydetail communityId={communityId}></Communitydetail>
            </Modal>
        </>
    );
};

const icon = (label, imagesrc) => {
    //  console.log(imagesrc)
    const confirm = (e) => {
        console.log(e);
    };
    const cancel = (e) => {};
    return (
        // <Card hoverable
        //     bordered={false}
        // >
        <Row
            justify='space-around'
            align='middle'
            style={{
                width: '150px',
            }}
        >
            <Image src={imagesrc} height={35} width={35} preview={false}></Image>
            <div style={{ fontSize: '15px', marginLeft: '10px', marginRight: '10px' }}>{label}</div>
        </Row>
        // </Card>
    );
};
const CommunityCard = ({ title }) => {
    const user = useSelector((state) => state.user);
    const [thisdata, setThisdata] = useState([]);
    const Delete = async (CommunityId) => {
        const response = await axios.get(`community/DeleteThePost/${CommunityId}`);
        console.log(response);
        // await loadSelfCommunity(user.id);
    };
    const loadSelfCommunity = async (UserId) => {
        const response = await axios.get(`community/findCommunityByUserId/${UserId}`);
        console.log(response.data);
        setThisdata([...thisdata, ...response.data]);
    };
    const navigate = useNavigate();
    useEffect(() => {
        loadSelfCommunity(user.id);
    }, []);
    return (
        <Card
            style={{
                flex: 1,
            }}
            bodyStyle={
                {
                    // backgroundColor:"black"
                }
            }
        >
            <div
                style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </div>
            <List
                className='demo-loadmore-list'
                itemLayout='horizontal'
                dataSource={thisdata}
                style={{
                    height: '400px',
                }}
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 5,
                    total: thisdata.length,
                }}
                renderItem={(item, index) => {
                    var formattedTimestamp = moment(item.createdAt).format('YYYY-MM-DD');
                    return (
                        <List.Item
                            style={{}}
                            actions={[
                                <Popconfirm
                                    title='删除帖子'
                                    description='你确定要删除这个帖子吗?'
                                    onConfirm={async () => {
                                        Delete(item.id);
                                        window.location.reload();
                                    }}
                                    okText='Yes'
                                    cancelText='No'
                                >
                                    <Button type='text'>删除</Button>
                                </Popconfirm>,
                            ]}
                        >
                            <Card
                                hoverable
                                style={{
                                    width: '100%',
                                }}
                                onClick={() => {
                                    pushShow(item.id, navigate);
                                }}
                            >
                                <Card.Meta
                                    style={{
                                        fontSize: '10px',
                                    }}
                                    description={formattedTimestamp}
                                    title={item.title}
                                ></Card.Meta>
                            </Card>
                        </List.Item>
                    );
                }}
            ></List>
        </Card>
    );
};
const Rankinglist = ({ title }) => {
    const ranking = [
        {
            key: '1.',
            name: 'apex英雄',
        },
        {
            key: '2.',
            name: '博德之门3',
        },
        {
            key: '3.',
            name: '双人成行',
        },
        {
            key: '4.',
            name: '荒野大镖客',
        },
        {
            key: '5.',
            name: '艾尔登法环',
        },
        {
            key: '6.',
            name: '无畏契约',
        },
        {
            key: '7.',
            name: '我的世界',
        },
        {
            key: '8.',
            name: '战地五',
        },
        {
            key: '9.',
            name: '彩虹六号',
        },
        {
            key: '10.',
            name: '古墓丽影',
        },
        {
            key: '11.',
            name: '文明6',
        },
        {
            key: '12.',
            name: 'gta5',
        },
    ];
    return (
        <Card
            hoverable
            style={{
                width: '82%',
                marginLeft: '20%',
                // backgroundColor:"rgba(0,0,0,0)",
                //backgroundImage:`url(${apex})`
            }}
            bodyStyle={
                {
                    // backgroundColor:"black"
                }
            }
        >
            <div
                style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                }}
            >
                {title}
            </div>
            <List
                className='demo-loadmore-list'
                itemLayout='horizontal'
                dataSource={ranking}
                renderItem={(item, index) => {
                    return (
                        <Row
                            style={{
                                marginTop: '10px',
                                marginLeft: '5%',
                            }}
                        >
                            <Col className='gutter-row' span={4}>
                                <div
                                    style={{
                                        fontSize: '22px',
                                        color: 'rgb(255,69,0)',
                                    }}
                                >
                                    {item.key}
                                </div>
                            </Col>
                            <Col>
                                <div
                                    style={{
                                        fontSize: '20px',
                                    }}
                                >
                                    {item.name}
                                </div>
                            </Col>
                        </Row>
                    );
                }}
            >
                <div
                    style={{
                        marginLeft: '20%',
                        marginTop: '10px',
                        color: 'gray',
                    }}
                >
                    显示更多
                </div>
            </List>
        </Card>
    );
};
const CommunityView = function CommunityView() {
    useEffect(() => {
        loadLoveTags(user.id);
    }, []);
    const loadLoveTags = (UserId) => {
        axios.get(`users/Tags/${UserId}`).then((response) => {
            let x = [...response.data];
            let tagsdata = [];
            for (let i = 0; i < x.length; i++) {
                const newActiveKey = `newTab${newTabIndex.current++}`;
                const ava = ite.filter((item) => item.name === x[i]);
                tagsdata.push({
                    key: newActiveKey,
                    label: icon(x[i], ava[0].ava),
                    children: <CardList tag={x[i]}></CardList>,
                    name: x[i],
                    ava: ava[0].ava,
                });
                setActiveKey(newActiveKey);
            }
            setItems([...items, ...tagsdata]);
        });
    };
    const AddorRemoveLoveTags = (tag, UserId, action) => {
        axios.get(`users/Tags/${tag}/${UserId}/${action}`).then((response) => {
            console.log(response);
        });
    };

    const ite = [
        {
            key: '1',
            label: icon('全部', all),
            children: <CardList tag='全部'></CardList>,
            closable: false,
            ava: all,
            name: '全部',
        },
        {
            key: '2',
            label: icon('apex英雄', apex),
            children: <CardList tag='apex'></CardList>,
            ava: apex,
            name: 'apex',
        },
        {
            key: '3',
            label: icon('博德之门3', BoDe),
            children: <CardList tag='博德之门3'></CardList>,
            ava: BoDe,
            name: '博德之门3',
        },
        {
            key: '4',
            label: icon('无畏契约', WWQY),
            children: <CardList tag='无畏契约'></CardList>,
            ava: WWQY,
            name: '无畏契约',
        },
        {
            key: '5',
            label: icon('彩虹六号', C6),
            children: <CardList tag='彩虹六号'></CardList>,
            ava: C6,
            name: '彩虹六号',
        },
        {
            key: '6',
            label: icon('我的世界', Myworld),
            children: <CardList tag='我的世界'></CardList>,
            ava: Myworld,
            name: '我的世界',
        },
        {
            key: '7',
            label: icon('艾尔登法环', er),
            children: <CardList tag='艾尔登法环'></CardList>,
            ava: er,
            name: '艾尔登法环',
        },
        {
            key: '8',
            label: icon('战地5', zd),
            children: <CardList tag='战地5'></CardList>,
            ava: zd,
            name: '战地5',
        },
        {
            key: '9',
            label: icon('双人成行', it_takes_two),
            children: <CardList tag='双人成行'></CardList>,
            ava: it_takes_two,
            name: '双人成行',
        },
    ];
    const key = 'updatable';
    const [activeKey, setActiveKey] = useState(ite[0].key);
    const [items, setItems] = useState([ite[0]]);
    const newTabIndex = useRef(0);
    const user = useSelector((state) => state.user);
    const authe = useSelector((state) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        console.log('---------------' + authe.isLogin);
        add(likeTag);
        AddorRemoveLoveTags(ite[likeTag].name, user.id, 'add');
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setLikeTag('');
        setIsModalOpen(false);
    };
    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    const add = (tag) => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newPanes = [...items];
        console.log('--------------' + ite[tag] + '================');
        newPanes.push({
            label: icon(ite[tag].name, ite[tag].ava),
            children: <CardList tag={ite[tag].name}></CardList>,
            key: newActiveKey,
            ava: ite[tag].ava,
            name: ite[tag].name,
        });
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const remove = (targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        let tagname;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                console.log(item);
                tagname = item.name;
                lastIndex = i - 1;
            }
        });
        console.log('remobekey ' + targetKey);
        console.log('remove  ' + tagname);
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        AddorRemoveLoveTags(tagname, user.id, 'remove');
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            //setIsModalOpen(true)
            if (authe.isLogin) {
                setIsModalOpen(true);
            } else {
                message.open({
                    key,
                    type: 'warning',
                    content: '请先登录',
                });
            }
            console.log('click me');
        } else {
            remove(targetKey);
        }
    };
    const renderTabBar = (props, DefaultTabBar) => (
        <StickyBox
            offsetTop={0}
            offsetBottom={20}
            style={{
                zIndex: 1,
            }}
        >
            <DefaultTabBar {...props} style={{}} />
        </StickyBox>
    );
    const [likeTag, setLikeTag] = useState(-1);
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setLikeTag(value);
    };
    return (
        <Flex>
            <Flex
                flex={1}
                style={{
                    flexDirection: 'column',
                    height: '1000px',
                    justifyContent: 'right',
                }}
            >
                <Card
                    style={{
                        maxWidth: '16vw',
                        // backgroundImage:`url(${back})`,
                        // backgroundSize:"cover"
                    }}
                >
                    <Carousel autoplay>
                        <Image src={apex}></Image>
                        <Image src={it_takes_two}></Image>
                        <Image src={BoDe}></Image>
                    </Carousel>
                </Card>
                <br></br>
                <Rankinglist title='热门社区榜单'></Rankinglist>
            </Flex>
            <PageContainer
                style={{
                    maxWidth: '55vw',
                    // backgroundColor:"red",
                    flex: 10,
                }}
            >
                <Tabs
                    renderTabBar={renderTabBar}
                    type='editable-card'
                    onChange={onChange}
                    activeKey={activeKey}
                    onEdit={onEdit}
                    items={items}
                    onTabClick={(e) => {}}
                ></Tabs>
                <FloatButton.Group>
                    <Link to='/component/postComponent'>
                        <FloatButton
                            tooltip={<div>发帖</div>}
                            icon={<PlusOutlined />}
                        ></FloatButton>
                    </Link>
                    <BackTop />
                </FloatButton.Group>
            </PageContainer>
            <Flex
                flex={4}
                style={{
                    flexDirection: 'column',
                    height: '1000px',
                }}
            >
                <Card
                    //style={{ width: 300 }}
                    cover={<img alt='example' src={user.cardBackgroundUrl} />}
                >
                    <Card.Meta
                        avatar={<Avatar src={user.avatarUrl} />}
                        title={user.username}
                        description={user.description}
                    />
                </Card>
                <br></br>
                <CommunityCard title='我的帖子:' />
            </Flex>
            <Modal
                title='选择你喜欢的社区'
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Select
                    defaultValue=''
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 1, label: 'apex' },
                        { value: 2, label: '博德之门3' },
                        { value: 3, label: '无畏契约' },
                        { value: 4, label: '彩虹六号' },
                        { value: 5, label: '我的世界' },
                        { value: 6, label: '艾尔登法环' },
                        { value: 7, label: '战地5' },
                        { value: 8, label: '双人成行' },
                    ]}
                />
            </Modal>
        </Flex>
    );
};
export default CommunityView;
