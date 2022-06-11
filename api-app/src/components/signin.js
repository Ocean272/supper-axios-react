import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


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
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

async function loginIn(credentials) {
    return fetch("https://supper-makan-apa.herokuapp.com/login/signin", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    const credentials = loginIn({
      username,
      email,
      password
    });

    console.log(credentials);
    history.push('/home');
    // setToken(token);
  }
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
          type="text"
          name="email"
          placeholder="enter a email"
          onChange={e => setEmail(e.target.value)}
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
  