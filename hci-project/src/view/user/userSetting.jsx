import React, { useState } from 'react';
import {
    Avatar,
    Button,
    Card,
    Checkbox,
    Col,
    Descriptions,
    Divider,
    Flex,
    Form,
    Image,
    Input,
    Row,
    Select,
    Space,
    Upload,
} from 'antd';
import { MailOutlined, UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';
import { fetchUserSuccess } from '../../redux/user/userSlice';

function UserSetting() {
    const [editing, setEditingState] = useState(false);
    const themeMode = useSelector((state) => state.theme.IsChange);

    return (
        <Flex justify={'space-between'} style={{ justifyContent: 'center' }}>
            <Card
                bordered={false}
                hoverable
                style={{
                    width: '95%',
                    height: '100%',
                    minHeight: 800,
                    overflow: 'auto',
                    borderRadius: 36,
                    padding: 20,
                    marginInline: 110,
                    backgroundColor: themeMode ? 'rgba(18,18,18,0.85)' : 'white',
                    color: themeMode ? 'white' : 'black',
                }}
            >
                <EditView setEditingState={setEditingState} />
            </Card>
        </Flex>
    );
}

const EditView = ({ setEditingState }) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const userInfo = useSelector((state) => state.user);

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const dispatch = useDispatch();

    const updateUserInfo = () => {
        axios
            .post(`/users/${userInfo.id}`, {
                email: form.getFieldValue('email'),
                username: form.getFieldValue('username'),
                description: form.getFieldValue('description'),
                avatarUrl: form.getFieldValue('avatar'),
                cardBackgroundUrl: form.getFieldValue('cardBackground'),
            })
            .then((response) => {
                console.log(response);
                const userData = response.data;
                dispatch(fetchUserSuccess(userData)); // 成功获取用户数据
            });
    };
    return (
        <Form
            labelCol={{
                xs: { span: 24 },
                sm: { span: 8 },
            }}
            wrapperCol={{
                xs: { span: 24 },
                sm: { span: 16 },
            }}
            form={form}
            name='setting'
            onFinish={onFinish}
            scrollToFirstError
            initialValues={{
                email: userInfo.email,
                username: userInfo.username,
                description: userInfo.description,
                avatar: userInfo.avatarUrl,
                cardBackground: userInfo.cardBackgroundUrl,
            }}
            style={{
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            <Form.Item
                name='email'
                label='邮箱'
                rules={[
                    {
                        type: 'email',
                        message: '无效邮箱！',
                    },
                    {
                        required: true,
                        message: '请输入邮箱',
                    },
                ]}
                style={{ width: '80%' }}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name='username'
                label='用户名'
                tooltip='What do you want others to call you?'
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                ]}
                style={{ width: '80%' }}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name='description'
                label='介绍'
                rules={[
                    {
                        required: false,
                    },
                ]}
                style={{ width: '80%' }}
            >
                <Input.TextArea showCount maxLength={100} />
            </Form.Item>

            {/* TODO: upload avatar*/}
            <Form.Item
                name='avatar'
                label='头像'
                rules={[
                    {
                        required: false,
                    },
                ]}
                style={{ width: '80%' }}
            >
                {/*<Image src={userInfo.avatarUrl}/>*/}
                <Upload name='logo' action='/upload.do' listType='picture-card'>
                    <Button icon={<UploadOutlined />}>上传</Button>
                </Upload>
            </Form.Item>

            {/*TODO: upload cardBackground*/}
            <Form.Item
                name='cardBackground'
                label='背景图'
                // valuePropName="fileList"
                // getValueFromEvent={normFile}
                style={{ width: '80%' }}
            >
                <Upload name='logo' action='/upload.do' listType='picture-card'>
                    <Button icon={<UploadOutlined />}>上传</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                    {
                        validator: (_, value) =>
                            value
                                ? Promise.resolve()
                                : Promise.reject(new Error('需要同意用户协议')),
                    },
                ]}
                wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 0,
                    },
                    sm: {
                        span: 16,
                        offset: 8,
                    },
                }}
                style={{ width: '80%' }}
            >
                <Checkbox>
                    我已阅读并同意 <a href=''>用户协议</a>
                </Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 0,
                    },
                    sm: {
                        span: 16,
                        offset: 8,
                    },
                }}
                style={{ width: '80%' }}
            >
                <Button
                    type='primary'
                    onClick={() => {
                        setEditingState(false);
                        updateUserInfo();
                    }}
                >
                    保存
                </Button>
            </Form.Item>
        </Form>
    );
};

export default UserSetting;
