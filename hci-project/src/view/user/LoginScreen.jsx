import React, {useState} from 'react';
import {Button, Card, Checkbox, Flex, Form, Input, message, Row} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import axios from "../../axios";
import {useDispatch} from "react-redux";
import {login} from "../../features/user/authSlice";
import {Link, useNavigate} from "react-router-dom";
import backgroundImage from '../../assets/img/loginBackground_3.jpg';


function LoginScreen(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, contextHolder] = message.useMessage();

    const handleLogin = () => {
        axios.post('/users/login', {email, password})
            .then((response) => {
                console.log(response);

                const loginData = response.data;

                dispatch(login(loginData));

                navigate('/user');
            })
            .catch((error) => {
                console.error(error);

                errorMsg.error(error.response.data.msg).then(r => console.log(r));


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
            {contextHolder}
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