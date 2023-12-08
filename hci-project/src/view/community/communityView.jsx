import { PageContainer, ProCard } from '@ant-design/pro-components';
import { ProList } from '@ant-design/pro-components';
import { Avatar, Button, Divider, FloatButton, List, Skeleton, Tag } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import React from 'react';
import {
    PlusOutlined,
    LikeOutlined,
    MessageOutlined,
    StarOutlined,
    StarFilled,
    SmallDashOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './community.css';

const CommunityView = function CommunityView() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const content =
        '五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛';
    const title = '人机交互是我最喜欢的课，一天不上浑身难受';

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
    const ContentText = ({ content, title }) => {
        return (
            <>
                <div className='title'>{title}</div>
                <div className='content'>{content}</div>
            </>
        );
    };
    const ite = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        '更多',
    ];
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        console.log('begining');
        fetch(`http://localhost:7999/community/findAllCommunity/${page}`)
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
        loadMoreData();
    }, []);
    return (
        <>
            <PageContainer style={{}}>
                <ProCard
                    title='我的喜好'
                    ghost
                    gutter={16}
                    collapsible
                    style={{
                        width: '100%',
                    }}
                >
                    <ProList
                        showActions='hover'
                        grid={{ gutter: 16, column: 8 }}
                        dataSource={ite}
                        renderItem={(item) => {
                            if (item === '更多') {
                                return (
                                    <>
                                        <ProCard
                                            size='small'
                                            direction='column'
                                            style={{
                                                alignItems: 'center',
                                                lineHeight: '94px',
                                            }}
                                        >
                                            <Button
                                                type='text'
                                                size='large'
                                                style={{
                                                    verticalAlign: 'middle',
                                                    lineHeight: 'initial',
                                                }}
                                            >
                                                <SmallDashOutlined size='large' />
                                            </Button>
                                        </ProCard>
                                    </>
                                );
                            }
                            return (
                                <>
                                    <ProCard
                                        size='small'
                                        layout='center'
                                        direction='column'
                                        height='116px'
                                    >
                                        <img
                                            width='40%'
                                            src='https://lab22.oss-cn-beijing.aliyuncs.com/1.jpg'
                                        ></img>
                                        <div>{item}</div>
                                    </ProCard>
                                </>
                            );
                        }}
                    ></ProList>
                </ProCard>

                <div
                    id='scrollableDiv'
                    style={{
                        height: 600,
                        overflow: 'auto',
                    }}
                >
                    <br></br>
                    <InfiniteScroll
                        infinite-scroll-disabled={false}
                        dataLength={data.length}
                        next={loadMoreData}
                        hasMore={data.length < 3}
                        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                        scrollableTarget='scrollableDiv'
                        onScroll={() => console.log('loading')}
                    >
                        <ProList
                            size='small'
                            itemLayout='vertical'
                            rowKey='id'
                            dataSource={data}
                            //loading={true}
                            renderItem={(item) => {
                                return (
                                    <List.Item
                                        actions={[
                                            <IconText
                                                icon={StarOutlined}
                                                iconname={'StarOutlined'}
                                                text='156'
                                                key='list-vertical-star-o'
                                            />,
                                            <IconText
                                                icon={LikeOutlined}
                                                text='156'
                                                key='list-vertical-like-o'
                                            />,
                                            <IconText
                                                icon={MessageOutlined}
                                                text='2'
                                                key='list-vertical-message'
                                            />,
                                        ]}
                                    >
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel' />
                                            }
                                            title={<a href='https://ant.design'>{item.author}</a>}
                                            description={item.title}
                                        />
                                        <Link
                                            className='link-text'
                                            style={{}}
                                            to={`/component/Communitydetail/${item.id}`}
                                        >
                                            <ContentText
                                                content={item.content}
                                                title={item.title}
                                            />
                                            <img width={272} alt='logo' src={item.image} />
                                        </Link>
                                    </List.Item>
                                );
                            }}
                        ></ProList>
                    </InfiniteScroll>
                </div>
            </PageContainer>
            <FloatButton.Group>
                <Link to='/component/postComponent'>
                    <FloatButton tooltip={<div>发帖</div>} icon={<PlusOutlined />}></FloatButton>
                </Link>
                <FloatButton.BackTop className='backtop' />
            </FloatButton.Group>
        </>
    );
};
export default CommunityView;
