
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Button, Divider, List, Skeleton,Input } from 'antd';
const HomeView=function HomeView() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [comment,setcomment]=useState("");
  const [inputstate ,setInputstate]=useState()
  const [placeholderstate ,setPlaceholderstate ]=useState()
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('http://localhost:8080/findAll')
      .then((res) => res.json()  )
      .then((body) => {
        console.log(body)
        setData([...body.data]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <>
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 1}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                title={<div>{item.comment}</div>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
    <Input status={inputstate} placeholder={placeholderstate} onChange={(e)=>{
        setcomment(e.target.value);
        setInputstate("")
        setPlaceholderstate("")
        

    }} value={comment}/>
    <Button type="primary" onClick={()=>{
        console.log(comment)
        if(comment===""){
            setInputstate("warning")
            setPlaceholderstate("不能为空")
        }else{
            fetch('http://localhost:8080/add',{
                method:'POST',
                body:JSON.stringify({"comment":comment}),
                headers: new Headers({
                    'Content-Type': 'application/json'
                  })
            }).then((response)=>{
                if(response.ok){
                    console.log(data)
                    loadMoreData()
                    setcomment("")
                }
            })
        }
       

    }}>Submit</Button>
    </>
  );
};

export default HomeView;