import React, { useEffect, useState } from "react";
import API from "../screens/API";

const Overview= () => {

  const [locData, setLocData] = useState([]);

  useEffect(() => {
    getLocationAll();
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
    </div>
    </>
  );
}

export default Overview;
