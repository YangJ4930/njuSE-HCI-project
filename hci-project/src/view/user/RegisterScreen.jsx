import React, {useState} from 'react';
import {Button, Card, Checkbox, Flex, Form, Input, message, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/authSlice";
import {Link, useNavigate} from "react-router-dom";
import backgroundImage from '../../assets/img/loginBackground_3.jpg';

function RegisterScreen(props) {
    const authInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const [errorMsg, contextHolder] = message.useMessage();
    const handleRegister = () => {
        axios.post('/users/register', {email, password, username})
            .then((response) => {
                const registerData = response.data;

                console.log(registerData);
                //     注册成功后自动登录
                history('/user/login');
            })
            .catch((error) => {
                console.error(error);
                if (error.response && error.response.status === 400) {
                    errorMsg.info(error.response.data).then(r => console.log(r));
                } else {
                    errorMsg.info('注册失败，请稍后再试。').then(r => console.log(r));
                }
            });
    }

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
            {/*错误提示框*/}
            {contextHolder}
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
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
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
                            onChange={(e) => setUsername(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Button type="primary" htmlType="submit" className="login-form-button"
                                onClick={handleRegister}
                        >
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Flex>


    );
}


export {RegisterScreen};