import React from "react";


const Price = ({data}) => {

   //const [locData, setLocData] = useState([]);


  return (
  <>
    <div className="Child-wrapper">
      {data.map((p) => {
        return (        
            <div className="Child-box" key={p.id}>
              <h2>Price</h2>
              <p>Price range : {p.cost}</p>
            </div>
            );
        })}
    </div>
    </>
  );
}

export default Price;
