import React, { useEffect, useState } from 'react';
import {Card, Flex, Row, Space} from 'antd';
import {Link} from "react-router-dom";
import Meta from "antd/es/card/Meta";


const GuessLike = ({ data }) => {

    //监听窗口大小，获取card内cover高度，不懂为什么直接设置height为比例不生效
    const [coverHeight, setCoverHeight] = useState(0);

    const resizeUpdate = (e) =>{
        let h = e.target.innerWidth * 0.18;
        setCoverHeight(h)
    }

    useEffect(() =>{
        //页面刚加载完成后获取窗口宽度
        let h = window.innerWidth * 0.18;
        setCoverHeight(h)

        //页面变化时候获取浏览器窗口宽度
        window.addEventListener('resize', resizeUpdate);

        return() =>{
            //组件销毁时移除监听事件
            window.removeEventListener('resize', resizeUpdate);
        }
    }, [])

    return (
        <React.Fragment>
            <Flex justify='space-between' align='start' style={{ marginLeft:'5%', marginRight:'5%', width:'90%', aspectRatio:1.4}} vertical>
                        <Flex
                            justify='flex-start'
                            align='start'
                            style={{ marginTop: '3%', marginBottom: '2%' , height:'5%', width:'100%'}}
                            horizontal
                        >
                            <span style={{fontSize:20}}>猜你喜欢</span>
                        </Flex>
                        <Flex justify='space-between' align='center' style={{ width: '100%', height: '90%' }} horizontal>
                            <Flex justify='space-between' align='center' style={{ width:'45%', height: '100%' }} vertical>
                                <Link to={`/game/${data[0].id}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 10,
                                    }}>
                                    <Card
                                        hoverable
                                        style={{
                                            width: '100%',
                                            height:'100%',
                                            borderRadius:8
                                        }}
                                        cover={
                                            <img alt="example" src={data[0].imgUrl} style={{
                                                objectFit:'cover', objectPosition:"center" ,aspectRatio:0.8, width:'100%'}}/>
                                        }
                                    >
                                        <Meta title={data[0].name} style={{height:'15%'}}/>
                                    </Card>
                                </Link>
                            </Flex>
                            <Flex justify='space-between' align='center' style={{ width:'45%', height: '100%' }} vertical>
                                <Link to={`/game/${data[0].id}`}
                                      style={{
                                          width: '100%',
                                          height: '100%',
                                          borderRadius: 10,
                                      }}>
                                    <Card
                                        hoverable
                                        style={{
                                            width: '100%',
                                            height:'100%',
                                            borderRadius:8
                                        }}
                                        cover={
                                            <img alt="example" src={data[1].imgUrl} style={{
                                                objectFit:'cover', objectPosition:"center" ,aspectRatio:0.8, width:'100%'}}/>
                                        }
                                    >
                                        <Meta title={data[1].name} style={{height:'15%'}}/>
                                    </Card>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
        </React.Fragment>
    );
};

export { GuessLike };
