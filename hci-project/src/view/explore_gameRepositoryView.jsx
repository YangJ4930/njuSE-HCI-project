import {DownOutlined, EditOutlined, EllipsisOutlined, SettingOutlined, SmileOutlined} from '@ant-design/icons';
import {
    Avatar, Skeleton, Carousel, List, Dropdown, Menu, Space, Drawer, Button, Card, Col, Row, Divider, Slider, message
} from 'antd';
import VirtualList from 'rc-virtual-list';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {PageContainer, ProList} from "@ant-design/pro-components";
import Meta from "antd/es/card/Meta";

const arrangementItems = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                人气最高
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                最新发布
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
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
    }
]



const  Explore_gameRepositoryView = function Explore_gameRepositoryView() {

    return <>
        <div>
            <PageContainer>
                <div style = {{display: "flex", alignItems: "center"}}>
                    <Arrangement />
                    <Filter/>
                </div>
                <CardListTable/>
            </PageContainer>
        </div>
    </>
}

function Arrangement() {
    return<>
    <Dropdown.Button
        menu={{
            items: arrangementItems,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                排序方式
            </Space>
        </a>
    </Dropdown.Button>
    </>
}

function Filter() {
    const [open, setOpen] = useState(false);

    const showFilter = () =>{
        setOpen(true);
    };

    const closeFilter = () =>{
        setOpen(false);
    };

    return <>
        <div style = {{display: "flex", alignItems: "center"}}>
            <Button type="primary" onClick={showFilter}>
                <Space>
                    <text>筛选器</text>
                    <svg className="icon_filter" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                    <path
                        d="M608.241895 960.010751c-17.717453 0-31.994625-14.277171-31.994625-31.994625l0-479.919368c0-7.912649 2.92424-15.653284 8.256677-21.501764l208.82513-234.455233L230.498908 192.139761l209.169158 234.627247c5.160423 5.84848 8.084663 13.417101 8.084663 21.32975l0 288.811692 50.916177 41.111372c13.761129 11.180917 15.825298 31.306568 4.816395 45.067697s-31.306568 15.825298-45.067697 4.816395L395.632454 776.815723c-7.568621-6.020494-11.868974-15.309256-11.868974-24.942046L383.763481 460.137746 135.203091 181.302873c-8.428691-9.460776-10.492861-22.877877-5.332437-34.402822 5.160423-11.524945 16.685369-18.921552 29.242399-18.921552l706.289938 0c12.729044 0 24.081975 7.396607 29.242399 19.093566 5.160423 11.524945 2.92424 25.11406-5.504452 34.402822L640.236519 460.30976l0 467.706367C640.236519 945.73358 625.959348 960.010751 608.241895 960.010751z"
                        fill="#2c2c2c"></path>
                </svg>
                </Space>
            </Button>
        </div>
        <Drawer title="筛选" placement="right" onClose={closeFilter} open={open}>
            <Dropdown.Button
                menu={{
                    items: arrangementItems,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        排序方式
                    </Space>
                </a>
            </Dropdown.Button>
        </Drawer>
    </>
}

function CardListTable(){
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    const ite = ['Item 1', 'Item 2', 'Item 3','Item 4','Item 5','Item 6','Item 7','Item 8','Item 9']
    // const[items ,setItems]=useState(ite)
    // setItems(ite)

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
    return <>
        <div
            id="scrollableDiv"
            style={{
                height:"fixed",
                overflow: 'auto',
            }}
        >
            <br></br>
            <InfiniteScroll
                infinite-scroll-disabled={false}
                dataLength={data.length}
                next={loadMoreData}
                hasMore={data.length < 50}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <ProList
                    size="small"
                    itemLayout="vertical"
                    rowKey="id"
                    dataSource={data}
                    // loading={true}
                    renderItem={(item)=>{
                        return  <List.Item >
                            <Row gutter={16}>
                                <Col span={6}>
                                    <SingleCard />
                                </Col>
                                <Col span={6}>
                                    <SingleCard />
                                </Col>
                                <Col span={6}>
                                    <SingleCard />
                                </Col>
                                <Col span={6}>
                                    <SingleCard />
                                </Col>
                            </Row>
                        </List.Item>
                    }}

                >
                </ProList>
            </InfiniteScroll>
        </div>
    </>
}

function SingleCard(){
    return <>
        <Card
            style={{
                width: "100%",
            }}
            cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    </>
}
export default Explore_gameRepositoryView