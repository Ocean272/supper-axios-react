import React from "react";


const Cuisine = ({data}) => {

   //const [locData, setLocData] = useState([]);


  return (
  <>
    <div className="Child-wrapper">
    
      {data.map((c) => {
        return (        
            <div className="Child-box" key={c.id}>
              <h2>Cuisine</h2>
              <p>Cuisine type : {c.type_of_food}</p>
            </div>
        );
      })}
    </div>
    </>
  );
}

export default Cuisine;
