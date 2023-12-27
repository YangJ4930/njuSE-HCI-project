import React, { useEffect, useState } from 'react';
import { Card, Flex, Tag } from 'antd';
import { Link } from 'react-router-dom';
import Meta from 'antd/es/card/Meta';
import axios from '../../../axios';
import { useSelector } from 'react-redux';
import { GameCard } from '../../search/component/GameCard';

const Other = ({ gameCount }) => {
    const [gameList, setGameList] = useState([]);
    const themeMode = useSelector((state) => state.theme.IsChange);

    useEffect(() => {
        axios
            .get(`/explore/recommendation/${gameCount}`)
            .then((response) => {
                let data = Array.from({ length: response.data.length }).map((_, index) => ({
                    id: response.data[index].id,
                    imgUrl: response.data[index].imgUrl,
                    name: response.data[index].name,
                    tags: response.data[index].tags,
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
                style={{
                    width: '90%',
                    aspectRatio: 3,
                    marginRight: '5%',
                    marginLeft: '5%',
                    backgroundColor: themeMode ? 'rgba(18,18,18,0.85)' : 'white',
                }}
                horizontal
            >
                {gameList.map((item, index) => (
                    <GameItem key={index} data={item} />
                ))}
            </Flex>
        </React.Fragment>
    );
};

const GameItem = ({ data }) => (
    <Card
        hoverable
        style={{
            width: '45%',
            height: '100%',
            borderRadius: 8,
        }}
        cover={
            <Link className='nav-link' to={`/game/${data.id}`} style={{}}>
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
            </Link>
        }
    >
        <Meta
            title={data.name}
            style={{ height: '10%' }}
            description={data.tags.map((item) => {
                return (
                    <Tag style={{ color: 'white', backgroundColor: 'rgb(20,20,20)' }}>{item}</Tag>
                );
            })}
        />
    </Card>
);

export { Other };
