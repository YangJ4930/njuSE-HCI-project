import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { fetchUserSuccess } from '../../redux/user/userSlice';
import {
    Avatar,
    Button,
    Card,
    Col,
    Divider,
    Flex,
    FloatButton,
    Row,
    Space,
    Tag,
    Tooltip,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { EditOutlined, MailTwoTone } from '@ant-design/icons';
import BackTop from '../../component/BackTop';
import { GameList } from '../search/component/GameList';

const UserInfoScreen = (props) => {
    const userInfo = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tokenName = useSelector((state) => state.auth.saTokenInfo.tokenName);
    const tokenValue = useSelector((state) => state.auth.saTokenInfo.tokenValue);
    const userId = useSelector((state) => state.auth.saTokenInfo.loginId);
    const isLogin = useSelector((state) => state.auth.isLogin);
    const themeMode = useSelector((state) => state.theme.IsChange);

    useEffect(() => {
        if (isLogin) {
            axios
                .get(`/users/${userId}`, { headers: { [tokenName]: tokenValue } })
                .then((response) => {
                    console.log(response);
                    const userData = response.data;
                    dispatch(fetchUserSuccess(userData)); // 成功获取用户数据
                })
                .catch((error) => {
                    console.log('login state: ' + isLogin);
                    navigate('/user');
                    console.error(error);
                });
        } else {
            console.log('login state: ' + isLogin);
            navigate('/news');
        }
    }, [isLogin]);
    return (
        <div>
            <UserInfo userInfo={userInfo} />
            <GameInventory gameInventory={userInfo.gameInventory} />
            <BackTop />
        </div>
    );
};

const GameInventory = (props) => {
    const gameInventory = props.gameInventory;
    const navigate = useNavigate();
    const themeMode = useSelector((state) => state.theme.IsChange);

    const handleGameItemClick = (e, gameId) => {
        console.log(e);
        navigate(`/game/${gameId}`);
    };
    return (
        <Row
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Col>
                <Row justify={'space-around'} style={{ alignItems: 'center', marginTop: 20 }}>
                    <h1 style={{ color: themeMode ? 'white' : 'black' }}>我的库存</h1>
                </Row>
                <Flex wrap={'wrap'} gap={'large'} flex={'center'} style={{ marginTop: 40 }}>
                    {gameInventory !== null && (
                        <GameList listData={gameInventory} widthData={300} />
                    )}
                </Flex>
            </Col>
        </Row>
    );
};
const UserInfo = ({ userInfo }) => {
    const themeMode = useSelector((state) => state.theme.IsChange);
    const navigate = useNavigate();

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${userInfo.cardBackgroundUrl}`,
                backgroundSize: 'cover',
                zIndex: -1,
            }}
        >
            <Row
                justify={'space-around'}
                style={{
                    alignItems: 'center',
                }}
            >
                <Avatar src={userInfo.avatarUrl} size={120} />
                <Tooltip placement={'bottom'} title={'修改个人信息'}>
                    <Button
                        type='primary'
                        style={{
                            position: 'absolute',
                            right: '5%',
                            fontSize: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            backgroundColor: themeMode ? 'black' : 'white',
                            textAlign: 'center',
                            color: themeMode ? 'white' : 'black',
                        }}
                        icon={<EditOutlined />}
                        onClick={() => {
                            navigate('/user/setting');
                        }}
                        size={'large'}
                    ></Button>
                </Tooltip>
            </Row>
            <Row justify={'space-around'} style={{ alignItems: 'center' }}>
                <text style={{ fontSize: 80, color: themeMode ? 'white' : 'black' }}>
                    {userInfo.username}
                </text>
            </Row>
            <Row justify={'space-around'} style={{ alignItems: 'center' }}>
                <text style={{ fontSize: 22, color: themeMode ? 'white' : 'black' }}>
                    {userInfo.description}
                </text>
            </Row>
            <Divider />
            <Row justify={'space-around'} style={{ alignItems: 'center' }}>
                <Space direction={'vertical'}>
                    <Space.Compact>
                        <Row>
                            <MailTwoTone
                                twoToneColor={themeMode ? 'white' : 'black'}
                                style={{ fontSize: 26 }}
                            />
                            <text
                                style={{
                                    fontSize: 26,
                                    color: themeMode ? 'white' : 'black',
                                    marginInline: 20,
                                }}
                            >
                                {userInfo.email}
                            </text>
                        </Row>
                    </Space.Compact>
                </Space>
            </Row>
            <Divider />
        </div>
    );
};

export { UserInfoScreen };
