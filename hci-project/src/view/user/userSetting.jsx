import React, {useState} from "react";
import {Button, Form, Image, Input, Select} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";


function UserSetting() {
    const [editing, setEditingState] = useState(false);

    return (
        <>
            {editing ? <EditView setEditingState={setEditingState}/> :
                <ShowInfoView setEditingState={setEditingState}/>}
        </>
    )
}


const EditView = ({setEditingState}) => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
    const onWebsiteChange = (value) => {
        if (!value) {
            setAutoCompleteResult([]);
        } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
    };
    const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
    }));

    const userInfo = useSelector((state) => state.user);

    return (
        <Form
            form={form}
            name="setting"
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
            scrollToFirstError
            initialValues={
                {
                    email: userInfo.email,
                    username: userInfo.username,
                    description: userInfo.description,
                    avatar: userInfo.avatarUrl,
                    cardBackground: userInfo.cardBackgroundUrl
                }
            }
        >
            <Form.Item
                name="email"
                label="邮箱"
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
                name="username"
                label="用户名"
                tooltip="What do you want others to call you?"
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
                name="description"
                label="介绍"
                rules={[
                    {
                        required: false,
                    },
                ]}
            >
                <Input.TextArea showCount maxLength={100}/>
            </Form.Item>


            <Form.Item
                name="avatar"
                label="头像"
                rules={[
                    {
                        required: false,
                    },
                ]}
            >
                {/* TODO: upload avatar*/}
                <Image src={userInfo.avatarUrl}/>
                <Button type={"text"}>
                    <UploadOutlined/>
                </Button>
            </Form.Item>

            <Form.Item
                name="cardBackground"
                label="背景图"
                rules={[
                    {
                        required: false,
                    },
                ]}
            >
                {/*TODO: upload cardBackground*/}
                <Image src={userInfo.cardBackgroundUrl}/>
                <Button type={"text"}>
                    <UploadOutlined/>
                </Button>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    onClick={() => {
                        setEditingState(false)
                        //TODO: post to backend
                    }}
                >
                    保存
                </Button>
            </Form.Item>

        </Form>
    )
}

const ShowInfoView = ({setEditingState}) => {

    return (
        <div>
            <h1>用户信息</h1>
            <p>用户名：123</p>
            <p>邮箱：123</p>
            <p>介绍：123</p>
            <Button type={"primary"} onClick={() => {
                setEditingState(true)
            }}>
                编辑
            </Button>
        </div>
    )

}
export default UserSetting;