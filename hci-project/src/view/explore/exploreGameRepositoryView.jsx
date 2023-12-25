import {
    List,
    Dropdown,
    Space,
    Drawer,
    Button,
    Col,
    Row,
    Divider,
    Collapse,
    Flex,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer, ProList } from '@ant-design/pro-components';
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
const gameType =[
    "Rogue-lite",
    "城市建造",
    "动作",
    "格斗",
    "回合制",
    "即时战略",
    "竞速",
    "卡牌游戏",
    "恐怖",
    "冒险",
    "射击",
    "喜剧",
    "休闲",
    "叙事",
]

const ExploreGameRepositoryView = function Explore_gameRepositoryView() {
    const [gameList, setGameList] = React.useState([]);

    React.useEffect(() => {
        axios.get('/explore/recommendation').then((response) => {
            console.log(response);
            setGameList(response.data);
            console.log(response.data);
        });
    }, []);

    //根据选中条件变更数据
    const getData = () => {
        console.log("123456")
        if (gameChosen.every((value) => !value)) {
            // 当全部游戏类型都未选中时，返回全部数据
            return gameList;
        } else {
            /**
            const selectedData = gameList.filter( item => {
                // 检查游戏类型是否有交集
                const gameTypeIndex = gameType.indexOf(item.type);
                return gameChosen[gameTypeIndex] === true;
            });
            console.log(selectedData)
            return selectedData;
             **/
            return gameList;
        }
    };

    return (
        <>
            <div>
                <PageContainer>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Arrangement />
                        <Filter />
                    </div>
                    <br/>
                    <CardListTable gameData={getData()}/>
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

function Filter({}) {
    const [open, setOpen] = useState(false);

    const showFilter = () => {
        setOpen(true);
    };

    const closeFilter = () => {
        setOpen(false);
    };

    return (
        <>
            <Button type='primary' onClick={showFilter}>
                <Flex justify={"space-between"} align={"center"} horizontal>
                    <h6>筛选</h6>
                    <svg viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2558"
                         width="20" height="20">
                        <path
                            d="M582.4 529.92c0-18.8416 6.4512-37.1712 18.2272-51.9168l182.3744-227.9936a19.2 19.2 0 0 0 4.1984-11.9808V204.8A19.2 19.2 0 0 0 768 185.6H256A19.2 19.2 0 0 0 236.8 204.8v33.28c0 4.3008 1.4848 8.5504 4.1984 11.9296L423.424 478.0032c11.776 14.7456 18.2272 33.0752 18.2272 51.968v257.5872c0 7.2704 4.096 13.9264 10.5984 17.152l130.2016 65.1264V529.92zM256 121.6512h512c45.9264 0 83.2 37.2736 83.2 83.2v33.28c0 18.8416-6.4512 37.1712-18.2272 51.9168l-182.3744 227.9936a19.2 19.2 0 0 0-4.1984 11.9808v350.208a57.6 57.6 0 0 1-83.3536 51.5072l-139.4688-69.7344a83.2 83.2 0 0 1-45.9776-74.3936v-257.5872a19.2 19.2 0 0 0-4.1984-11.9808L190.976 289.9968a83.2 83.2 0 0 1-18.2272-51.968V204.8c0-45.9264 37.2736-83.2 83.2-83.2z"
                            fill="#5A5A68" p-id="2559"
                            data-spm-anchor-id="a313x.search_index.0.i1.55103a81CVA3yf"></path>
                    </svg>
                </Flex>
            </Button>
            <Drawer title='筛选' placement='right' onClose={closeFilter} open={open}>
                <Collapse
                    defaultActiveKey={['1']}
                    bordered={false}
                    ghost={true}
                    className='my-collapse'
                >
                    <Divider />
                    <Collapse.Panel key={3} header={'游戏类型'}>
                        <p>
                            <div style={{ marginTop: 5 }}></div>
                            <PanelFlex keyString={'990'} name={'Rogue-lite'}/>
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'991'} name={'城市建造'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'992'} name={'动作'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'993'} name={'格斗'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'994'} name={'回合制'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'995'} name={'即使战略'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'996'} name={'竞速'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'997'} name={'卡牌游戏'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'998'} name={'恐怖'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'999'} name={'冒险'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'1000'} name={'射击'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'1001'} name={'喜剧'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'1002'} name={'休闲'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                            <PanelFlex keyString={'1003'} name={'叙事'} />
                            <div style={{ marginTop: 25, marginBottom: 25 }}></div>
                        </p>
                    </Collapse.Panel>
                </Collapse>
            </Drawer>
        </>
    );
}

function PanelFlex({ name, keyString}) {
    let key = parseInt(keyString) - 990;
    const [filterGame, setFilterGame] = useState(false);

    React.useEffect(() => {
        console.log('filterGameChanged');
    }, [filterGame]);

    const Change = () => {
        gameChosen[key] = !gameChosen[key];
        setFilterGame(!filterGame);
        //console.log(name)
        //console.log(key)
        console.log(gameChosen)
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

function CardListTable({ gameData}) {


    React.useEffect(() => {
        console.log('yes!');
        //console.log("gameChanged")
    }, [gameChosen]);
    /**
     有点毛病用List替代一下
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    let counting = 0;

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);

        let loadData = gameData.slice(counting, counting + 4);
        counting += 4;
        setData([...data, ...loadData]);
        setLoading(false)

        fetch('')
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
        console.log("jiazai")
    }, []);
     **/

    return (
        <React.Fragment>
            <List
                grid={{ gutter: 32, column: 4 }}
                dataSource={gameData}
                renderItem={(item) => (
                    <List.Item>
                        <SingleCard singleCardData={item}/>
                    </List.Item>
                )}
            />
        </React.Fragment>
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
                    src={singleCardData.imgUrl}
                    style={{
                        width: '100%',
                        objectFit: 'cover',
                        aspectRatio: 0.7,
                        borderRadius: 10,
                    }}
                />

                <h6> {singleCardData.name} </h6>
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

export default ExploreGameRepositoryView;
