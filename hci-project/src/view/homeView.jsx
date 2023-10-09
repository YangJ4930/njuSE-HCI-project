import React, { Component } from 'react';
import { Avatar, List, Space, Carousel } from 'antd';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const data = Array.from({
    length: 23,
  }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }));
  const IconText = ({  text }) => (
    <Space>
      {/* {React.createElement(icon)} */}
      {text}
    </Space>
  );
  const ListNews = () => (
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
            actions={[
                <IconText  text="156" key="" />,
                <IconText  text="156" key="" />,
                <IconText  text="2" key="" />,
            ]}
            extra={
                <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
            }
        >
            <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
            />
                {item.content}
            </List.Item>
        )}
    />
    );

class HomeView extends Component {
    state = {  } 
    render() { 
        return (
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
                <ListNews/>
            </React.Fragment>

            
        );
    }


    deal = () => {
        console.log("111");
    }

}
 
export default HomeView;