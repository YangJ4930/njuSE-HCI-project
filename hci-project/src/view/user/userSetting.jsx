import React, {useState} from 'react';
import {Button, Checkbox, Descriptions, Form, Image, Input, Select, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import Column from 'antd/es/table/Column';
import axios from "../../axios";
import {fetchUserSuccess} from "../../redux/user/userSlice";

function UserSetting() {
    const [editing, setEditingState] = useState(false);

    return (
        <>
            {editing ? (
                <EditView setEditingState={setEditingState}/>
            ) : (
                    <ShowInfoView setEditingState={setEditingState}/>

            )}
        </>
    );
}

const EditView = ({setEditingState}) => {
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
        axios.post(`/users/${userInfo.id}`, {
            email: form.getFieldValue('email'),
            username: form.getFieldValue('username'),
            description: form.getFieldValue('description'),
            avatarUrl: form.getFieldValue('avatar'),
            cardBackgroundUrl: form.getFieldValue('cardBackground'),
        }).then((response) => {
            console.log(response);
            const userData = response.data;
            dispatch(fetchUserSuccess(userData)); // 成功获取用户数据
        })
    }
    return (
        <>
            <div style={{margin: 100}}></div>
            <Form
                labelCol={{
                    xs: {span: 24},
                    sm: {span: 8},
                }}
                wrapperCol={{
                    xs: {span: 24},
                    sm: {span: 16},
                }}
                form={form}
                name='setting'
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
                initialValues={{
                    email: userInfo.email,
                    username: userInfo.username,
                    description: userInfo.description,
                    avatar: userInfo.avatarUrl,
                    cardBackground: userInfo.cardBackgroundUrl,
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
                >
                    <Input/>
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
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name='description'
                    label='介绍'
                    rules={[
                        {
                            required: false,
                        },
                    ]}
                >
                    <Input.TextArea showCount maxLength={100}/>
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
                >
                    {/*<Image src={userInfo.avatarUrl}/>*/}
                    <Upload name='logo' action='/upload.do' listType='picture-card'>
                        <Button icon={<UploadOutlined/>}>上传</Button>
                    </Upload>
                </Form.Item>

                {/*TODO: upload cardBackground*/}
                <Form.Item
                    name='cardBackground'
                    label='背景图'
                    // valuePropName="fileList"
                    // getValueFromEvent={normFile}
                >
                    <Upload name='logo' action='/upload.do' listType='picture-card'>
                        <Button icon={<UploadOutlined/>}>上传</Button>
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
            <div style={{margin: 300}}></div>
        </>

    );
};

const ShowInfoView = ({setEditingState}) => {
    const userInfo = useSelector((state) => state.user);

    const items = [
        // {
        //     key: '1',
        //     label: 'Id',
        //     children: userInfo.id,
        // },
        {
            key: '2',
            label: '用户名',
            children: userInfo.username,
        },
        {
            key: '3',
            label: '邮箱',
            children: userInfo.email,
        },
        {
            key: '4',
            label: '描述',
            children: userInfo.description,
        },
        {
            key: '5',
            label: '等级',
            children: userInfo.level,
        },
        {
            key: '6',
            label: '头像',
            children: (
                <>
                    <br/>
                    <Image src={userInfo.avatarUrl}/>
                </>
            ),
        },
        {
            key: '7',
            label: '背景图',
            children: <Image src={userInfo.cardBackgroundUrl}/>,
        },
    ];
    return (
        <>
                <Descriptions
                    title='用户信息'
                    bordered={false}
                    items={items}
                    size={'default'}
                    column={2}
                    extra={
                        <Button
                            type='primary'
                            onClick={() => {
                                setEditingState(true);
                            }}
                        >
                            编辑
                        </Button>
                    }
                />
            <div style={{margin: 100}}></div>
        </>
    );
};
export default UserSetting;
