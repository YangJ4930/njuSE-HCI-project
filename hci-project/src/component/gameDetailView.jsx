import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Card, Button, Row, Col, Typography, Carousel } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import logo from '../static/Store.svg';
import gameImage from '../static/gameImage2.jpg';
import gameLogo from '../static/logo.png';
import axios from '../axios';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

function GameDetailView(props) {
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const [tag, setTag] = useState([]);
    React.useEffect(() => {
        axios
            .get(`/explore/content/${gameId}`)
            .then((response) => {
                console.log(response);
                setGame(response.data);
                setTag(response.data.tags);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Layout>
            <Title style={{ color: 'white' ,marginBottom: 40}}>游戏详情</Title>

            <Content style={{  }}>
                <Row gutter={[24, 24]}>
                    <Col span={16}>
                        <GameDetail game={game} />
                    </Col>
                    <Col span={8}>
                        <GameInfo game={game} tag={tag} />
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

function GameDetail({ game }) {
    return (
        <Typography>
            <Title>{game.name}</Title>
            <Text>
                一系列仪式谋杀案正威胁着亮瀑镇这个位于太平洋西北部，被荒野包围的小镇社区。
                作为以解决悬案而闻名的联邦调查局资深警探，萨贾·安德森为调查谋杀案而来到此地。
                当安德森发现一页页恐怖故事开始在身边化为现实时，她的案件陷入了一场噩梦。
                艾伦·韦克是一位迷失的作家，他正被困在我们世界以外的噩梦之中。而他写下了一篇黑暗故事，试图借此塑造自己周围的现实并逃离监狱。
                虽然某种黑暗阴森的恐怖力量对他穷追不舍，但韦克正努力保持自己的理智，试图掌控局面并击败魔鬼。
                安德森和韦克这两位英雄，虽身处两种截然不同的现实中且踏上了各自的亡命之旅，却以他们自己都无法理解的方式产生了心灵上的联结：他们相互映照与呼应，并用这种方式影响着周围的世界。
                在恐怖故事的推动下，超自然的黑暗力量侵入了辉落镇，腐化了当地居民并威胁着安德森和
                韦克的亲人。 他们只能依靠光明作为武器与避风港，来抵御自己面对的黑暗。
                受困于一个只有受害者和怪物、且凶险恐怖的故事中，他们能否担起命运委以的重任，逆境求生、成功逃脱？
            </Text>
            <br />
            {/*<Title>解开致命之谜</Title>*/}
            <h2>解开致命之谜</h2>
            <Text>
                从一桩小镇谋杀案开始的调查，迅速演变成了一场噩梦。
                在这个充满紧张悬念和意外反转的心理恐怖故事中，揭开超自然黑暗力量的源头。
            </Text>
            <br />
            {/*<Title>扮演两种角色</Title>*/}
            <h2>扮演两种角色</h2>
            <Text>
                体验艾伦·韦克与萨贾·安德森的故事，从不同视角观察事态发展。
                为了解决案件而陷入生死竞赛的安德森，以及拼命尝试改写现实、逃离黑暗之地深处的韦克，这两种角色任由你来回切换。
            </Text>
            <br />
            <h2>探索两个世界</h2>
            {/*<Title>探索两个世界</Title>*/}
            <Text>
                在两个美丽又可怖的世界中冒险，每个世界都拥有丰富独特的角色阵容和致命威胁。
                体验太平洋西北部巨釜湖的壮丽景观以及辉落镇和富水镇的田园风情。
                而与之形成鲜明对比的，则是你尝试逃离黑暗之地噩梦般城市景色的过程。
                在两个美丽又可怖的世界中冒险，每个世界都拥有丰富独特的角色阵容和致命威胁。
                体验太平洋西北部巨釜湖的壮丽景观以及辉落镇和富水镇的田园风情。
                而与之形成鲜明对比的，则是你尝试逃离黑暗之地噩梦般城市景色的过程。
                在两个美丽又可怖的世界中冒险，每个世界都拥有丰富独特的角色阵容和致命威胁。
                体验太平洋西北部巨釜湖的壮丽景观以及辉落镇和富水镇的田园风情。
                而与之形成鲜明对比的，则是你尝试逃离黑暗之地噩梦般城市景色的过程。
            </Text>
            <br />
            <h2>趋光求生</h2>
            {/*<Title>趋光求生</Title>*/}
            <Text>
                在资源有限的情况下，拼尽全力与强大的超自然敌人展开近距离战斗。
                只靠一把枪无法保住你的命：光明是对抗黑暗的终极武器，当敌人即将击溃你时，光明将成为你的避难所。
                在资源有限的情况下，拼尽全力与强大的超自然敌人展开近距离战斗。
                只靠一把枪无法保住你的命：光明是对抗黑暗的终极武器，当敌人即将击溃你时，光明将成为你的避难所。
                在资源有限的情况下，拼尽全力与强大的超自然敌人展开近距离战斗。
                只靠一把枪无法保住你的命：光明是对抗黑暗的终极武器，当敌人即将击溃你时，光明将成为你的避难所。
            </Text>
        </Typography>
    );
}

function GameInfo({ game, tag }) {
    tag = game.tags;
    return (
        <Card
            cover={
                <img src={game.imgUrl} alt='Game' style={{ height: '300px', objectFit: 'cover' }} />
            }
        >
            <Card.Meta title={game.name} description='Alan Wake 2 是一款惊悚冒险游戏' />
            <div style={{ marginTop: '16px' }}>
                <Title level={5}>游戏类型</Title>
                {tag &&
                    tag.length > 0 &&
                    tag.map((item) => {
                        return <Text key={item}>{item}</Text>;
                    })}
            </div>
        </Card>
    );
}

export default GameDetailView;
