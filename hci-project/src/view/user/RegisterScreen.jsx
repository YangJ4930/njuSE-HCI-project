import React, {useState} from 'react';
import {Button, Card, Checkbox, Flex, Form, Input, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/authSlice";
import {Link} from "react-router-dom";
import backgroundImage from '../../assets/img/loginBackground_3.jpg';

function RegisterScreen(props) {
    const authInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (values) => {
        console.log('Received values:', values);
        // 在此处可以处理登录逻辑，例如发送登录请求等
        axios.post('/users/login', {email, password}).then((response) => {
            const loginData = response.data;
            console.log(loginData);
            dispatch(login(loginData));

            sessionStorage.setItem('isLogin', 'true');
        }).catch((error) => {
            console.error(error);
        });
    };

    const hadleRegister = (values) => {
        console.log('Received values:', values);
        // 在此处可以处理登录逻辑，例如发送登录请求等
        axios.get('/users/register').then((response) => {
            const loginData = response.data;
            console.log(loginData);
            dispatch(login(loginData));

            sessionStorage.setItem('isLogin', 'true');
        }).catch((error) => {
            console.error(error);
        });
    }

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Flex
            flex={1}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <Card
                hoverable={true}
                style={{
                    width: '350px',
                }}
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="Username"
                            placeholder="Username"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Flex>


    );
}


export {RegisterScreen};