import React, { Component } from 'react';
import {Avatar, List, Space, Carousel, Divider} from 'antd';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Link} from 'react-router-dom';
import axios from "axios";
import {th} from "@faker-js/faker";
import {NewHead} from "./component/newHead";
import {NewsListCard} from "./component/newsListCard";

  const ListNews = ({data}) => (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: (page) => {
                console.log(page);
            },
            pageSize: 3,
        }}
        dataSource={data}
        footer={
            <div>
            <b>ant design</b> footer part
            </div>
        }
        renderItem={(item) => (
            <List.Item
            key={item.title}
            extra={
                <img
                width={240}
                alt="logo"
                src={item.img}
                />
            }
        >
            <List.Item.Meta
                title={<Link className="nav-link" to={item.href}><h5>{item.title}</h5></Link>}
            />
                <div style={{fontSize: 18, fontStyle: "italic", color: "rgb(110,110,110, 0.7)"}}>{item.description}</div>
            </List.Item>
        )}
    />
    );


function NewsView(){
        const [newsList, setNewsList] = React.useState([]);

        React.useEffect(()=>{
            axios.get("http://localhost:8080/news/content").then((response) => {
                setNewsList(response.data);
                console.log(response.data)
            })
        },[])

        let data = Array.from({
        length: newsList.length,
    }).map((_, i) => ({
        // ?chapter=${web.id}
        href: `/news/content/?document=${newsList[i].id}`,
        title: newsList[i].title,
        img: newsList[i].img,
        description:
            newsList[i].description,
        content:
            newsList[i].content,
    }));
        return (
            <React.Fragment>
                <NewHead style={{marginBottom: 200}}/>
                <ListNews data={data}/>
            </React.Fragment>

            
        );
}
 
export default NewsView;