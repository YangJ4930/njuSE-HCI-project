import React, {useEffect, useState} from "react";
import {Card, Typography} from "antd";
import {useParams} from "react-router-dom";
import markDownTemp from "../../../utils/temp/MarkdownTemp";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkFrontmatter from 'remark-frontmatter'

function NewsContentMD(props) {
    const {id} = useParams();

    const {content} = useState(props.content);


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
            <Markdown
                remarkPlugins={[remarkGfm, remarkMath,remarkFrontmatter]}
            >
                {markDownTemp}
            </Markdown>
        </Card>

    );
}

export {
    NewsContentMD
}