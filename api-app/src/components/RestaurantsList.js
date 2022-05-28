import React from "react";
//import API from "../screens/API";

const Restaurant = ({data}) => {

  return (
  <>
    <div className="Child-wrapper">
      {data.map((l) => {
        return (
          <div className="Child-box" key={l.id}>
            <h2>RESTAURANTS</h2>
            <p>name : {l.name}</p>
            <p>address: {l.address}</p>
            <p>located_at: {l.located_at}</p>
            <p>cuisine: {l.cuisineId}</p>
            <p>Price range: {l.priceId}</p>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default Restaurant;
