import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

// function FormInput() {
//     const history = useHistory();
//     const [user, setUser] = useState({
//         username: null,
//         email: null,
//         password: null
//     });

//     const handleInput = (e) => {
//         const fieldName = e.target.name;
//         const data = {...user};

//         switch (fieldName) {
//             case "username":
//                 data.username = e.target.value;
//                 break;
//             case "email":
//                 data.email = e.target.value;
//                 break;
//             case "password":
//                 data.password = e.target.value;
//         }

//         setUser(data);
//         console.log(setUser);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         history.push('/home');
//         window.alert(user);
//     }

//     return (
//         <form action="https://supper-makan-apa.herokuapp.com/login/signup" method="POST" onSubmit={handleSubmit} >
//             <input type='text' placeholder="username" name="username" onChange={handleInput} />
//             <input type='text' placeholder="email" name="email" onChange={handleInput} />
//             <input type='text' placeholder="password" name="password" onChange={handleInput} />
//             Output: {user.username} {user.email} {user.password}
//             <button>Submit</button>
//         </form>
//     );
// }

// export default FormInput;

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
      history.push('/home');
      setToken(token);
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
    FormInput.propTypes = {
      setToken: PropTypes.func.isRequired
    }
    
    export default FormInput;
  

// export default function Form(setToken) {
//   const history = useHistory();

//   // States for registration
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "" || password === "") {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//     }
//     history.push("/home");
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? "" : "none",
//         }}
//       >
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? "" : "none",
//         }}
//       >
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}
//         <label className="label">Name</label>
//         <input
//           onChange={handleName}
//           className="input"
//           value={name}
//           type="text"
//         />

//         <label className="label">Email</label>
//         <input
//           onChange={handleEmail}
//           className="input"
//           value={email}
//           type="email"
//         />

//         <label className="label">Password</label>
//         <input
//           onChange={handlePassword}
//           className="input"
//           value={password}
//           type="password"
//         />

//         <button onClick={handleSubmit} className="btn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
