import React from "react";


const Price = ({data}) => {

   //const [locData, setLocData] = useState([]);


  return (
  <>
    <div className="Child-wrapper">
    <h2>Price</h2>
      {data.map((p) => {
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

export default Price;
