import React, { useEffect, useState } from "react";
import API from "../screens/API";

const Overview= () => {

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
  <>
    <div className="Child-wrapper">
    <h2>RESTAURANTS</h2>  
      {locData.map((l) => {
        return (
          <div className="Child-box" key={l.id}>
            
            <p>name : {l.name}</p>
            <p>address: {l.address}</p>
            <p>located_at: {l.located_at}</p>
            <p>cuisine: {l.cuisineId}</p>
            <p>Price range: {l.priceId}</p>
          </div>
        );
      })}

      
      {cuisine.map((c) => {
        return (        
            <div className="Child-box" key={c.id}>
              <h2>Cuisine</h2>
              <p>Cuisine type : {c.type_of_food}</p>
            </div>
        );
      })}

      <h2>Price</h2>
      {price.map((p) => {
        return (        
            <div className="Child-box" key={p.id}>
              <p>Price range : {p.cost}</p>
            </div>
        );
      })}
    </div>
    </>
  );
}

export default Overview;
