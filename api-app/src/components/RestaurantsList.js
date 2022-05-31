import React from "react";

const Restaurant = ({data}) => {

  return (
  <>
    <div className="Child-wrapper">
    <h2>RESTAURANTS</h2>
      {data.map((l) => {
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
    </div>
    </>
  );
}

export default Restaurant;
