import React, { useEffect, useState } from 'react';
import { Flex, Row, Space } from 'antd';
import {Link} from "react-router-dom";


const GuessLike = ({ data }) => {

    return (
        <React.Fragment
        >
            <div
                style={{
                    background: 'rgba(42,42,42)',
                    borderRadius: 10,
                    width: '90%',
                    marginLeft:'5%',
                    marginRight:'5%',
                    aspectRatio:2.8
                }}
            >
                <div style={{ marginLeft: 25, marginRight: 25 }}>
                    <Flex justify='space-between' align='start' style={{ margin: 25 }} vertical>
                        <Flex
                            justify='flex-start'
                            align='start'
                            style={{ marginTop: 25, marginBottom: 20 , height:'10%'}}
                            horizontal
                        >
                            <h5 style={{ color: 'white' }}>猜你喜欢</h5>
                        </Flex>
                        <Flex justify='space-between' align='center' style={{ width: '100%', height: '87%' }} horizontal>
                            <Flex justify='space-between' align='center' style={{ width:'45%', height: '100%' }} vertical>
                                <Link to={`/explore/gameDetail/${data[0].id}`}
                                    style={{
                                        width: '100%',
                                        aspectRatio: 1.8,
                                        borderRadius: 10,
                                        marginBottom: 10
                                    }}>
                                    <img
                                        src={data[0].imgUrl}
                                        alt={'nop'}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            aspectRatio: 1.8,
                                            borderRadius: 10,
                                        }}
                                    />
                                </Link>
                                <h5 style={{ color: 'white' }}>{data[0].name}</h5>
                            </Flex>
                            <Flex justify='space-between' align='center' style={{ width:'45%', height: '100%' }} vertical>
                                <Link to={`/explore/gameDetail/${data[0].id}`}
                                      style={{
                                          width: '100%',
                                          aspectRatio: 1.8,
                                          borderRadius: 10,
                                          marginBottom: 10
                                      }}>
                                    <img
                                        src={data[1].imgUrl}
                                        alt={'nop'}
                                        style={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            aspectRatio: 1.8,
                                            borderRadius: 10,
                                        }}
                                />
                                </Link>
                                <h5 style={{ color: 'white' }}>{data[1].name}</h5>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </div>
        </React.Fragment>
    );
};

export { GuessLike };
