import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import {Carousel, Dropdown, Menu, Space, Drawer, Button} from 'antd';
import React, {useState} from "react";
import {Link} from "react-router-dom";

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
];


const  Explore_gameRepositoryView = function Explore_gameRepositoryView() {

    return <>
        <div style = {{display: "flex", alignItems: "center"}}>
            <Arrangement />
            <Filter/>
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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </>
}
export default Explore_gameRepositoryView