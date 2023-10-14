import { PageContainer, ProCard,  } from "@ant-design/pro-components"
import { ProList } from '@ant-design/pro-components';
import { Avatar,  Divider, List, Skeleton } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import { Carousel } from 'antd';
import React from "react";

const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const  ExploreView = function ExploreView() {

    return <>
      <div>
          <h1>精选和推荐</h1>
          <Recommandation />
      </div>
    </>
}


function Recommandation(){
    return(
      <React.Fragment>
          <Carousel autoplay>
              <div>
                  <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                  <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                  <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                  <h3 style={contentStyle}>4</h3>
              </div>
          </Carousel>
      </React.Fragment>
    );
}
export default ExploreView
