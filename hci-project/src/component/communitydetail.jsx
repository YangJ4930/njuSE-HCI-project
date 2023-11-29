import {
  Avatar,
  Divider,
  List,
  Skeleton,
  Space,
  Card,
  Carousel,
  Image,
  Flex,
  Col,
  Row,
} from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { UserOutlined, MessageOutlined, LikeOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import { ProList } from "@ant-design/pro-components";
import InfiniteScroll from "react-infinite-scroll-component";
const Communitydetail = function Comunitydetail() {
  const { Meta } = Card;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const { communityId } = useParams();
  console.log(communityId);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
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
  return (
    <PageContainer
      title="震惊！Steam直接把我游戏移除了，还不给我退钱"
      style={{}}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          autoplay={true}
          style={{
            width: 400,
          }}
        >
          <Image
           height={400}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />

          <Image
            height={400}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Image.PreviewGroup
            items={[
              "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
              "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
              "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
            ]}
          >
            <Image
              height={400}
              src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            />
          </Image.PreviewGroup>
        </Carousel>
      </div>
      <Divider plain></Divider>
      <Space>
        <Card bordered={false}>
          <Meta
            avatar={
              <Avatar
                size={64}
                src="https://xsgames.co/randomusers/avatar.php?g=pixel"
              />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Space>

      <InfiniteScroll
        infinite-scroll-disabled={false}
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <Space
          style={{
            justifyContent: "space-around",
            marginTop: 30,
          }}
        >
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            评论
          </div>
          <MessageOutlined></MessageOutlined>
        </Space>
        <Divider plain></Divider>
        <ProList
          size="small"
          itemLayout="vertical"
          rowKey="id"
          dataSource={data}
          //loading={true}
          renderItem={(item) => {
            return (
              <List.Item
                extra={
                  <Space>
                    <LikeOutlined></LikeOutlined>
                    <div>12</div>
                  </Space>
                }
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                />
                <div
                  style={{
                    marginLeft: 60,
                  }}
                >
                  我去你妈的steam
                </div>
                <img
                  style={{
                    marginLeft: 60,
                  }}
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              </List.Item>
            );
          }}
        ></ProList>
      </InfiniteScroll>
    </PageContainer>
  );
};
export default Communitydetail;
