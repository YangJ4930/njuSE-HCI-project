import React from 'react';
import {Avatar, Card, Col} from 'antd';
import {Link} from "react-router-dom";

const {Meta} = Card;
export const GameCard = ({data, widthData}) => {
    return (
        <Col className="gutter-row" span={6}>
            <Card
                style={{
                    width: `${widthData}px`
                }}
                cover={
                    <Link className='nav-link' to={`/game/${data.id}`} style={{}}>
                        <img
                            alt="example"
                            src={data.imgUrl}
                            style={{width: "100%", height: "400px"}}
                        />
                    </Link>

                }
                hoverable={true}
            >
                <Link className='nav-link' to={`/game/${data.id}`} style={{}}>
                    <Meta
                        title={data.name}
                        description={`${data.name}是一款...`}
                    />
                </Link>

            </Card>
        </Col>

    );
}