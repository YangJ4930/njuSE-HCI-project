import { marked } from 'marked';
import Paragraph from 'antd/es/skeleton/Paragraph';
import React, { useEffect, useState } from 'react';
import { Card, Flex, FloatButton, Image, Layout, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import markDownTemp from '../../../utils/temp/MarkdownTemp';
import axios from '../../../axios';
import gameImage from '../../../static/gameImage1.jpg';
import BackTop from '../../../component/BackTop';
import TableOfContent from './TableOfContent';
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
                bordered={true}
                hoverable
                style={{
                    width: '95%',
                    height: '100%',
                    overflow: 'auto',
                    borderRadius: 36,
                    padding: 20,
                    marginInline: 110,
                    maxWidth: '70%',
                }}
            >
                <Layout
                    style={{
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        padding: 20,
                    }}
                >
                    <Title
                        level={4}
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            backgroundColor: 'white',
                            fontSize: 40,
                            marginBottom: 20,
                        }}
                    >
                        {news.title}
                    </Title>

                    <Text
                        style={{
                            justifyContent: 'center',
                            textAlign: 'start',
                            backgroundColor: 'white',
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
                            }}
                        >
                            {content}
                        </Markdown>
                    </Text>
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
