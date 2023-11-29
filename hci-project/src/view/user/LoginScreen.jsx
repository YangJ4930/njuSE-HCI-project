import React from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/authSlice";

function LoginScreen(props) {
    const authInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onFinish = (values) => {
        console.log('Received values:', values);
        // 在此处可以处理登录逻辑，例如发送登录请求等
        axios.get('/login').then((response) => {
            const loginData = response.data;
            console.log(loginData);
            dispatch(login(loginData));

            sessionStorage.setItem('isLogin', 'true');
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                style={{ width: 300 }}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item style={{margin: "auto"}}>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }} onClick={onFinish}>
                        登录
                    </Button>
                    <Button type="primary" htmlType="submit" style={{ width: '100%'}}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}


export {LoginScreen};