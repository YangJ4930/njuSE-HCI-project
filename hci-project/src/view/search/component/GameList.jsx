import {Col, Row} from "antd";
import React from 'react';
import {GameCard} from "./GameCard";
export const GameList = ({listData, widthData}) => {
    return(
        <Row gutter={[16, 16]}>
            {listData.map(
                (data) =>{
                    return(
                        <GameCard key = {data.id} data = {data} widthData={widthData} ></GameCard>
                    )
                }
            )}

        </Row>
    );
}