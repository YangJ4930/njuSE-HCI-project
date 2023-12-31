import {
    Upload,
    Modal,
    Input,
    Form,
    Space,
    Divider,
    Button,
    message,
    Tag,
    theme,
    Select,
    Row,
    Flex,
} from 'antd';
import { useState } from 'react';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './post.css';
import { useForm } from 'antd/es/form/Form';
import MDEditor from '@uiw/react-md-editor';
import GameTags from './GameTags';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Clearlist } from '../../../redux/user/communitySlice';
import Title from 'antd/es/skeleton/Title';
import axios from '../../../axios';

const PostComponent = function PostComponent() {
    const userID = useSelector((state) => state.user.id);
    const islogin = useSelector((state) => state.auth.isLogin);
    const dispatch = useDispatch();
    const savelist = useSelector((state) => state.community);
    const nav = useNavigate();
    const options = [
        {
            value: 'gold',
        },
        {
            value: 'lime',
        },
        {
            value: 'green',
        },
        {
            value: 'cyan',
        },
    ];
    const { token } = theme.useToken();
    const { TextArea } = Input;
    const [fileList, setFileList] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [openImage, setOpenImage] = useState(false);
    const [markdownContent, setMarkdownContent] = useState();
    const [form] = useForm();
    const setMarkContent = (value) => {
        console.log(value);
        setMarkdownContent(value);
    };
    const handlePreview = (file) => {
        const reader = new FileReader();
        reader.onload = (result) => {
            setSelectedImage(result.target.result);
        };
        reader.readAsDataURL(file.originFileObj);
        setOpenImage(true);
    };
    const key = 'updatable';
    const PostC = (from, file) => {
        if (islogin) {
            message.open({
                key,
                type: 'loading',
                content: '正在发送帖子。。。🤐',
            });
            const fd = new FormData();
            file.map((item) => {
                fd.append('file', item);
                fd.append('uid', item.uid);
            });
            const f = JSON.stringify(from);
            const blob = new Blob([f], {
                type: 'application/json',
            });
            fd.append('form', blob);
            fd.append('tags', tags);
            fd.append('userId', userID);
            console.log(file);
            fetch(axios.defaults.baseURL + '/community/Upload', {
                method: 'post',
                body: fd,
            })
                .then((response) => {
                    console.log(response);
                    setTimeout(() => {
                        message.open({
                            key,
                            type: 'success',
                            content: 'Loaded!',
                            duration: 2,
                        });
                    }, 1000);
                    // message.open({
                    //     key,
                    //     type: 'success',
                    //     content: '帖子发布成功！',
                    //     duration: 2,
                    // })
                    dispatch(Clearlist());
                    nav('/community');
                })
                .catch((error) => console.log(error));
        } else {
            message.open({
                key,
                type: 'warning!',
                content: '请先登录',
                duration: 2,
            });
        }
    };
    const handleCancel = () => {
        setOpenImage(false);
    };
    const onChange1 = (file) => {
        let fil = [];
        file.fileList.map((item) => {
            fil.push(item.originFileObj);
        });
        setFileList(fil);
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上传</div>
        </div>
    );
    return (
        <Flex vertical={true} flex={1} align={'center'}>
            <div
                style={{
                    width: '200px',
                    fontSize: '24px',
                    textAlign: 'center',
                    lineHeight: '100px',
                }}
            >
                图文
            </div>

            <Form form={form} title='图文' className='postform'>
                <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
                    <Divider orientation='left'>话题</Divider>
                    <GameTags setTags={setTags}></GameTags>
                    <Divider orientation='left'></Divider>
                    <Form.Item className='formitem'>
                        <Upload
                            className='imageInput'
                            action=''
                            beforeUpload={() => false}
                            listType='picture-card'
                            onPreview={handlePreview}
                            onChange={onChange1}
                            maxCount={8}
                        >
                            {fileList.length > 8 ? null : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Divider orientation='left'>标题</Divider>
                    <Form.Item name='title'>
                        <TextArea bordered={false} placeholder='标题' rows={1} />
                    </Form.Item>
                    <Divider orientation='left'>正文</Divider>
                    <Form.Item name='content'>
                        <MDEditor value={markdownContent} onChange={setMarkContent} />
                    </Form.Item>
                </Space>
            </Form>

            <Row
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    flex: 1,
                }}
            >
                <Button
                    className='formitembutton'
                    onClick={() => {
                        PostC(form.getFieldValue(), fileList);
                    }}
                    size={'large'}
                >
                    发帖
                </Button>
            </Row>

            <Modal
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 50,
                    maxWidth: '80vw',
                    flexDirection: 'column',
                    footer: 100,
                }}
                width='80vw'
                open={openImage}
                footer={<Button type='primary'>设置为封面</Button>}
                onCancel={handleCancel}
            >
                <Divider orientation='left'>Picture</Divider>
                <img
                    alt='example'
                    style={{
                        width: 'auto',
                        height: '80%',
                        maxWidth: '100%',
                        maxHeight: 'calc(100vh - 158px)',
                        position: 'relative',
                        scale: '100%',
                        margin: '0 auto',
                    }}
                    src={selectedImage}
                />
            </Modal>
        </Flex>
    );
};
export default PostComponent;
