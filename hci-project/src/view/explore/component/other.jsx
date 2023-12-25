import React, {useEffect, useState} from 'react';
import {Card, Flex} from 'antd';
import {Link} from "react-router-dom";
import Meta from "antd/es/card/Meta";

const Other = ({data}) => {
    return (
        <React.Fragment>
            <Flex
                justify='space-between'
                align='center'
                style={{width: '90%', aspectRatio: 3, marginRight: '5%', marginLeft: '5%'}}
                horizontal
            >
                <Link to={`/game/${data[0].id}`} style={{
                    width: '45%',
                    height: '100%',
                }}>
                    <Card
                        hoverable
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 8
                        }}
                        cover={
                            <img alt="example" src={data[0].imgUrl} style={{
                                objectFit: 'cover', objectPosition: "center", aspectRatio: 1.75, width: '100%'
                            }}/>
                        }
                    >
                        <Meta title={data[0].name} style={{height: '10%'}}/>
                    </Card>
                </Link>
                <Link to={`/game/${data[1].id}`} style={{
                    width: '45%',
                    height: '100%',
                }}>
                    <Card
                        hoverable
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 8
                        }}
                        cover={
                            <img alt="example" src={data[1].imgUrl} style={{
                                objectFit: 'cover', objectPosition: "center", aspectRatio: 1.75, width: '100%'
                            }}/>
                        }
                    >
                        <Meta title={data[1].name} style={{height: '10%'}}/>
                    </Card>
                </Link>
            </Flex>
        </React.Fragment>
    );
};

export {Other};
