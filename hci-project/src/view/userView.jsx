import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {faker} from '@faker-js/faker';
import {Avatar, Card, Col, Row} from "antd";
import {UserOutlined} from "@ant-design/icons";
import GamesRepository from "../component/gamesRepository";


function UserView(props) {
    let username = faker.person.firstName() + " " + faker.person.lastName();
    let level = faker.number.int({min: 1, max: 100});

    return (
        <div>
            <Col>
                <Row>
                    <Card bordered={false} style={{width: 300}}>
                        <Avatar size={"large"} icon={<UserOutlined/>}/>
                        <p>{username}</p>
                    </Card>
                    <Card>
                        <p>等级：{level}</p>
                    </Card>
                </Row>
                <Row>
                    <GamesRepository/>
                </Row>
            </Col>
        </div>
    )
}

export default UserView;