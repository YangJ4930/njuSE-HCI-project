import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { left, right } from '@popperjs/core';


class GameListItem extends Component {
    state = {  } 
    render() { 
        console.log(this.props.address)
        return (
        <React.Fragment>
            <Divider />
            <img src={this.props.address} alt='logo' style={{float:left, width:30, height:30, marginRight: 20}}/>          
                <Link className="nav-link" to={`/game/${this.props.id}`} style={{}}>
                    {this.props.title}
                </Link>
        </React.Fragment>
        );
    }
}
 
export default GameListItem;