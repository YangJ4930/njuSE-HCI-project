import React, { Component } from 'react';

class HomeView extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <button onClick={this.deal}>111</button>
            </React.Fragment>

            
        );
    }


    deal = () => {
        console.log("111");
    }

}
 
export default HomeView;