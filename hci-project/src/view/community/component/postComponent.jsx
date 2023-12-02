import { Upload, Modal, Input, Form, Space, Divider, Button } from 'antd';
import { useState } from 'react';
import React from "react"
import { PlusOutlined } from '@ant-design/icons';
import './post.css';
import { useForm } from 'antd/es/form/Form';

const PostC=(from,file)=>{
    const fd=new FormData()
    file.map((item)=>{
        fd.append('file',item)
        fd.append('uid',item.uid)
    })
    const f=JSON.stringify(from);
    const blob=new Blob([f],{
        type:'application/json',
    })
    fd.append('form',blob)
    console.log(file)
    fetch('http://localhost:8000/community/Upload',{
        method:'post',
        body:fd,
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(er=>{console.log(er)})
}
const PostComponent=function PostComponent(){
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
    const handleCancel = () => {
        setOpenImage(false);
    };
    const onChange1 = (file) => {
        let fil=[]
        file.fileList.map((item)=>{
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
                    height: '800px',
                }}
                className='groud'
            >
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
                        <Divider orientation='left'>Title</Divider>
                        <Form.Item name='title'>
                            <TextArea bordered={false} placeholder='标题' rows={1} />
                        </Form.Item>
                        <Divider orientation='left'>Content</Divider>
                        <Form.Item name='content'>
                            <TextArea
                                className='textarea'
                                bordered={false}
                                placeholder='正文内容'
                                rows={20}
                            />
                        </Form.Item>
                    </Space>
                    <Button
                        className='formitembutton'
                        onClick={() => {
                            console.log(form.getFieldsValue());
                        }}
                    >
                        submit
                    </Button>
                </Form>
            </div>

    
    <Modal  style={{
            display:"flex",
            alignItems: 'center', 
            justifyContent: 'center',
            top: 50,
            maxWidth:'80vw',
            flexDirection:'column',
            footer:100
          }}
          width="80vw"
          open={openImage} footer={<Button type="primary">设置为封面</Button>} onCancel={handleCancel}>
        <Divider orientation='left'>Picture</Divider>
        <img alt="example" style={{
            width: 'auto',
            height: '80%',
            maxWidth:'100%',
            maxHeight: 'calc(100vh - 158px)',
            position: 'relative',
            scale:"100%",
            margin: '0 auto',}} src={selectedImage} />
        
    </Modal>
    </>
    )
}
export default PostComponent
