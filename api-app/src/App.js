import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Restaurant from './components/RestaurantsList';
import FormInput from './components/signupform';
//import Form from './components/signupform';
import "../src/index.css";
import API from "./screens/API";
import Cuisine from "./components/CuisineList";
import Price from "./components/PriceList";
import Home from "./components/Home";
import AddNewLocation from "./components/createNewLoc";

/*
  App.js responsibilities:
  1. Data polling and pass filtered data to children component
  2. Routing defined
*/
function App() {

  const [locData, setLocData] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getLocationAll();
    getCuisine();
    getPrice();
  }, []);

  const getLocationAll = async () => {
    const res = await API.get(
      "/public/location"
    );
    if (res.status === 200) {
      console.log(res);
      setLocData(res.data);
      };
    }
  
    const getCuisine = async () => {
      const res = await API.get(
        "/user/cuisine"
      );
      if (res.status === 200) {
        console.log(res);
        setCuisine(res.data);
      }
    }

    const getPrice = async () => {
      const res = await API.get(
        "/user/price"
      );
      if (res.status === 200) {
        console.log(res);
        setPrice(res.data);
      }
    }

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
            <NavLink to="/Restaurant" activeClassName="current">
              Restaruant
            </NavLink>
          </div>
          <div>
            <NavLink to="/Cuisine" activeClassName="current">
              Cuisine
            </NavLink>
          </div>
          <div>
            <NavLink to="/Price" activeClassName="current">
              Price
            </NavLink>
          </div>
          <div>
            <NavLink to="/signup" activeClassName="current">
              signup
            </NavLink>
          </div>
          <div>
            <NavLink to="/AddNewLocation" activeClassName="current">
              AddNewLocation
            </NavLink>
          </div>
        </div>
        <div className="tab-container">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Restaurant">
              <Restaurant data={locData} />
            </Route>
            <Route path="/Cuisine">
              <Cuisine data={cuisine} />
            </Route>
            <Route path="/Price">
              <Price data={price} />
            </Route>
            <Route path="/Signup">
              <FormInput />
            </Route>
            <Route path="/AddNewLocation">
              <AddNewLocation />
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