import { marked } from 'marked';
import Paragraph from 'antd/es/skeleton/Paragraph';
import React, { useEffect, useState } from 'react';
import { Card, Flex, FloatButton, Image, Layout, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import markDownTemp from '../../../utils/temp/MarkdownTemp';
import axios from '../../../axios';
import gameImage from '../../../static/gameImage1.jpg';
import BackTop from '../../../component/BackTop';
import Tab from 'bootstrap/js/src/tab';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

function NewsContentMD(props) {
    const { id } = useParams();

    // const { content } = useState(props.content);

    const [news, setNews] = useState({});
    const [content, setContent] = useState('');
    const [titles, setTitles] = useState(['']);

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
                    backgroundColor: 'black',
                    color: 'white',
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
                            color: 'white',
                        }}
                    >
                        {news.title}
                    </Title>

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
                                                color: 'white',
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
                                                color: 'white',
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

export { NewsContentMD };
