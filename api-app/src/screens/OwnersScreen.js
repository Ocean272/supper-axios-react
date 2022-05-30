import React, { useEffect, useState } from "react";
import API from "../API";

const LocationData = () => {

  const [locData, setLocData] = useState([]);
  const [cuisine, setCuisine] = useState([]);
  const [price, setPrice] = useState([]);


  useEffect(() => {
    getLocationAll();
    getCuisine();
    getPrice();
  }, []);

 
  const getLocationAll = async () => {
    const res = await API.get("/public/location")
    if (res.status === 200) {
      console.log(res);
      setLocData( res.data);
      };
    }

  const getCuisine = async () => {
    const res = await API.get("/user/cuisine")
    if (res.status === 200) {
      console.log(res);
      setCuisine( res.data);
      };
    }

  const getPrice = async () => {
    const res = await API.get("/user/price")
    if (res.status === 200) {
      console.log(res);
      setPrice( res.data);
      };
    }


  return (
  <>
    <div className="Child-wrapper">
      <h2>RESTAURANTS</h2>
      {locData.map((n) => {
        return (
          <div className="Child-box" key={n.id}>
            <p>name : {n.name}</p>
            <p>address: {n.address}</p>
            <p>located_at: {n.located_at}</p>
          </div>
        );
      })}

      <h2>Cuisine</h2>
      {cuisine.map((c) => {
        return (
          <div className="Child-box" key={c.id}>
            <p>Cuisine served : {c.type_of_food}</p>
          </div>
        );
      })}
      <h2>Price range</h2>
      {price.map((p) => {
        return (
          <div className="Child-box" key={p.id}>
            <p>Price range: {p.cost}</p>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default LocationData;
