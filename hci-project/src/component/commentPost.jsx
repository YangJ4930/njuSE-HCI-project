import React, { useState } from 'react';
import { Button, Drawer, Space, Tooltip, Flex, Input } from 'antd';
import {
  PlusCircleFilled
} from "@ant-design/icons";
const CommentPost = () => {
  const { TextArea } = Input;
  const onChange = (e) => {
    console.log('Change:', e.target.value);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Tooltip placement="topLeft" title="发表你的看法吧！">
          <Button size="large" color='blue' icon={<PlusCircleFilled style={{ color: "#2db7f5" }} />} onClick={showDrawer} shape="circle" >
          </Button>
        </Tooltip>
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement="right"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <Flex vertical gap={32}>
          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            placeholder="disable resize"
            style={{
              height: "100%",
              resize: 'none',
            }}
          />
          <div>在此区域发表你的看法</div>
        </Flex>

      </Drawer>
    </>
  );
};
export default CommentPost;