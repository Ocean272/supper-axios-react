import React, { useEffect, useState } from "react";
import API from "../API";

const LocationData = () => {

  const [locData, setLocData] = useState([]);


  const getLocationName = async () => {
    const res = await API.get(
      "/public/location"
    );
    if (res.status === 200) {
      console.log(res);
      setLocData( res.data.result);
      };
    }

    useEffect(() => {
      getLocationName();
    }, []);
  
  // async getLocationAt() {
  //   const res = await API.get(
  //     "/public/location"
  //   );
  //   if (res.status === 200) {
  //     console.log(res);
  //     this.setState((state) => {
  //       state.located_at = res.data.located_at;
  //       return state;
  //     });
  //   }
  // }
  return (
  <>
    <div className="Child-wrapper">
      <h2>RESTAURANTS</h2>
      {locData.map((n) => {
        return (
          <>
            <div className="Child-box" key={n.id}>
              <p>name : {n.name}</p>
              <p>address: {n.address}</p>
              <p>located_at: {n.located_at}</p>
            </div>
          </>
        );
      })}
    </div>
    </>
  );
}

export default LocationData;
