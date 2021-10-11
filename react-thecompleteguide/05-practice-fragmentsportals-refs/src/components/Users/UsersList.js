/* This component renders a list of users registered by us */
import React from "react";

import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UserList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {/* React can render arrays of elements, so we can use array methods */} */
                {props.users.map(user => 
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>)}
            </ul>
        </Card>
    );
};

export default UserList;