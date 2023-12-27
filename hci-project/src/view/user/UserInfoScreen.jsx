import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { fetchUserSuccess } from '../../redux/user/userSlice';
import { Avatar, Card, Col, Divider, Flex, FloatButton, Row, Tag, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import { EditOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';
import { logout } from '../../redux/user/authSlice';
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
        <Row>
            <Col span={3}>
                <UserAvatar
                    level={userInfo.level}
                    username={userInfo.username}
                    avatarUrl={userInfo.avatarUrl}
                    cardBackgroundUrl={userInfo.cardBackgroundUrl}
                    description={userInfo.description}
                />
            </Col>

            <Divider type={'vertical'} />

            <Col
                span={20}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <GameInventory gameInventory={userInfo.gameInventory} />
            </Col>

            <BackTop />
        </Row>
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
        <Col>
            <h1 style={{ color: themeMode ? 'white' : 'black' }}>游戏库存</h1>
            <Flex wrap={'wrap'} gap={'large'} flex={'center'} style={{ marginTop: 20 }}>
                {gameInventory !== null && <GameList listData={gameInventory} widthData={300} />}
            </Flex>
        </Col>
    );
};

const UserAvatar = (props) => {
    const level = props.level;
    const username = props.username;
    const avatarUrl = props.avatarUrl;
    const cardBackgroundUrl = props.cardBackgroundUrl;
    const description = props.description;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogoutClick = (e) => {
        console.log(e);
        dispatch(logout());
        axios
            .post('/users/logout')
            .then((response) => {
                console.log(response);
                dispatch(logout());
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const handleEditClick = (e) => {
        console.log(e);
        navigate('/user/setting');
    };

    return (
        <Col>
            <Card
                style={{
                    width: '400',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                cover={<img alt='example' src={cardBackgroundUrl} />}
                actions={[
                    <Tooltip key='setting' title={'修改个人信息'}>
                        <EditOutlined onClick={(e) => handleEditClick(e)} />
                    </Tooltip>,
                    <Tooltip key={'logout'} title={'退出登录'}>
                        <LogoutOutlined onClick={(e) => handleLogoutClick(e)} />
                    </Tooltip>,
                ]}
            >
                <Meta
                    avatar={<Avatar src={avatarUrl} />}
                    title={username}
                    description={description}
                />
            </Card>
        </Col>
    );
};

const Favorites = (props) => {
    const [activeTab, setActiveTab] = useState('Tab1'); // ["Tab1", "Tab2"
    const onTabChange = (key) => {
        setActiveTab(key);
    };

    const tabList = [
        {
            key: 'Tab1',
            tab: '私有',
        },
        {
            key: 'Tab2',
            tab: '公开',
        },
    ];

    const privateFavorites = props.privateFavorites;
    const publicFavorites = props.publicFavorites;
    return (
        <Col span={12}>
            <h1>收藏夹</h1>

            <Card
                style={{ width: '100%' }}
                tabList={tabList}
                activeTabKey={activeTab}
                onTabChange={onTabChange}
            >
                {activeTab === 'Tab1' && (
                    <div>
                        {privateFavorites !== null &&
                            privateFavorites.map((game) => (
                                <Tag key={game} color='blue'>
                                    {game}
                                </Tag>
                            ))}
                    </div>
                )}
                {activeTab === 'Tab2' && (
                    <div>
                        {publicFavorites !== null &&
                            publicFavorites.map((game) => (
                                <Tag key={game} color='green'>
                                    {game}
                                </Tag>
                            ))}
                    </div>
                )}
            </Card>
        </Col>
    );
};

const fakeUserData = () => {
    let userData = {
        username: faker.person.firstName(),
        level: faker.number.int({ min: 1, max: 100 }),
        avatar: faker.image.avatar(),
        privateFavorites: ['Favorite Game 1', 'Favorite Game 2'],
        publicFavorites: ['Favorite Game 3', 'Favorite Game 4'],
        followers: 200,
        following: 150,
        gameInventory: [],
        gameRecords: [],
    };

    userData.gameInventory = Array.from({ length: faker.number.int({ min: 10, max: 10 }) }, () => ({
        id: faker.number.int({ min: 1, max: 1000 }),
        name: faker.commerce.productName(),
        image: faker.image.dataUri({ width: 75, height: 75 }),
    }));
    userData.gameRecords = Array.from({ length: faker.number.int({ min: 10, max: 10 }) }, () => ({
        game: faker.commerce.productName(),
        score: faker.number.int({ min: 1, max: 1000 }),
    }));
    return userData;
};

export { UserInfoScreen };
