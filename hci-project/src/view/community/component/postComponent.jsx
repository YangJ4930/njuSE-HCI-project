import { Upload, Modal, Input, Form, Space, Divider, Button, message } from 'antd';
import { useState } from 'react';
import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import './post.css';
import { useForm } from 'antd/es/form/Form';
import MDEditor from '@uiw/react-md-editor';


const PostComponent = function PostComponent() {
    const { TextArea } = Input;
    const [fileList, setFileList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [openImage, setOpenImage] = useState(false);
    const [form] = useForm();
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
        message.open({
            key,
            type: "loading",
            content: "正在发送帖子。。。🤐",
        });
        const fd = new FormData()
        file.map((item) => {
            fd.append('file', item)
            fd.append('uid', item.uid)
        })
        const f = JSON.stringify(from);
        const blob = new Blob([f], {
            type: 'application/json',
        })
        fd.append('form', blob)
        console.log(file)
        fetch('http://localhost:7999/community/Upload', {
            method: 'post',
            body: fd,
        })
            .then(response => {
                console.log(response.ok)
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
            })
            .catch(er => { console.log(er) })
    }
    const handleCancel = () => {
        setOpenImage(false);
    };
    const onChange1 = (file) => {
        let fil = []
        file.fileList.map((item) => {
            fil.push(item.originFileObj)

        })
        setFileList(fil)
    };
    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <>
            <div
                style={{
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'center',
                    height: '800px'
                }}
                className="groud"
            >
                <div
                    style={{
                        width: '200px',
                        fontSize: '24px',
                        textAlign: 'center',
                        lineHeight: '100px'
                    }}
                >
                    图文
                </div>
                <Form form={form} title="图文" className="postform">
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Form.Item className="formitem">
                            <Upload
                                className="imageInput"
                                action=""
                                beforeUpload={() => false}
                                listType="picture-card"
                                onPreview={handlePreview}
                                onChange={onChange1}
                                maxCount={8}
                            >
                                {fileList.length > 8 ? null : uploadButton}
                            </Upload>
                        </Form.Item>
                        <Divider orientation="left">Title</Divider>
                        <Form.Item name="title">
                            <TextArea bordered={false} placeholder="标题" rows={1} />
                        </Form.Item>
                        <Divider orientation="left">Content</Divider>
                        <Form.Item name="content">
                            <MDEditor value={markdownContent} onChange={setMarkdownContent} />
                        </Form.Item>
                    </Space>
                    <Button
                        className="formitembutton"
                        onClick={() => {
                            PostC(form.getFieldValue(), fileList);
                        }}
                    >
                        submit
                    </Button>
                </Form>
            </div>


            <Modal style={{
                display: "flex",
                alignItems: 'center',
                justifyContent: 'center',
                top: 50,
                maxWidth: '80vw',
                flexDirection: 'column',
                footer: 100
            }}
                width="80vw"
                open={openImage} footer={<Button type="primary">设置为封面</Button>} onCancel={handleCancel}>
                <Divider orientation='left'>Picture</Divider>
                <img alt="example" style={{
                    width: 'auto',
                    height: '80%',
                    maxWidth: '100%',
                    maxHeight: 'calc(100vh - 158px)',
                    position: 'relative',
                    scale: "100%",
                    margin: '0 auto',
                }} src={selectedImage} />

            </Modal>
        </>
    )
}
export default PostComponent
