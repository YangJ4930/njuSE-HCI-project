
import { PageContainer } from "@ant-design/pro-components";
import { ProList } from "@ant-design/pro-components";
import { Avatar, Divider, FloatButton, List, Skeleton, Image, Row, Tag, Card, Tabs, Button, Popconfirm } from "antd";
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
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

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

export const CardList = (tag) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const savelist = useSelector((state) => state.community)
    const dispatch = useDispatch();
    const ref = useRef(null);
    const [loading, setLoading] = useState(false);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        console.log('begining');
        fetch(axios.defaults.baseURL + `/community/findAllCommunity/${page}`)
            .then((res) => res.json())
            .then((body) => {
                console.log(body);
                setData([...data, ...body]);
                const pagenumber = page + 1;
                setPage(pagenumber);
                console.log(page);
                setLoading(false);
            })
            .catch((endMessage) => {
                console.log(endMessage);
                setLoading(false);
            });
    };
    useEffect(() => {
        console.log(savelist)
        setData(savelist.listData)
        setPage(savelist.pageNumber)
        // SetTag(savelist.tag)
        setTimeout(() => {
            window.scrollTo(0, savelist.scrollTo)
        }, 0)

        //loadMoreData();
    }, []);
    return (
        <InfiniteScroll
            infinite-scroll-disabled={false}
            dataLength={data.length}
            next={loadMoreData}
            hasMore={data.length % 4 == 0}
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
                            <List.Item.Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title={(<Row >
                                    <div>{item.author}</div>
                                    {item.tags == null ? null : item.tags.map((key, index) => {
                                        return <Tag color="#2db7f5" style={{
                                            marginLeft: 10
                                        }}>{key}</Tag>

                                    })}

                                </Row>)}
                                description={"发表时间：" + formattedTimestamp}
                            />
                            <Card hoverable
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
                                <ContentText content={item.content} title={item.title} />
                                {item.image === null ? null : <div style={{
                                    textAlign: "center",
                                    width: "100%",
                                }}><Image
                                        preview={false}

                                        height={272}
                                        alt="logo"
                                        src={item.image}
                                    /></div>}
                            </Card>
                        </List.Item>
                    );
                }}
            ></ProList>
        </InfiniteScroll>
    )
}

const icon = (label, imagesrc) => {
    const confirm = (e) => {
        console.log(e);
      };
      const cancel = (e) => {
      };
    return (
        // <Card hoverable
        //     bordered={false}
        // >
        <Row justify="space-around" align="middle">
            <Image src={imagesrc} height={35} width={35} preview={false} ></Image>
            <div style={{ fontSize: "12px", marginLeft: "10px", marginRight: "10px" }}>{label}
            </div>
            {label=="全部"? null:<Popconfirm
                title="删除标签"
                description="你确定要删除这个标签吗?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <CloseOutlined/>
            </Popconfirm>}
            
        </Row>


        // </Card>

    )
}

const CommunityView = function CommunityView() {
    const key = 'updatable'
    const ite = [
        {
            key: '1',
            label: icon("全部", all),
            children: CardList("全部"),

        },
        {
            key: '2',
            label: icon("apex英雄", apex),
            children: CardList("apex英雄"),
            ava: apex,
        },
        {
            key: '3',
            label: icon("博德之门3", BoDe),
            children: CardList("博德之门3"),
            ava: BoDe,
        },
        {
            key: '4',
            label: icon("无畏契约", WWQY),
            children: CardList("无畏契约"),
            ava: WWQY,
        },
        {
            key: '5',
            label: icon("彩虹六号", C6),
            children: CardList("彩虹六号"),
            ava: C6,
        },
        {
            key: '6',
            label: icon("我的世界", Myworld),
            children: CardList("我的世界"),
            ava: Myworld,
        },
        {
            key: '7',
            label: icon("艾尔登法环", er),
            children: CardList("艾尔登法环"),
            ava: er,
        },
        {
            key: '8',
            label: icon("战地5", zd),
            children: CardList("战地5"),
            ava: zd,
        },
        {
            key: '9',
            label: icon("双人成行", it_takes_two),
            children: CardList("双人成行"),
            ava: it_takes_two,
        },
        // {
        //   title: "更多",
        //   ava: "https://cn.bing.com/images/search?view=detailV2&ccid=2d2ejd2a&id=DDF73B8E1A52CB4C71CFA8DC9905E767AD7C2259&thid=OIP.2d2ejd2aIAmuTR9Q8rtQyQHaE8&mediaurl=https%3a%2f%2fwww.xtrafondos.com%2fwallpapers%2flogo-apex-legends-3031.jpg&exph=4000&expw=6000&q=apex%e5%9b%be%e6%a0%87&simid=608051676183620700&FORM=IRPRST&ck=76BC9B5586E382DE9F5AFEBF365EBAD9&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0"
        // },
    ];

    return (
        <div>
            {/* <Card style={{ backgroundColor: "black" }} hoverable><Button type="text">Reload community</Button></Card> */}
            <PageContainer style={{

            }}>
                <Tabs items={ite}>

                </Tabs>

            </PageContainer>
            <FloatButton.Group>
                <Link to='/component/postComponent'>
                    <FloatButton tooltip={<div>发帖</div>} icon={<PlusOutlined />}></FloatButton>
                </Link>
                <BackTop />
            </FloatButton.Group>
        </div>
    );
};
export default CommunityView;