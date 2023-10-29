import React from "react";
import {useParams} from "react-router-dom";

function GameDetailView(props) {

    const {gameId} = useParams();

    return (
        <div>
            <h1>Game Detail View</h1>
        </div>
    );
}

export default GameDetailView;