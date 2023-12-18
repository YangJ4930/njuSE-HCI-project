import { Col, Image, Layout, Row } from 'antd';
import React, { Component } from 'react';
import logo from '../../../static/Store.svg';
import { Link, useNavigate } from 'react-router-dom';

const { Header, Footer, Sider, Content } = Layout;
export const NewHead = () => {
    const newsId = 1;
    return (
        <React.Fragment>
            <Header style={{ background: '#001529' }}>
                <Row justify='space-between' align='middle' style={{ height: '100%' }}>
                    <span style={{ fontSize: 18, lineHeight: 1.4, color: 'white' }}>最新新闻</span>
                </Row>
            </Header>

            <Row>
                <Col span={12}>
                    <NewsHeadCard
                        imgSrc={
                            'https://cdn2.unrealengine.com/valorant-prime-skin-bundle-3840x2160-da9bcceb2813.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=854'
                        }
                        title={'《无畏契约》经济优化指南'}
                        shortContent={
                            '在你新开一局《无畏契约》之前，请先学习购买各种内容的准则与时机.'
                        }
                        goLink={`/news/content/${newsId}`}
                    ></NewsHeadCard>
                </Col>
                <Col span={12}>
                    <NewsHeadCard
                        imgSrc={
                            'https://cdn2.unrealengine.com/breachway-battle-win-3840x2160-62b4a56ee601.png?h=480&quality=medium&resize=1&w=854'
                        }
                        title={'《Breachway》结合了高概念科幻风和由策略驱动的卡牌游戏元素'}
                        shortContent={
                            '我们与《Breachway》首席设计师 Victor Rubinstein 坐下来聊了聊该游戏与《魔法门 VII》背后的惊人联系，以及平衡设计卡牌游戏的挑战性。'
                        }
                        goLink={`/news/content/${newsId}`}
                    ></NewsHeadCard>
                </Col>
            </Row>
        </React.Fragment>
    );
};

const NewsHeadCard = ({ imgSrc, title, shortContent, goLink }) => {
    return (
        <div style={{ margin: 10 }}>
            <img
                src={imgSrc}
                alt=''
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Link className='nav-link' to={goLink}>
                <span
                    style={{
                        color: 'black',
                        fontSize: 20,
                        fontWeight: 'bold',
                        letterSpacing: 0.2,
                        marginTop: 120,
                    }}
                >
                    {title}
                </span>
            </Link>
            <div style={{ margin: 5 }}>
                <span style={{ color: 'rgba(130,125,125)', fontSize: 16, fontWeight: 'normal' }}>
                    {shortContent}
                </span>
            </div>
        </div>
    );
};
