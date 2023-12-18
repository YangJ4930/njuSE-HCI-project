import {
    Avatar,
    Skeleton,
    Carousel,
    List,
    Dropdown,
    Space,
    Drawer,
    Button,
    Card,
    Col,
    Row,
    Divider,
    Slider,
    message,
    Collapse,
    Flex,
    ConfigProvider,
} from 'antd';
import VirtualList from 'rc-virtual-list';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import { PageContainer, ProList } from '@ant-design/pro-components';
import Meta from 'antd/es/card/Meta';
import * as PropTypes from 'prop-types';
import './explore.css';
import axios from '../../axios';

const arrangementItems = [
    {
        key: '1',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.antgroup.com'>
                人气最高
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.aliyun.com'>
                最新发布
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target='_blank' rel='noopener noreferrer' href='https://www.luohanacademy.com'>
                评分最高
            </a>
        ),
    },
    {
        key: '4',
        label: '价格由高到低',
    },
    {
        key: '5',
        label: '价格由低到高',
    },
];
const gameChosen = Array(14).fill(false);

const Explore_gameRepositoryView = function Explore_gameRepositoryView() {
    const [gameList, setGameList] = React.useState([]);

    React.useEffect(() => {
        console.log('nop')
    }, [gameChosen]);

    React.useEffect(() => {
        axios.get('/explore/contents/games').then((response) => {
            console.log(response);
            setGameList(response.data);
            console.log(response.data);
        });
    }, []);

    let gameData = Array.from({
        length: gameList.length,
    }).map((_, i) => ({
        cover:gameList.cover,
        name:gameList.cover,
        type:gameList.type
    }));

    //根据选中条件变更数据
    const getData = () => {
        if (gameChosen.every((value) => !value)) {
            // 当全部游戏类型都未选中时，返回全部数据
            return gameData;
        }else {

            const selectedData = gameData.filter(game => {
                // 检查游戏类型是否有交集
                return game.type.some(type => gameChosen[type]);
            });
            return selectedData;
        }
    };

    return (
        <>
            <div>
                <PageContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Arrangement />
                        <Filter/>
                    </div>
                    <CardListTable gameData={getData()} />
                </PageContainer>
            </div>
        </>
    );
};

function Arrangement() {
    return (
        <>
            <Dropdown.Button
                menu={{
                    items: arrangementItems,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>排序方式</Space>
                </a>
            </Dropdown.Button>
        </>
    );
}

function Filter() {
    const [open, setOpen] = useState(false);

    const showFilter = () => {
        setOpen(true);
    };

    const closeFilter = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Button type='primary' onClick={showFilter}>
                    <Space>
                        <text>筛选</text>
                        <svg
                            className='icon_filter'
                            viewBox='0 0 1024 1024'
                            version='1.1'
                            xmlns='http://www.w3.org/2000/svg'
                            width='20'
                            height='20'
                        >
                            <path
                                d='M608.241895 960.010751c-17.717453 0-31.994625-14.277171-31.994625-31.994625l0-479.919368c0-7.912649 2.92424-15.653284 8.256677-21.501764l208.82513-234.455233L230.498908 192.139761l209.169158 234.627247c5.160423 5.84848 8.084663 13.417101 8.084663 21.32975l0 288.811692 50.916177 41.111372c13.761129 11.180917 15.825298 31.306568 4.816395 45.067697s-31.306568 15.825298-45.067697 4.816395L395.632454 776.815723c-7.568621-6.020494-11.868974-15.309256-11.868974-24.942046L383.763481 460.137746 135.203091 181.302873c-8.428691-9.460776-10.492861-22.877877-5.332437-34.402822 5.160423-11.524945 16.685369-18.921552 29.242399-18.921552l706.289938 0c12.729044 0 24.081975 7.396607 29.242399 19.093566 5.160423 11.524945 2.92424 25.11406-5.504452 34.402822L640.236519 460.30976l0 467.706367C640.236519 945.73358 625.959348 960.010751 608.241895 960.010751z'
                                fill='#2c2c2c'
                            ></path>
                        </svg>
                    </Space>
                </Button>
            </div>
            <Drawer title='筛选' placement='right' onClose={closeFilter} open={open}>
                <Collapse
                    defaultActiveKey={['1']}
                    bordered={false}
                    ghost={true}
                    className='my-collapse'
                >
                    <Divider />
                    <Collapse.Panel key={1} header={'活动'}>
                        <p>
                            <div style={{ marginTop: 5 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>本周特惠</h>
                                <Yes_svg />
                            </Flex>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>首发</h>
                                <Yes_svg />
                            </Flex>
                        </p>
                    </Collapse.Panel>
                    <Divider />
                    <Collapse.Panel key={2} header={'价格'}>
                        <p>
                            <div style={{ marginTop: 5 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>免费</h>
                                <Yes_svg />
                            </Flex>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>￥70以下</h>
                                <Yes_svg />
                            </Flex>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>￥70~￥140</h>
                                <Yes_svg />
                            </Flex>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>￥140~￥210</h>
                                <Yes_svg />
                            </Flex>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>￥210~￥300</h>
                                <Yes_svg />
                            </Flex>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <Flex
                                id={'filter-activity-discount'}
                                justify='space-between'
                                align='center'
                                horizontal
                            >
                                <h className='filter-panel-choice'>￥300以上</h>
                                <Yes_svg />
                            </Flex>
                        </p>
                    </Collapse.Panel>
                    <Divider />
                    <Collapse.Panel key={3} header={'游戏类型'}>
                        <p>
                            <div style={{ marginTop: 5 }}></div>
                            <PanelFlex key={0} name={'Rogue-lite'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={1} name={'城市建造'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={2} name={'动作'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={3} name={'格斗'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={4} name={'回合制'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={5} name={'即使战略'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={6} name={'竞速'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={7} name={'卡牌游戏'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={8} name={'恐怖'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={10} name={'冒险'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={11} name={'射击'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={12} name={'喜剧'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={13} name={'休闲'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex key={14} name={'叙事'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        </p>
                    </Collapse.Panel>
                    <Divider />
                    <Collapse.Panel key={4} header={'支持平台'}>
                        <div style={{ marginTop: 5 }}></div>
                        <Flex
                            id={'filter-activity-discount'}
                            justify='space-between'
                            align='center'
                            horizontal
                        >
                            <h className='filter-panel-choice'>Windows</h>
                            <Yes_svg />
                        </Flex>
                        <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        <Flex
                            id={'filter-activity-discount'}
                            justify='space-between'
                            align='center'
                            horizontal
                        >
                            <h className='filter-panel-choice'>Mac</h>
                            <Yes_svg />
                        </Flex>
                        <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        <Flex
                            id={'filter-activity-discount'}
                            justify='space-between'
                            align='center'
                            horizontal
                        >
                            <h className='filter-panel-choice'>Xbox</h>
                            <Yes_svg />
                        </Flex>
                        <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        <Flex
                            id={'filter-activity-discount'}
                            justify='space-between'
                            align='center'
                            horizontal
                        >
                            <h className='filter-panel-choice'>PS</h>
                            <Yes_svg />
                        </Flex>
                        <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        <Flex
                            id={'filter-activity-discount'}
                            justify='space-between'
                            align='center'
                            horizontal
                        >
                            <h className='filter-panel-choice'>Switch</h>
                            <Yes_svg />
                        </Flex>
                        <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        <Flex
                            id={'filter-activity-discount'}
                            justify='space-between'
                            align='center'
                            horizontal
                        >
                            <h className='filter-panel-choice'>移动端</h>
                            <Yes_svg />
                        </Flex>
                    </Collapse.Panel>
                </Collapse>
            </Drawer>
        </>
    );
}

function PanelFlex({ name, key }) {
    const [filterGame, setFilterGame] = useState(false);

    React.useEffect(() => {
        console.log('filterGameChanged');
    }, [filterGame]);

    const Change = () => {
        gameChosen[key] = !gameChosen[key];
        setFilterGame(!filterGame);
    };

    if (gameChosen[key])
        return (
            <Button
                block={true}
                onClick={() => {
                    Change();
                }}
                style={{ borderColor: 'white' }}
            >
                <Flex justify='space-between' align='center' horizontal>
                    <h6>{name}</h6>
                    <Yes_svg />
                </Flex>
            </Button>
        );

    return (
        <Button
            block={true}
            onClick={() => {
                Change();
            }}
            style={{ borderColor: 'white' }}
        >
            <Flex justify='space-between' align='center' horizontal>
                <h6>{name}</h6>
            </Flex>
        </Button>
    );
}

function CardListTable({ gameData }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then((res) => res.json())
            .then((body) => {
                setData([...data, ...body.results]);
                setLoading(false);
            })
            .catch((endMessage) => {
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (
        <>
            <div
                style={{
                    height: 'fixed',
                    overflow: 'auto',
                }}
            >
                <br></br>
                <InfiniteScroll
                    infinite-scroll-disabled={false}
                    dataLength={gameData.length}
                    next={loadMoreData}
                    hasMore={gameData.length < 50}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget='scrollableDiv'
                >
                    <ProList
                        size='small'
                        itemLayout='vertical'
                        rowKey='id'
                        dataSource={gameData}
                        // loading={true}
                        renderItem={(item, index) => {
                            const startIndex = index * 4;
                            const endIndex = startIndex + 4;
                            const items = gameData.slice(startIndex, endIndex);

                            return (
                                <List.Item>
                                    <Row gutter={16}>
                                        {items.map((item, index) => (
                                            <Col span={6} key={index}>
                                                <SingleCard singleCardData={item} />
                                            </Col>
                                        ))}
                                    </Row>
                                </List.Item>
                            );
                        }}
                    ></ProList>
                </InfiniteScroll>
            </div>
        </>
    );
}

function SingleCard({ singleCardData }) {
    return (
        <>
            <Flex
                justify='space-between'
                align='center'
                style={{ width: '100%', aspectRatio: 0.8, marginBottom: 10 }}
                vertical
            >
                <img
                    alt='nop'
                    src='https://cdn2.unrealengine.com/egs-avatar-frontiers-of-pandora-carousel-desktop-1248x702-9346d193b313.jpg?h=720&quality=medium&resize=1&w=1280'
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        aspectRatio: 0.7,
                        borderRadius: 10,
                    }}
                />

                <h6> name </h6>
            </Flex>
        </>
    );
}

function Yes_svg() {
    return (
        <svg
            className='icon'
            viewBox='0 0 1024 1024'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            width='15'
            height='15'
        >
            <path
                d='M392.533333 806.4L85.333333 503.466667l59.733334-59.733334 247.466666 247.466667L866.133333 213.333333l59.733334 59.733334L392.533333 806.4z'
                fill='#2c2c2c'
            ></path>
        </svg>
    );
}

export default Explore_gameRepositoryView;
