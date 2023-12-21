import React from 'react';
import {Avatar, Card, Col} from 'antd';
const { Meta } = Card;
export const GameCard = ({data}) => {
    return(
        <Col className="gutter-row" span={6}>
            <Card
                style={{
                    width: 350,
                }}
                cover={
                    <img
                        alt="example"
                        src={data.imgUrl}
                    />
                }
            >
                <Meta
                    title={data.name}
                    description={`${data.name}是一款...`}
                />
            </Card>
        </Col>

    );
}