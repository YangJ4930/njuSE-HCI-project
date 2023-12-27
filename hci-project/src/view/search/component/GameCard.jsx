import React, { useState } from 'react';
import { Avatar, Card, Col, Tag } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Meta } = Card;

const tagStyleLight = {
    color: 'white',
    backgroundColor: 'rgb(20,20,20)'
}

const  tagStyleDark = {
    color: 'black',
    backgroundColor: 'white'
}
export const GameCard = ({ data, widthData }) => {
    const [tag, setTag] = useState([]);
    const themeMode = useSelector((state) => state.theme.IsChange);
    React.useEffect(() => {
        setTag(data.tags);
    }, [data.tags]);
    return (
        <Col className='gutter-row' span={6}>
            <Card
                style={{
                    width: `${widthData}px`,
                    backgroundColor: themeMode ? 'rgba(18,18,18,0.85)' : 'white',
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
                hoverable={true}
            >
                <Link className='nav-link' to={`/game/${data.id}`} style={{}}>
                    <Meta
                        title={
                            <div style={{ color: themeMode ? 'white' : 'black' }}>{data.name}</div>
                        }
                        description={tag.map((item) => {
                            return (
                                <Tag style={()=>{
                                    if(themeMode) {
                                        return (tagStyleDark)
                                    }
                                    else {
                                        return (tagStyleLight)
                                    }
                                }}>
                                    {item}
                                </Tag>
                            );
                        })}
                    />
                </Link>
            </Card>
        </Col>
    );
};
