import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {faker} from "@faker-js/faker";
import {Avatar, Badge, Card, Col, Divider, Row, Space, Tag, Typography, Flex} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import Title from "antd/es/skeleton/Title";
import Meta from "antd/es/card/Meta";

const {Text} = Typography;

function fakeUserData() {
    let userData = {
        username: faker.person.firstName(),
        level: faker.number.int({min: 1, max: 100}),
        avatar: faker.image.avatar(),
        privateFavorites: ["Favorite Game 1", "Favorite Game 2"],
        publicFavorites: ["Favorite Game 3", "Favorite Game 4"],
        followers: 200,
        following: 150,
        gameInventory: [],
        gameRecords: [],
    };

    userData.gameInventory = Array.from(
        {length: faker.number.int({min: 10, max: 10})},
        () => ({
            id: faker.number.int({min: 1, max: 1000}),
            name: faker.commerce.productName(),
            image: faker.image.dataUri({width: 75, height: 75}),
        })
    );
    userData.gameRecords = Array.from(
        {length: faker.number.int({min: 10, max: 10})},
        () => ({
            game: faker.commerce.productName(),
            score: faker.number.int({min: 1, max: 1000}),
        })
    );
    return userData;
}

function UserView(props) {
    const userData = fakeUserData();

    return (

        <Col>
            <Row gutter={[16, 16]} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <UserAvatar level={userData.level} username={userData.username}/>
            </Row>

            <Divider/>

            <Row gutter={[16, 16]}>
                <Favorites privateFavorites={userData.privateFavorites} publicFavorites={userData.publicFavorites}/>
            </Row>

            <Divider/>

            <Row gutter={[16, 16]}>
                <GameInventory gameInventory={userData.gameInventory}/>
            </Row>
        </Col>
    );
}

function GameInventory(props) {
    const gameInventory = props.gameInventory;
    return (
        <Col>
            <h1>游戏库存</h1>
            <Flex wrap={"wrap"} gap={"small"}>
                {gameInventory.map((game) => (
                    <Col
                        key={game.id}
                    >
                        <Card
                            hoverable={true}
                            cover={<img alt={game.name} src={game.image}/>}
                        >
                            <Meta title={game.name}/>
                        </Card>
                    </Col>
                ))}
            </Flex>
        </Col>
    );
}

function UserAvatar(props) {
    const level = props.level;
    const username = props.username;
    return (
        <Col>
            <Card
                style={{
                    width: "400",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/>}
                    title={username}
                    description="This is the description"
                />
                <Tag color={"default"}>等级：{level}</Tag>
            </Card>
        </Col>
    );
}

function Favorites(props) {
    const [activeTab, setActiveTab] = useState("Tab1"); // ["Tab1", "Tab2"
    const onTabChange = (key) => {
        setActiveTab(key);
    }

    const tabList = [
        {
            key: "Tab1",
            tab: "私有",
        },
        {
            key: "Tab2",
            tab: "公开",
        }
    ];

    const privateFavorites = props.privateFavorites;
    const publicFavorites = props.publicFavorites;
    return (
        <Col span={12}>
            <h1>收藏夹</h1>

            <Card
                style={{width: "100%"}}
                tabList={tabList}
                activeTabKey={activeTab}
                onTabChange={onTabChange}
            >
                {activeTab === "Tab1" && (<div>
                    {privateFavorites.map((game) => (
                        <Tag key={game} color="blue">
                            {game}
                        </Tag>
                    ))}
                </div>)}
                {activeTab === "Tab2" && (<div>
                    {publicFavorites.map((game) => (
                        <Tag key={game} color="green">
                            {game}
                        </Tag>
                    ))}
                </div>)}
            </Card>

        </Col>
    )
}

export default UserView;
