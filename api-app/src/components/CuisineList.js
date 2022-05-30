import React from "react";


const Cuisine = ({data}) => {

   //const [locData, setLocData] = useState([]);


  return (
  <>
    <div className="Child-wrapper">
    <h2>Cuisine</h2>
      {data.map((c) => {
        return (        
            <div className="Child-box" key={c.id}>
              
              <p>Cuisine type : {c.type_of_food}</p>
            </div>
        );
      })}
    </div>
    </>
  );
}

export default Cuisine;
