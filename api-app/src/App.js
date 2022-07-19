import React, { useState, useEffect, useMemo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import FormInput from './components/signupform';
import "../src/index.css";
import Home from "./components/Home";
import NewLocation from "./components/createNewLoc";
import ReviewForm from "./components/ReviewForm";
import SearchForm from "./components/SearchForm";
import LoginForm from "./components/signin";
import SearchOneForm from "./components/Search1";
import { UserContext } from "./components/UserContext";
import API from '../src/screens/API';


/*
  App.js responsibilities:
  1. Data polling and pass filtered data to children component
  2. Routing defined
*/
function App() {
  const [user, setUser] = useState(null)

  const providerValue = useMemo(()=> ({user, setUser}), [user, setUser])

  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   getUserAll();
  // }, []);

  // const getUserAll = async () => {
  //   const res = await API.get(
  //     "/login/user"
  //   );
  //   if (res.status === 200) {
  //     //console.log(res);
  //     setUserData(res.data);
  //     };
  //   }

  //   console.log(userData)

  return (
    <div className="App-header">
      <Router>
        <div className="tab-selection">
          <div>Supper Makan Apa</div>
          <div>
            <NavLink to="/home" activeClassName="current">
              Home (Overview)
            </NavLink>
          </div>
          <div>
            <NavLink to="/signup" activeClassName="current">
              signup
            </NavLink>
          </div>
          <div>
            <NavLink to="/signin" activeClassName="current">
              signin
            </NavLink>
          </div>
          <div>
            <NavLink to="/NewLocation" activeClassName="current">
              NewLocation
            </NavLink>
          </div>
          <div>
            <NavLink to="/ReviewForm" activeClassName="current">
              ReviewForm
            </NavLink>
          </div>
          <div>
            <NavLink to="/SearchForm" activeClassName="current">
              SearchForm
            </NavLink>
          </div>
          <div>
            <NavLink to="/SearchOneForm" activeClassName="current">
              SearchOneForm
            </NavLink>
          </div>
        </div>
        <div className="tab-container">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <UserContext.Provider value={providerValue}>
          <Switch>
            <Route path="/Signup">
              <FormInput />
            </Route>
            <Route path="/Signin">
              <LoginForm />
            </Route>
            <Route path="/NewLocation">
              <NewLocation />
            </Route>
            <Route path="/ReviewForm">
              <ReviewForm />
            </Route>
            <Route path="/SearchForm">
              <SearchForm/>
            </Route>
            <Route path="/SearchOneForm">
              <SearchOneForm/>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;