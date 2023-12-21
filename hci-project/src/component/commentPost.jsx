import React, { useState } from 'react';
import { Button, Drawer, Space, Tooltip, Flex, Input,message } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import axios from '../axios'
import { useSelector } from 'react-redux';
const CommentPost = (props) => {
    const { TextArea } = Input;
    const [comment,setComment]=useState(null);
    const communityId=props.communityId;
    const userId = useSelector((state) => state.user.id);
    const islogin = useSelector((state) => state.auth.isLogin);
    const onChange = (e) => {
        setComment(e.target.value)
        // console.log('Change:', e.target.value);
    };
    const [open, setOpen] = useState(false);
    const key = 'updatable';
    const postcomment=()=>{
        if(islogin){
            message.open({
                key,
                type: 'loading',
                content: '正在发送评论。。。',
            });
            console.log("comId"+communityId);
            console.log("userId"+userId);
            axios.post('/community/Comment',{communityId,comment,userId})
            .then((response)=>{
                console.log(response);
                setTimeout(() => {
                    message.open({
                        key,
                        type: 'success',
                        content: 'Loaded!',
                        duration: 2,
                    });
                    
                }, 1000);
                setOpen(false)
                
                setComment("")
            })
            .catch((error) => {
                console.error(error);
    
                //errorMsg.error(error.response.data.msg).then((r) => console.log(r));
            });

        }else{
            message.open({
                key,
                type: 'warning',
                content: '请先登录',
            });
        }
    }
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Space>
                <Tooltip placement='topLeft' title='发表你的看法吧！'>
                    <Button
                        size='large'
                        color='blue'
                        icon={<PlusCircleFilled style={{ color: '#2db7f5' }} />}
                        onClick={showDrawer}
                        shape='circle'
                    ></Button>
                </Tooltip>
            </Space>
            <Drawer
                title='发表你的看法吧!'
                placement='right'
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type='primary' onClick={postcomment}>
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Flex vertical gap={32}>
                    <TextArea
                        showCount
                        maxLength={100}
                        onChange={onChange}
                        placeholder='disable resize'
                        style={{
                            height: '100%',
                            resize: 'none',
                        }}
                    />
                    <div>发表你的看法吧!</div>
                </Flex>
            </Drawer>
        </>
    );
};
export default CommentPost;
