import React, { useState } from 'react';
import { Avatar, Card, Col } from 'antd';
import { Link } from 'react-router-dom';
import '../style/GameCard.css';

const { Meta } = Card;
export const GameCard = ({ data, widthData }) => {
    const [tag, setTag] = useState('');
    React.useEffect(() => {
        if (data.tags) {
            const joinedTags = data.tags.join(' ');
            setTag(joinedTags);
        }
    }, [data.tags]);
    return (
        <div className={'GameCard'}>
            <Col className='gutter-row' span={6}>
                <Card
                    style={{
                        width: `${widthData}px`,
                        backgroundColor: 'rgba(18,18,18,0.85)',
                        borderColor: 'rgba(0,0,0,0.1)',
                    }}
                    // bordered = {false}
                    cover={
                        <Link className='nav-link' to={`/game/${data.id}`} style={{}}>
                            <img
                                alt='example'
                                src={data.imgUrl}
                                style={{ width: '100%', height: '400px' }}
                            />
                        </Link>
                    }
                    hoverable={false}
                >
                    <Link className='nav-link' to={`/game/${data.id}`} style={{}}>
                        <Meta
                            title={<div style={{ color: 'white' }}>{data.name}</div>}
                            description={
                                <div
                                    style={{ color: 'rgb(190,190,190)' }}
                                >{`游戏标签：${tag}`}</div>
                            }
                        />
                    </Link>
                </Card>
            </Col>
        </div>
    );
};
