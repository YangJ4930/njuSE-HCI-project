
import { PageContainer } from "@ant-design/pro-components";
import { ProList } from "@ant-design/pro-components";
import { Avatar, Divider, FloatButton, List, Skeleton, Image, Row, Select,Tag, Card, Tabs, Flex, Modal } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState, useRef } from "react";
import React from "react";
import {
    PlusOutlined,
    LikeOutlined,
    MessageOutlined,
    StarOutlined,
    StarFilled,
    CloseOutlined
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./community.css";
import moment from 'moment';
import apex from './component/logo-apex-legends1.jpg'
import BoDe from './component/BoDe.jpg'
import WWQY from './component/无畏契约.jpg'
import C6 from './component/6.jpg'
import Myworld from './component/Myworld.jpg'
import er from './component/er.jpg'
import zd from './component/战地5.jpg'
import it_takes_two from './component/it_takes_two.jpg'
import all from './component/all.png'
import { useSelector, useDispatch } from 'react-redux'
import { SaveScroll, Savelist } from "../../redux/user/communitySlice";
import axios from "../../axios";
import BackTop from "../../component/BackTop";
import StickyBox from 'react-sticky-box';
import back from './component/backgroud.jpg'
const IconText = ({ icon, text, iconname }) => {
    const [xuan, setXuan] = useState(false);
    const [isshou, setIsshou] = useState(false);
    const onEnter = () => {
        setXuan(true);
    };
    const onLeave = () => {
        setXuan(false);
    };
    const onclickshou = () => {
        console.log(isshou);
        setIsshou(isshou ? false : true);
    };
    const color = isshou ? 'yellow' : 'black';
    if (iconname === 'StarOutlined') {
        const seicon = isshou ? StarFilled : StarOutlined;
        return (
            <span>
                {React.createElement(seicon, {
                    style: { marginInlineEnd: 8, color: color },
                    onClick: onclickshou,
                    spin: xuan,
                    onMouseEnter: onEnter,
                    onMouseLeave: onLeave,
                })}
                {text}
            </span>
        );
    }
    return (
        <span>
            {React.createElement(icon, {
                style: { marginInlineEnd: 8, color: color },
                onClick: onclickshou,
            })}
            {text}
        </span>
    );
};

const ContentText = ({ title }) => {
    return (
        <>
            <div className='title'>{title}</div>
            {/* <div className="content">{content}</div> */}
        </>
    );
};

const pushShow = (id, navigate) => {
    navigate(`/component/Communitydetail/${id}`)
}

export const CardList = (props) => {
    const tag = props.tag
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const savelist = useSelector((state) => state.community)
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0)
    const [hasMore, setHaveMore] = useState(true)
    console.log("loading" + tag)
    console.log("loading" + data.length)
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
                        setHaveMore(false)
                    }, 1000)

                }
                setPage(page + 1)
                setLoading(false);
            })
            .catch((endMessage) => {
                console.log(endMessage);
                setLoading(false);
            });
    };
    useEffect(() => {
        console.log(savelist.listData);
        setData(savelist.listData)
        setPage(savelist.pageNumber)
        loadMoreData()
        setTimeout(() => {
            window.scrollTo(0, savelist.scrollTo)
        }, 0)
    }, []);
    return (

        <InfiniteScroll
            infinite-scroll-disabled={false}
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length % 4 == 0 && hasMore}
            loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
            ref={ref}
        >
            <ProList
                size="small"
                itemLayout="vertical"
                rowKey="id"
                dataSource={data}
                //loading={true}
                style={{
                    overflow: "auto"
                }}
                renderItem={(item) => {
                    var formattedTimestamp = moment(item.createdAt).format('YYYY-MM-DD');
                    if (item.tags != null) {
                        if (item.tags.indexOf(tag) == -1 && tag !== "全部") {
                            return null;
                        }
                    }
                    return (
                        <List.Item
                            actions={[
                                <IconText
                                    icon={LikeOutlined}
                                    text="156"
                                    key="list-vertical-like-o"
                                />,
                                <IconText
                                    icon={MessageOutlined}
                                    text="2"
                                    key="list-vertical-message"
                                />,
                            ]}
                        >
                            <Card hoverable
                                color="white"
                                bordered={false}
                                onClick={() => {
                                    dispatch(SaveScroll(ref.current.lastScrollTop))
                                    let Scroll = {
                                        listData: data,
                                        PageNumber: page,
                                    }
                                    dispatch(Savelist(Scroll))
                                    pushShow(item.id, navigate)
                                }}
                            >
                                <Row>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                        title={(<Row >
                                            <div style={{
                                                color: "blue"
                                            }}>{item.author}</div>
                                            {item.tags == null ? null : item.tags.map((key, index) => {
                                                return <Tag color="#2db7f5" style={{
                                                    marginLeft: 10
                                                }}>{key}</Tag>
                                            })}
                                        </Row>)}
                                        description={<div>
                                            <div>发表时间: {formattedTimestamp}</div>
                                            <p style={{
                                                fontSize: "22px",
                                                color: "White"
                                            }}>
                                                {item.title}
                                            </p>
                                            <p style={{
                                                fontSize: "16px",
                                                color: "White"
                                            }}>
                                                {item.content}
                                            </p>
                                        </div>}
                                    >
                                    </List.Item.Meta>
                                    {item.image === null ? null : <Image
                                        preview={false}
                                        height={180}
                                        alt="logo"
                                        src={item.image}
                                    />}

                                </Row>
                            </Card>
                        </List.Item>
                    );
                }}
            ></ProList>
        </InfiniteScroll>
    )
}

const icon = (label, imagesrc) => {
  //  console.log(imagesrc)
    const confirm = (e) => {
        console.log(e);
    };
    const cancel = (e) => {
    };
    return (
        // <Card hoverable
        //     bordered={false}
        // >
        <Row justify="space-around" align="middle" style={{
            width: "150px"
        }}>
            <Image src={imagesrc} height={35} width={35} preview={false} ></Image>
            <div style={{ fontSize: "12px", marginLeft: "10px", marginRight: "10px" }}>{label}
            </div>
        </Row>
        // </Card>

    )
}

const CommunityView = function CommunityView() {
    const loadLoveTags = (UserId) => {
        axios.get(`explore/contents/${UserId}`).then((response) => {
            console.log(response);
            let x = [...response.data];
            let tagsdata = [];
            for (let i = 0; i < x.length; i++) {
                tagsdata.push({
                    key: i + 2,
                    label: icon(x[i], apex),
                    children: <CardList tag={x[i]}></CardList>
                })
            }
            setItems([...items, tagsdata])
        });
    }

    const AddLoveTags = (tag,UserId) => {
        axios.get(`explore/contents/${tag}/${UserId}`).then((response) => {
            console.log(response);
        });
    }
    const ite = [
        {
            key: '1',
            label: icon("全部", all),
            children: <CardList tag="全部"></CardList>,
            closable: false,
            ava: all,
            name:"全部"
        },
        {
            key: '2',
            label: icon("apex英雄", apex),
            children: <CardList tag="apex"></CardList>,
            ava: apex,
            name:"apex"
        },
        {
            key: '3',
            label: icon("博德之门3", BoDe),
            children: <CardList tag="博德之门3"></CardList>,
            ava: BoDe,
            name:"博德之门3"
        },
        {
            key: '4',
            label: icon("无畏契约", WWQY),
            children: <CardList tag="无畏契约"></CardList>,
            ava: WWQY,
            name:"无畏契约"
        },
        {
            key: '5',
            label: icon("彩虹六号", C6),
            children: <CardList tag="彩虹六号"></CardList>,
            ava: C6,
            name:"彩虹六号"
        },
        {
            key: '6',
            label: icon("我的世界", Myworld),
            children: <CardList tag="我的世界"></CardList>,
            ava: Myworld,
            name:"我的世界"
        },
        {
            key: '7',
            label: icon("艾尔登法环", er),
            children: <CardList tag="艾尔登法环"></CardList>,
            ava: er,
            name:"艾尔登法环"
        },
        {
            key: '8',
            label: icon("战地5", zd),
            children: <CardList tag="战地5"></CardList>,
            ava: zd,
            name:"战地5"
        },
        {
            key: '9',
            label: icon("双人成行", it_takes_two),
            children: <CardList tag="双人成行"></CardList>,
            ava: it_takes_two,
            name:"双人成行"
        },
    ];
    const [activeKey, setActiveKey] = useState(ite[0].key);
    const [items, setItems] = useState(ite);
    const newTabIndex = useRef(0);
    const user = useSelector((state) => state.user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        console.log("---------------"+likeTag)
        add(likeTag)
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setLikeTag("")
        setIsModalOpen(false);
    };
    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    const add = (tag) => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newPanes = [...items];
        console.log("--------------"+ite[tag]+"================")
        newPanes.push({
            label: icon(ite[tag].name, ite[tag].ava),
            children: <CardList tag={ite[tag].name}></CardList>,
            key: newActiveKey,
        });
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };
    const remove = (targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = items.filter((item) => item.key !== targetKey);
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }
        setItems(newPanes);
        setActiveKey(newActiveKey);
    };

    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            console.log("click me")
            setIsModalOpen(true)
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
            <DefaultTabBar
                {...props}
                style={{
                }}
            />
        </StickyBox>
    );
    const [likeTag,setLikeTag]=useState(-1)
    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setLikeTag(value)
    };
    return (
        <Flex>
            <PageContainer style={{
                maxWidth: "80vw",
                flex: 8
            }}>
                <Tabs
                    renderTabBar={renderTabBar}
                    type="editable-card"
                    onChange={onChange}
                    activeKey={activeKey}
                    onEdit={onEdit}
                    items={items}
                    onTabClick={(e) => {
                    }}>
                </Tabs>
                <FloatButton.Group>
                    <Link to='/component/postComponent'>
                        <FloatButton tooltip={<div>发帖</div>} icon={<PlusOutlined />}></FloatButton>
                    </Link>
                    <BackTop />
                </FloatButton.Group>
            </PageContainer>
            <Flex flex={1} style={{
                flexDirection: "column",
                height: "1000px"
            }} >
                <Card
                    style={{ width: 300 }}
                    cover={
                        <img
                            alt="example"
                            src={back}
                        />
                    }

                >
                    <Card.Meta
                        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                        title={user.username}
                        description={user.description}
                    />
                </Card>
                <br></br>
                <Card style={{
                    flex: 1
                }}>
                    <div>自己发布的帖子:</div>
                </Card>
                <br></br>
                <Card style={{
                    flex: 1
                }}>
                    <div>点过赞的帖子:</div>
                </Card>
            </Flex>
            <Modal title="选择你喜欢的社区" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Select
                    defaultValue=""
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 1, label: 'apex' },
                        { value: 2, label: '博德之门3' },
                        { value: 3, label: '无畏契约'},
                        { value: 4, label: '彩虹六号'},
                        { value: 5, label: '我的世界' },
                        { value: 6, label: '艾尔登法环' },
                        { value: 7, label: '战地5'},
                        { value: 8, label: '双人成行'},
                    ]}
                />
            </Modal>
        </Flex>
    );
};
export default CommunityView;