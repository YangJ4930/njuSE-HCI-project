import {marked} from "marked";
import Paragraph from "antd/es/skeleton/Paragraph";
import React, {useEffect, useState} from "react";
import {Card, Typography} from "antd";
import {useParams} from "react-router-dom";
import markDownTemp from "../../../utils/MarkdownTemp";

function NewsContentMD(props) {
    const {id} = useParams();

    const {content} = useState(props.content);

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
        console.log(id);
    }, []);
    return (
        <Card
            title="机器学习"
            bordered={true}
            style={{width: "95%", height: "100%", overflow: "auto"}}
            // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <div
                id="content"
                className="article-detail"
                dangerouslySetInnerHTML={{__html: markDownTemp}}
            />
        </Card>

    );
}

export {
    NewsContentMD
}