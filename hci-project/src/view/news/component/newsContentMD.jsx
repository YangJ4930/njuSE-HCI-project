import {marked} from 'marked';
import Paragraph from 'antd/es/skeleton/Paragraph';
import React, {useEffect, useState} from 'react';
import {Card, FloatButton, Image, Layout, Typography} from 'antd';
import {useParams} from 'react-router-dom';
import markDownTemp from '../../../utils/temp/MarkdownTemp';
import axios from "../../../axios";
import gameImage from "../../../static/gameImage1.jpg";

const {Header, Footer, Sider, Content} = Layout;
const {Title, Text} = Typography;

function NewsContentMD(props) {
    const {id} = useParams();

    // const { content } = useState(props.content);

    const [news, setNews] = useState({})
    const [content, setContent] = useState("")

    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: true,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/news/content/${id}`).then((response) => {
            console.log(response);
            setNews(response.data);
            console.log(response.data);
            console.log(response.data.content.join('\n'))
            setContent(response.data.content.join('\n'))
        });
    }, []);
    return (
        <Card
            title={news.title}
            bordered={true}
            style={{width: '95%', height: '100%', overflow: 'auto', borderRadius: 36, padding: 20}}
            hoverable
        >
            <Typography>
                <Layout style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignContent: 'center',
                    textAlign: "center"
                }}>
                    <Title
                        level={4}
                        style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            backgroundColor: 'white',
                            fontSize: 40,
                            marginBottom: 20
                        }}>{news.title}</Title>

                    <Image src={news.cover} alt={"news_cover"}
                           style={{
                               width: "75%",
                               height: "auto"
                           }}/>

                    <Text style={{justifyContent: 'center', textAlign: 'start', backgroundColor: 'white', padding: 20}}>

                        <div
                            id='content'
                            className='article-detail'
                            style={{fontSize: 20, backgroundColor: 'white'}}
                            dangerouslySetInnerHTML={{__html: marked(content)}}
                        />

                    </Text>
                </Layout>

            </Typography>
            <FloatButton.BackTop className="backtop" />
        </Card>


    );
}

export {NewsContentMD};
