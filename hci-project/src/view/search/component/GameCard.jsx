import React from 'react';
import {Avatar, Card, Col} from 'antd';
const { Meta } = Card;
export const GameCard = ({data, widthData}) =>{
    return(
        <Col className="gutter-row" span={6}>
            <Card
                style={{
                    width: `${widthData}px`
                }}
                cover={
                    <img
                        alt="example"
                        src={data.imgUrl}
                        style={{width: "100%", height: "400px"}}
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