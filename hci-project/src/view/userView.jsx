import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { faker } from '@faker-js/faker';
function UserView(props) {

    return (
        <div>
            <h1>User View</h1>
            <p>Username: {props.username}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserView;