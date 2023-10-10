import React, {useState} from 'react'
import {Layout, Menu, Input} from 'antd';
import {Link} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import HomeView from '../view/homeView';
import NewsView from '../view/newsView';
import CommunityView from '../view/communityView';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"


const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;


const {Search} = Input;


let SearchLog = () => {
    console.log("hello")
}

function BasicLayout(props) {
    const [collapsed, setCollapsed] = useState(props.collapsed);

    return (
        <Layout>
            <Sider width={256} style={{minHeight: '100vh', color: 'white'}}>
                <div style={{
                    height: '32px', background: 'rgba(255,255,255,.2)',
                    margin: '16px'
                }}/>
                <Menu
                    defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline"
                    theme="dark" inlineCollapsed={collapsed}
                >
                    <Menu.Item key="1">
                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link className="nav-link" to="/news">News</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link className="nav-link" to="/community">社区</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span>
                            <span>Navigation One</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>

            <Layout>
                <Header style={{
                    background: '#fff', padding:
                        0
                }}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        style={{
                            width: 300,
                            float: "right",
                        }}
                        // onClick={this.state.SearchLog}
                        onSearch={SearchLog}
                    />

                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{
                        padding: 24, background: '#fff', minHeight: 360
                    }}>
                        <Routes>
                            <Route path="/" element={<HomeView></HomeView>}></Route>
                            <Route></Route>
                            <Route path="/news" element={<NewsView></NewsView>}></Route>
                            <Route path="/community" element={<CommunityView></CommunityView>}></Route>
                            <Route></Route>
                        </Routes>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>无敌的yangj</Footer>
            </Layout>
        </Layout>
    );
}

export default BasicLayout;
