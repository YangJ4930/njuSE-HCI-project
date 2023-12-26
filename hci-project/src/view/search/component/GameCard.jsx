import React, {useState} from 'react';
import {Avatar, Card, Col, Tag} from 'antd';
import {Link} from "react-router-dom";

const {Meta} = Card;
export const GameCard = ({data, widthData}) => {
    const [tag, setTag] = useState("")
    React.useEffect(() => {
        if (data.tags) {
            const joinedTags = data.tags.join(" ");
            setTag(joinedTags);
        }
    }, [data.tags]);
    return (
        <Col className="gutter-row" span={6}>
            <Card
                style={{
                    width: `${widthData}px`,
                    backgroundColor: "rgba(18,18,18,0.85)",
                    borderColor: "rgba(0,0,0,0.1)"
                }}
                // bordered = {false}
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
                        title={<div style={{color: "white"}}>{data.name}</div>}
                        description={<Tag style={{color: "white", backgroundColor: "rgb(20,20,20)"}}>{`${tag}`}</Tag>}

                    />
                </Link>

            </Card>
        </Col>

    );
}