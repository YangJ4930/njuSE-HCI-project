import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Carousel , Dropdown, Menu, Space} from 'antd';
import React from "react";
import {Link} from "react-router-dom";

const items = [
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
        </div>
    </>
}

const Arrangement = () => (
    <Dropdown.Button
        menu={{
            items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                排序方式
            </Space>
        </a>
    </Dropdown.Button>
);

export default Explore_gameRepositoryView