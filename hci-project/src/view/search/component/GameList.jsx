import {Col, Row} from "antd";
import React from 'react';
import {GameCard} from "./GameCard";
export const GameList = ({listData}) => {
    return(
        <Row gutter={[16, 16]}>
            {listData.map(
                (data) =>{
                    return(
                        <GameCard key = {data.id} data = {data}></GameCard>
                    )
                }
            )}

        </Row>
    );
}