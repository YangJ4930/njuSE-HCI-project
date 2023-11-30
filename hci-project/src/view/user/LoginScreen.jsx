import React, {useState} from 'react';
import {Button, Card, Checkbox, Flex, Form, Input, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../features/user/authSlice";
import {Link} from "react-router-dom";
import backgroundImage from '../../assets/img/loginBackground_3.jpg';

function LoginScreen(props) {
    const authInfo = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        axios.post('/users/login', {email, password})
            .then((response) => {
                const loginData = response.data;

                console.log(loginData);
                dispatch(login());

                sessionStorage.setItem('isLogin', 'true');
            })
            .catch((error) => {
                console.error(error);
            });
    };


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
                            onChange={
                                (e) => {
                                    setEmail(e.target.value);
                                }

                            }/>
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
                            onChange={
                                (e) => {
                                    setPassword(e.target.value);
                                }
                            }
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{float: 'left'}}>记住我</Checkbox>
                        <Link style={{float: 'right'}}>忘记密码</Link>
                    </Form.Item>

                    <Form.Item
                        style={{paddingTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Button type="primary" htmlType="submit" className="login-form-button"
                                onClick={handleLogin}
                        >
                            登录
                        </Button>

                    </Form.Item>

                    <Form.Item
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                    >
                        <Link to={'/user/register'}>点我注册🥳</Link>
                    </Form.Item>
                </Form>
            </Card>
        </Flex>


    );
}


export {LoginScreen};