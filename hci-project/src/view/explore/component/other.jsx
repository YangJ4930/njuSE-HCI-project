import React, { useEffect, useState } from 'react';
import { Card, Flex } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import axios from '../../../axios';

const Other = ({ gameCount }) => {
    const [gameList, setGameList] = useState([]);

    useEffect(() => {
        axios
            .get(`/explore/recommendation/${gameCount}`)
            .then((response) => {
                let data = Array.from({ length: response.data.length }).map((_, index) => ({
                    id: response.data[index].id,
                    imgUrl: response.data[index].imgUrl,
                    name: response.data[index].name,
                }));
                setGameList(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <React.Fragment>
            <Flex
                justify='space-between'
                align='center'
                style={{ width: '90%', aspectRatio: 3, marginRight: '5%', marginLeft: '5%' }}
                horizontal
            >
                {gameList.map((item, index) => (
                    <GameItem data={item} key={index} />
                ))}
            </Flex>
        </React.Fragment>
    );
};

const GameItem = ({ data }) => (
    <Link
        to={`/game/${data.id}`}
        style={{
            width: '45%',
            height: '100%',
        }}
    >
        <Card
            hoverable
            style={{
                width: '100%',
                height: '100%',
                borderRadius: 8,
            }}
            cover={
                <img
                    alt='example'
                    src={data.imgUrl}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                        aspectRatio: 1.75,
                        width: '100%',
                    }}
                />
            }
        >
            <Meta title={data.name} style={{ height: '10%' }} />
        </Card>
    </Link>
);

export { Other };
