import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
    return fetch("https://supper-makan-apa.herokuapp.com/login/signup", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }
  
const FormInput = (setToken) => {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit =  (e) => {
    e.preventDefault();
    const token = loginUser({
      username,
      email,
      password
    });
    history.push('/signin');
    setToken(token);
  }


  return (
    <h4 className="loginBox">
      <form onSubmit={handleSubmit}>
        <p>Register</p>
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
        <button type="submit" onClick={handleSubmit} >register</button>
      </form>
    </h4>
  );
};
  FormInput.propTypes = {
    setToken: PropTypes.func.isRequired
}
  
export default FormInput;
  