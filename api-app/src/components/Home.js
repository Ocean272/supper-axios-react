import React, { useEffect, useState } from "react";
import { useContext } from "react";
import API from "../screens/API";
//import { login } from "../utlis/login";
import { UserContext } from "./UserContext";
import Card from "react-bootstrap/Card";

const Overview= () => {
  
  const [locData, setLocData] = useState([]);
  const {user} = useContext(UserContext);

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

    console.log(user);
  return (
  <>
    <div className="Child-wrapper">
    <pre>{JSON.stringify(user, null, 2)}</pre>
      <h2>RESTAURANTS</h2>
        {locData.map((l) => {
          return (
            <Card style={{width: "20rem"}}>
              <Card.Img src={l.image} width="300px" />
              <Card.Body>
                <div className="container" key={l.id}>
                  <Card.Title>{l.name}</Card.Title>
                  <Card.Text>
                    <p>{l.address}</p>
                    <p>{l.located_at}</p>
                    <p>{l.cuisineId}</p>
                    <p>{l.priceId}</p>
                    <p>{l.openingHour}</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card> 
          );
        })}
      
    </div>
    </>
  );
}

export default Overview;
