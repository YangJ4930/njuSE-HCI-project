import { PageContainer, ProCard,  } from "@ant-design/pro-components"
import { ProList } from '@ant-design/pro-components';
import { Avatar,  Divider, List, Skeleton } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import React from "react";
const  CommunityView=function CommunityView() {
 
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    
    const ite = ['Item 1', 'Item 2', 'Item 3','Item 4','Item 5','Item 6','Item 7','Item 8','Item 9']
   // const[items ,setItems]=useState(ite)
   // setItems(ite)
   
      const loadMoreData = () => {
        if (loading) {
          return;
        }
        setLoading(true);
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
          .then((res) => res.json())
          .then((body) => {
            setData([...data, ...body.results]);
            setLoading(false);
          })
          .catch((endMessage) => {
            setLoading(false);
          });
      };
      useEffect(() => {
        loadMoreData();
      }, []);
    return <>
    <div>
    <PageContainer>
    <ProCard title="我的喜好" ghost gutter={8} collapsible>
    <ProList
     showActions="hover"
     rowSelection={{}}
     grid={{ gutter: 16, column: 4 }}
     dataSource={ite}
     renderItem={(item)=>{
        return  <List.Item >
            <ProCard  size="small" layout="center" >
                <button>x</button>
                <div style={{
                    alignContent:"space-evenly"
                }}>{item}</div>
            </ProCard>

        </List.Item>
    }}
    >

    </ProList>
    </ProCard>
   
    <div
      id="scrollableDiv"
      style={{
        height:"fixed",
        overflow: 'auto',
      }}
    >
        <br></br>
        <InfiniteScroll 
        infinite-scroll-disabled={false}
         dataLength={data.length}
         next={loadMoreData}
         hasMore={data.length < 50}
         loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
         endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
         scrollableTarget="scrollableDiv"
         >
        <ProList 
            size="small"
            itemLayout="vertical"
            rowKey="id"
            dataSource={data}
            // loading={true}
            renderItem={(item)=>{
                return  <List.Item >
                    <List.Item.Meta
                     avatar={<Avatar src={item.picture.large} />}
                     title={<a href="https://ant.design">{item.name.last}</a>}
                     description={item.email}
                    />

                </List.Item>
            }}
           
        >
         </ProList>    
         </InfiniteScroll>  
         </div>
    </PageContainer>
    </div>
    </>
}
export default CommunityView