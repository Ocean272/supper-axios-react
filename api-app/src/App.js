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

/*
  App.js responsibilities:
  1. Data polling and pass filtered data to children component
  2. Routing defined
*/
function App() {

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
        </div>
        <div className="tab-container">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;