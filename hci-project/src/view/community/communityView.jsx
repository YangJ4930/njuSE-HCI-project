import { PageContainer, ProCard } from "@ant-design/pro-components";
import { ProList } from "@ant-design/pro-components";
import { Avatar, Divider, FloatButton, List, Skeleton, Image, Row, Tag, Card ,message} from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";
import React from "react";
import {
  PlusOutlined,
  LikeOutlined,
  MessageOutlined,
  StarOutlined,
  StarFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./community.css";
import moment from 'moment';
import apex from './component/logo-apex-legends1.jpg'
import BoDe from './component/BoDe.jpg'
import WWQY from './component/无畏契约.jpg'
import C6 from './component/6.jpg'
import Myworld from './component/Myworld.jpg'
import er from './component/er.jpg'
import zd from './component/战地5.jpg'
import it_takes_two from './component/it_takes_two.jpg'
import all from './component/all.png'
import { useSelector } from 'react-redux';

const CommunityView = function CommunityView() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [tag, SetTag] = useState("全部");
  const content =
    "五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛,五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛五夜漏声催晓箭,九重春色醉仙桃。旌旗日暖龙蛇动，宫殿风微燕雀高。朝罢香烟携满袖，诗成珠玉在挥毫。欲知世掌丝纶美，池上于今有凤毛";
  const title = "人机交互是我最喜欢的课，一天不上浑身难受";
  const key = 'updatable';
  const islogin=useSelector((state) => state.auth.isLogin);
  const IconText = ({ icon, text, iconname }) => {
    const [xuan, setXuan] = useState(false);
    const [isshou, setIsshou] = useState(false);
    const onEnter = () => {
      setXuan(true)
    }
    const onLeave = () => {
      setXuan(false)
    }
    const onclickshou = () => {
      console.log(isshou)
      setIsshou(isshou ? false : true)
    }
 const color = isshou ? 'yellow' : 'black';
        if (iconname === 'StarOutlined') {
            const seicon = isshou ? StarFilled : StarOutlined;
            return (
                <span>
                    {React.createElement(seicon, {
                        style: { marginInlineEnd: 8, color: color },
                        onClick: onclickshou,
                        spin: xuan,
                        onMouseEnter: onEnter,
                        onMouseLeave: onLeave,
                    })}
                    {text}
                </span>
            );
        }
        return (
            <span>
                {React.createElement(icon, {
                    style: { marginInlineEnd: 8, color: color },
                    onClick: onclickshou,
                })}
                {text}
            </span>
        );
    };
 const ContentText = ({ title }) => {
        return (
            <>
                <div className='title'>{title}</div>
                {/* <div className="content">{content}</div> */}
            </>
        );
    };
const ite = [
        {
            title: '全部',
            ava: all,
        },
        {
            title: 'apex英雄',
            ava: apex,
        },
        {
            title: '博德之门3',
            ava: BoDe,
        },
        {
            title: '无畏契约',
            ava: WWQY,
        },
        {
            title: '彩虹六号',
            ava: C6,
        },
        {
            title: '我的世界',
            ava: Myworld,
        },
        {
            title: '艾尔登法环',
            ava: er,
        },
        {
            title: '战地5',
            ava: zd,
        },
        {
            title: '双人成行',
            ava: it_takes_two,
        },
        // {
        //   title: "更多",
        //   ava: "https://cn.bing.com/images/search?view=detailV2&ccid=2d2ejd2a&id=DDF73B8E1A52CB4C71CFA8DC9905E767AD7C2259&thid=OIP.2d2ejd2aIAmuTR9Q8rtQyQHaE8&mediaurl=https%3a%2f%2fwww.xtrafondos.com%2fwallpapers%2flogo-apex-legends-3031.jpg&exph=4000&expw=6000&q=apex%e5%9b%be%e6%a0%87&simid=608051676183620700&FORM=IRPRST&ck=76BC9B5586E382DE9F5AFEBF365EBAD9&selectedIndex=0&itb=0&ajaxhist=0&ajaxserp=0"
        // },
    ];
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        console.log('begining');
        fetch(`http://localhost:7999/community/findAllCommunity/${page}`)
            .then((res) => res.json())
            .then((body) => {
                console.log(body);
                setData([...data, ...body]);
                const pagenumber = page + 1;
                setPage(pagenumber);
                console.log(page);
                setLoading(false);
            })
            .catch((endMessage) => {
                console.log(endMessage);
                setLoading(false);
            });
    };
    useEffect(() => {
        loadMoreData();
    }, []);
return (
    <>
      <PageContainer style={{

      }}>
        <ProCard title="我的喜好" ghost gutter={16} collapsible style={{
          width: "100%"
        }}>
          <ProList
            showActions="hover"
            grid={{ gutter: 16, column: 8 }}
            dataSource={ite}
            renderItem={(item) => {
              return (
                <>
                  <ProCard size="small" layout="center" direction="column" height="116px" >
                    <Image
                      preview={false}
                      style={{
                        borderRadius: 10
                      }}
                      width={150}
                      height={150}
                      src={item.ava}
                      onClick={() => {
                        console.log("click me")
                        message.open({
                          key,
                          type: 'success',
                          content: '切换tag',
                          duration: 1,
                      });
                        SetTag(item.title)
                      }}
                    />

                    <div style={{
                      marginTop: 10
                    }}>
                      {item.title}
                    </div>
                  </ProCard>
                </>
              );
            }}
          ></ProList>
        </ProCard>


        <br></br>
        <InfiniteScroll

          infinite-scroll-disabled={false}
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 10}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
          onScroll={() => console.log("loading")}
        >
          <ProList
            size="small"
            itemLayout="vertical"
            rowKey="id"
            dataSource={data}
            //loading={true}
            renderItem={(item) => {
              var formattedTimestamp = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
              if (item.tags != null) {
                if (item.tags.indexOf(tag) == -1 && tag !== "全部") {
                  return null;
                }
              }
              return (
                <List.Item
                  actions={[
              
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                    title={(<Row >
                      <div>杨京</div>
                      {item.tags == null ? null : item.tags.map((key, index) => {

                        return <Tag color="#2db7f5" style={{
                          marginLeft: 10
                        }}>{key}</Tag>

                      })}

                    </Row>)}
                    description={"发表时间：" + formattedTimestamp}
                  />

                  <Link
                    className="link-text"
                    to={`/component/Communitydetail/${item.id}`}
                  ><Card hoverable
                  bordered={false}
                  
                  >
                      <ContentText content={item.content} title={item.title} />
                      {item.image === null ? null : <div style={{
                        textAlign:"center",
                        width:"100%",
                  
                      }}><Image
                    
                        preview={false}
                       
                        height={272}
                        alt="logo"
                        src={item.image}
                      /></div>}
                    </Card>
                  </Link>

                </List.Item>
              );
            }}
          ></ProList>
        </InfiniteScroll>
      </PageContainer>
      <FloatButton.Group>
        <Link to="/component/postComponent">
          <FloatButton
            tooltip={<div>发帖</div>}
            icon={<PlusOutlined />}
          ></FloatButton>
        </Link>
        <FloatButton.BackTop className="backtop" />
      </FloatButton.Group>
    </>
  );
};
export default CommunityView;