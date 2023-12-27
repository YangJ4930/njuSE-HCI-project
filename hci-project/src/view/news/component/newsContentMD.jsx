import { marked } from 'marked';
import Paragraph from 'antd/es/skeleton/Paragraph';
import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Card,
    Col,
    Divider,
    Flex,
    FloatButton,
    Image,
    Layout,
    Row,
    Typography,
} from 'antd';
import { useParams } from 'react-router-dom';
import axios from '../../../axios';
import gameImage from '../../../static/gameImage1.jpg';
import BackTop from '../../../component/BackTop';
import Tab from 'bootstrap/js/src/tab';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSelector } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

function NewsContentMD(props) {
    const { id } = useParams();

    // const { content } = useState(props.content);

    const [news, setNews] = useState({});
    const [content, setContent] = useState('');
    const [titles, setTitles] = useState(['']);
    const themeMode = useSelector((state) => state.theme.IsChange);

    useEffect(() => {
        axios.get(`/news/content/${id}`).then((response) => {
            setNews(response.data);
            setContent(response.data.content.join(''));
            setTitles(extractTitles(response.data.content));
            console.log(extractTitles(response.data.content));
        });
    }, []);

    return (
        <Flex justify={'space-between'} style={{ justifyContent: 'center' }}>
            <Card
                bordered={false}
                hoverable
                style={{
                    width: '95%',
                    height: '100%',
                    overflow: 'auto',
                    borderRadius: 36,
                    padding: 20,
                    marginInline: 110,
                    maxWidth: '70%',
                    backgroundColor: themeMode ? 'rgba(18,18,18,0.85)' : 'white',
                    color: themeMode ? 'white' : 'black',
                }}
            >
                <Layout
                    style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        padding: 20,
                        backgroundColor: 'transparent',
                    }}
                >
                    <Title
                        level={4}
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: 40,
                            marginBottom: 20,
                            color: themeMode ? 'white' : 'black',
                        }}
                    >
                        {news.title}
                    </Title>

                    <Author
                        url={
                            'https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        }
                    />

                    <Divider />
                    <div
                        style={{
                            justifyContent: 'center',
                            textAlign: 'start',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                img(props) {
                                    return (
                                        <img
                                            {...props}
                                            style={{
                                                width: '95%',
                                                justifyContent: 'center',
                                                alignContent: 'center',
                                                alignSelf: 'center',
                                                display: 'flex',
                                            }}
                                        />
                                    );
                                },
                                p(props) {
                                    return <p {...props} style={{ fontSize: 20 }} />;
                                },
                                li(props) {
                                    return <li {...props} style={{ fontSize: 20 }} />;
                                },
                                h1(props) {
                                    return (
                                        <h1
                                            {...props}
                                            style={{
                                                color: themeMode ? 'white' : 'black',
                                                marginTop: 40,
                                                marginBottom: 30,
                                            }}
                                        />
                                    );
                                },
                                h2(props) {
                                    return (
                                        <h2
                                            {...props}
                                            style={{
                                                color: themeMode ? 'white' : 'black',
                                                marginTop: 30,
                                                marginBottom: 30,
                                            }}
                                        />
                                    );
                                },
                            }}
                        >
                            {content}
                        </Markdown>
                    </div>
                </Layout>
            </Card>
            <BackTop />
        </Flex>
    );
}

const extractTitles = (lines) => {
    return lines.filter((line) => line.startsWith('#') || line.startsWith('##'));
};

const Author = (props) => {
    const url = props.url;
    return (
        <Row
            gutter={2}
            style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}
        >
            <Row
                span={4}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    marginInline: 2,
                }}
            >
                <Avatar src={<img src={url} alt='avatar' />} style={{ marginRight: 10 }} />
                <text style={{ fontSize: 16 }}>Epic Games</text>
            </Row>
            <Divider type={'vertical'} style={{ backgroundColor: 'white' }} />
            <Col span={6} style={{ fontSize: 16 }}>
                更新: DEC 27, 2023 10:09 AM
            </Col>
            <Divider type={'vertical'} style={{ backgroundColor: 'white' }} />
            <Col span={6} style={{ fontSize: 16 }}>
                创建: DEC 18, 2023 11:49 PM
            </Col>
        </Row>
    );
};
export { NewsContentMD };
