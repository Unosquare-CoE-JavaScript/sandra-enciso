/* This is our main component which will be rendered in the root div
This component shows a list of users and a form to save new users */
import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {

  /* Creates a state where we can storage the users list */
  const [UsersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => { //function which handles the creation of a new user
    setUsersList((prevUsersList) => { //use the prev state to create a new state
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString()}]; //merges the old state with the new user using spread operator
    })
  }

  return ( //Using 'fragments'  <> </>, React.Fragment
    // <>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UserList users={UsersList} />
    // </>
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={UsersList} />
    </React.Fragment>
  );
}

export default App;
