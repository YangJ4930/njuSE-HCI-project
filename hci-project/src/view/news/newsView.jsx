import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import axios from '../../axios';
import {NewHead} from './component/newHead';
import {NewsListCard} from './component/newsListCard';
import {ListNews} from './component/listNews';
import {FloatButton} from "antd";
import BackTop from "../../component/BackTop";

function NewsView() {
    const [newsList, setNewsList] = React.useState([]);

    React.useEffect(() => {
        axios.get('/news/contents').then((response) => {
            console.log(response);
            setNewsList(response.data);
        });
    }, []);

    let data = Array.from({
        length: newsList.length,
    }).map((_, i) => ({
        id: newsList[i].id,
        title: newsList[i].title,
        avatar: newsList[i].avatar,
        description: newsList[i].description,
        content: newsList[i].content,
        cover: newsList[i].cover,
        likes: newsList[i].likes,
        views: newsList[i].views,
        comments: newsList[i].comments,
    }));
    return (
        <React.Fragment>
            <div style={{paddingLeft: 100, paddingRight: 100}}>
                <NewHead/>
                <div style={{marginBottom: 20}}></div>
                <ListNews data={data}/>
                <BackTop/>
            </div>

        </React.Fragment>
    );
}

export default NewsView;
