import React, { useState, useContext } from "react";
//import { useHistory } from "react-router-dom";
import API from "../screens/API";
import { UserContext } from "./UserContext";


// async function loginUser(credentials) {
//     return fetch("https://supper-makan-apa.herokuapp.com/login/signin", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(credentials)
//     })
//       .then(data => data.json())
//   }
  
const LoginForm = () => {
  //const history = useHistory();

  //const {value} = useContext(UserContext)
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const {user, setUser} = useContext(UserContext);
  

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const user = {username,password};

    //send the username and password to the server
    const resp = await API.post("/login/signin", user);

    //set the state of the user
    setUser(resp.data.id)
    
    //store the user in localStorage
    localStorage.setItem('user', resp.data)
    console.log(resp.data)
  };
    // if there's a user show the message below
    if (user) {
      //history.push('/home')
      //return <div>{user.username}, you are logged in!</div>
    }

  const handleLogout = async (e) => {
    e.preventDefault()

    const res = await API.post("/user/signout");
    setUser(res.data.id)
    console.log(res.data)
  }
    
  //if there's no user, show the login form
  return (
    <h4 className="loginBox">
      <form onSubmit={handleSubmit}>
        <p>Login</p><pre>{JSON.stringify(user, null, 2)}</pre>
        <input
          type="text"
          name="username"
          placeholder="enter a username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="enter a password"
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit} >Submit</button>
        <button type="submit" onClick={handleLogout} >Logout</button>
      </form>
    </h4>
  );
};
  
export default LoginForm;
  