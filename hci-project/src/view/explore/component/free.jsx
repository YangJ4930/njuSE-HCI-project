import React, { useEffect, useState } from 'react';
import {Flex, Row, Space} from "antd";

function BUtton() {
    return null;
}

const Free = ({ data }) => {

    return (
        <React.Fragment style={{background: 'rgba(42,42,42)', borderRadius: 10, width:'100%',aspectRatio: 2.0}}>
            <div style={{background: 'rgba(42,42,42)', borderRadius: 10, width:'100%', height:'100%'}}>
                <div style={{marginLeft: 25, marginRight:25}}>
                    <Flex justify='space-between' align="start" style={{margin:25}} vertical>
                        <Space size='small' align='center' style={{marginTop:20, marginBottom:20}}>
                            <h5 style={{color:'white'}}>免费游戏</h5>
                        </Space>
                        <Flex justify='space-between' align='center' style={{height:'100%'}} vertical>
                            <Flex justify='space-between' align='center' style={{width:'100%', height:'87%'}} horizontal>
                                <Flex justify='space-between' align='center' style={{aspectRatio: 1.5,height:'74%'}} vertical>
                                <img
                                    src={data[0].cover}
                                    alt={'nop'}
                                    style={{objectFit: 'cover', width:'100%', aspectRatio:1.78, borderRadius:10}}
                                />
                                    <h6 style={{color:'white'}}>{data[0].name}</h6>
                                </Flex>
                                <div style={{marginLeft:20, marginRight:20}}></div>
                                <Flex justify='space-between' align='center' style={{aspectRatio: 1.5,height:'74%'}} vertical>
                                <img
                                    src={data[1].cover}
                                    alt={'nop'}
                                    style={{objectFit: 'cover', width:'100%', aspectRatio:1.78, borderRadius:10}}
                                />
                                    <h6 style={{color:'white'}}>{data[1].name}</h6>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </div>
        </React.Fragment>
    );
};

export {Free}