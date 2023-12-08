import {
  Avatar,
  Divider,
  List,
  Skeleton,
  Space,
  Card,
  Carousel,
  Image,
  Row,
  Tag,
  FloatButton
} from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import { MessageOutlined, PlusOutlined,
  LikeOutlined,
  StarOutlined,
  StarFilled,
  SmallDashOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-components";
import { ProList } from "@ant-design/pro-components";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentPost from "../component/commentPost"
const Communitydetail = function Comunitydetail() {
  const content =
    "五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动\n" +
    "，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛";
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
      <Row>
        <Card bordered={false}hoverable style={{
          width: "300px"
        }}>
          <Meta
            avatar={(
              <>
                <Avatar
                  size={64}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                />
              </>
            )

            }
            title={(<Row >
              <div>杨京</div>
              <Tag color="#2db7f5" style={{
                marginLeft: 10
              }}>作者</Tag>
            </Row>)}
            description="杨静nb"
          />

        </Card>

      </Row>
      <Divider plain orientation="left">正文</Divider>
      <div style={{
        whiteSpace: "pre-line",
        fontSize: "16px"
      }}>{content}</div>

      <InfiniteScroll
        infinite-scroll-disabled={false}
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
        onScroll={() => console.log("loading")}
      >
        <Row justify="space-between"
        >


        </Row>
        <Divider orientation="left"> <Row

        >
          <div style={{
            fontWeight: "bold",
          }}>
            评论
            <MessageOutlined></MessageOutlined>
          </div>
        </Row>
        </Divider>
        <ProList
          
          size="small"
          itemLayout="vertical"
          rowKey="id"
          dataSource={data}
          split={false}
          renderItem={(item) => {
            return (
              <List.Item

              >
                <Card hoverable
               style={{background:"rgba(219,225,240,0.3)"}}
               bordered={false}
                
                >
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  description={<div style={{fontSize:10, marginTop:-10}}>今天 11:21</div>}
                />
                <div
                  style={{
                    marginLeft: 40,
                  }}
                >
                  我去你妈的steam
                </div>
                
                {/* <img
                  style={{
                    marginLeft: 60,
                  }}
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                /> */}
                </Card>
              </List.Item>
            );
          }}
        ></ProList>
      </InfiniteScroll>
      <FloatButton description={<CommentPost></CommentPost>}></FloatButton>
    </PageContainer>
  );
};
export default Communitydetail;
