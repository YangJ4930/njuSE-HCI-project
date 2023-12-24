import React, { useEffect, useState } from 'react';
import { Flex } from 'antd';
import {Link} from "react-router-dom";

const Other = ({ data }) => {
    return (
        <React.Fragment>
            <div style={{ width: '90%', aspectRatio: 3 , marginRight:'5%', marginLeft:'5%'}}>
                <Flex
                    justify='space-between'
                    align='center'
                    style={{ width: '100%', height: '100%' }}
                    horizontal
                >
                    <Flex
                        gap='small'
                        align='center'
                        style={{ height: '100%', width: '45%'}}
                        vertical
                    >
                        <Link to={`/explore/gameDetail/${data[0].id}`}
                            style={{
                                width: '100%',
                                aspectRatio: 1.6,
                                borderRadius: 10,
                            }}>
                            <img
                                alt='0'
                                src={data[0].imgUrl}
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    aspectRatio: 1.6,
                                    borderRadius: 10,
                                }}
                            />
                        </Link>
                        <h6>{data[0].name}</h6>
                    </Flex>
                    <Flex
                        gap='small'
                        align='center'
                        style={{ height: '100%', width: '45%'}}
                        vertical
                    >
                        <Link to={`/explore/gameDetail/${data[0].id}`}
                              style={{
                                  width: '100%',
                                  aspectRatio: 1.6,
                                  borderRadius: 10,
                              }}>
                        <img
                            alt='1'
                            src={data[1].imgUrl}
                            style={{
                                objectFit: 'cover',
                                width: '100%',
                                aspectRatio: 1.6,
                                borderRadius: 10,
                            }}
                        />
                        </Link>
                        <h6>{data[1].name}</h6>
                    </Flex>
                </Flex>
            </div>
        </React.Fragment>
    );
};

export { Other };
