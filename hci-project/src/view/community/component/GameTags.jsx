import React from 'react';
import { Select, Tag } from 'antd';
const options = [
    {
        value: 'apex',
    },
    {
        value: '博德之门3',
    },
    {
        value: '无畏契约',
    },
    {
        value: '彩虹六号',
    },
    {
        value: '我的世界',
    },
    {
        value: '艾尔登法环',
    },
    {
        value: '战地5',
    },
    {
        value: '双人成行',
    },
];
const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color='blue'
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 3,
            }}
        >
            {label}
        </Tag>
    );
};
const GameTags = (props) => {
    const setTags = props.setTags;

    return (
        <Select
            mode='multiple'
            
            tagRender={tagRender}
            style={{
                width: '100%',
            }}
            options={options}
            onChange={(value) => {
                setTags(value);
            }}
        />
    );
};
export default GameTags;
