import React, { useState } from 'react'
import { Avatar, Divider, Layout, Menu,Card } from 'antd';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import HomeView from '../view/homeView';
import NewsView from '../view/newsView';
import CommunityView from '../view//community/communityView';
import PostComponent from '../view/community/component/postComponent';
import Communitydetail from '../view/community/component/communitydetail';
import {
    HomeOutlined,
    HeatMapOutlined,
    CommentOutlined
  } from '@ant-design/icons';
import './Menu.css'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;


class BasicLayout extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    render(){
        return (
            <Layout >
                <Sider  theme='light' collapsible>
                    <Card bordered={false} hoverable className='av' 
                    layout="center"  
                    direction="column" >
                        <Card.Meta
                            avatar={<Avatar size='large' src={<img width="40" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"></img>}></Avatar>}
                            description={
                                <>
                                <div className='v'>杨京</div>
                                <div className='vi' >
                                <p>   
                                    <span className='qai'>杨京，我爱上人机交互的课</span>
                                </p>
                                </div>
                                </>
                        }
                        >  
                        </Card.Meta>
                        <p></p>
                    </Card>
                    <Menu  className='a'
                        defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1" className='menuItem' icon={<HomeOutlined/>}>
                        <Link    className="nav-link" aria-current="page" to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" className='menuItem' icon={<HeatMapOutlined />}>
                        <Link    className="nav-link"  to="/news">News</Link>
                        </Menu.Item>
                        <Menu.Item key="3" className='menuItem' icon={<CommentOutlined />}>
                        <Link    className="nav-link"  to="/community">社区</Link>
                        </Menu.Item>
                        
                    </Menu>
                    
                </Sider >

                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding:
                            0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: '100vh'
                        }}>
                            <Routes>
                                <Route path = "/" element = {<HomeView></HomeView>}></Route>
                                <Route></Route>
                                <Route path = "/news" element = {<NewsView></NewsView>}></Route>
                                <Route path="/community"element = {<CommunityView></CommunityView>}></Route>
                                <Route path="/component/postComponent"element = {<PostComponent></PostComponent>}></Route>
                                <Route path="/component/Communitydetail"element = {<Communitydetail></Communitydetail>}></Route>
                                <Route></Route>
                            </Routes>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>无敌的yangj</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default BasicLayout;
