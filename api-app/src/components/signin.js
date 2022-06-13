import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import axios from "axios";
import API from "../screens/API";


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
  
const LoginForm = (setToken) => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();


  const handleSubmit =  async (e) => {
    e.preventDefault();
    const user = {username,password};
    //send the username and password to the server
    const resp = await API.post
      ("/login/signin", user);
    //set the state of the user
    setUser(resp.data)
    //store the user in localStorage
    localStorage.setItem('user', resp.data)
    console.log(resp.data)
  };
    // if there's a user show the message below
    if (user) {
      return <div>{user.username}, you are logged in!</div>
    }

  //if there's no user, show the login form
  return (
    <h4 className="loginBox">
      <form onSubmit={handleSubmit}>
        <p>Login</p>
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
      </form>
    </h4>
  );
};
  LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}
  
export default LoginForm;
  