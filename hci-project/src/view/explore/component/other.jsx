import React, {useEffect, useState} from "react";
import {Flex} from "antd";

const Other = ({data}) =>{

    return(
        <React.Fragment>
            <div style={{width:'100%', aspectRatio:1.8}}>
                <Flex justify='space-between' align='center' style={{width:'100%', height:'100%'}} horizontal>
                    <Flex gap='small' align='center' style={{height:'100%', width:'45%', marginLeft:20}} vertical>
                        <img alt="《PUBG: BATTLEGROUNDS》"
                             src={data[0].cover}
                             style={{objectFit:'cover', width:'100%', aspectRatio:1.6, borderRadius:10}}
                        />
                        <h6>{data[0].name}</h6>
                    </Flex>
                    <Flex gap='small' align='center' style={{height:'100%', width:'45%', marginRight:20}} vertical>
                        <img alt="《Chivalry 2》免费游玩周末"
                             src={data[1].cover}
                             style={{objectFit:'cover', width:'100%', aspectRatio:1.6, borderRadius:10}}
                        />
                        <h6>{data[1].name}</h6>
                    </Flex>
                </Flex>
            </div>
        </React.Fragment>
    )
}

export {Other}