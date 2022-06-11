import axios from "axios";
import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [record, setRecord] = useState([]);
  

  const searchRecords = () => {
    axios
      .get(`https://supper-makan-apa.herokuapp.com/public/location/${search}/${search1}/${search2}`)
      .then((res) => {
        setRecord(res.data);

      });
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  }
  const handleChange1 = (e) => {
    console.log(e.target.value);
    setSearch1(e.target.value);
  }
  const handleChange2 = (e) => {
    console.log(e.target.value);
    setSearch2(e.target.value);
  }

  return (
    <section>
      <div className="container">
        <h4 className="mb-3 text-center mt-4">Search Restaruant location</h4>
        <div className="row mt-3">
          <form>
            <h3>Location</h3>
            <select
                onClick={searchRecords}
                onChange={handleChange}> 
              <option value="N/A">Please choose</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="Central">Central</option>
            </select>
          </form>

          <form>
            <h3>Cuisine offered</h3>
            <select
                onClick={searchRecords}
                onChange={handleChange1}> 
              <option value="N/A">Please choose</option>
              <option value="Western">Western</option>
              <option value="Muslim">Muslim</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Thai">Thai</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
            </select>
          </form>

          <form>
            <h3>Price range</h3>
            <select
                onClick={searchRecords}
                onChange={handleChange2}> 
              <option value="N/A">Please choose</option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
              <option value="$$$$$">$$$$$</option>
            </select>
          </form>
        <table className="table table-hover  table-striped table-bordered ml-4 ">
            <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
                <th>located_at</th>
                <th>Cuisine</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {record.map((location) => (
                <tr key={location.id} >
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.located_at}</td>
                <td>{location.cuisineId}</td>
                <td>{location.priceId}</td>
                </tr>
            ))}
            </tbody>
            {/* <tbody>
            {recordcui.map((location) => (
                <tr key={location.id} >
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.located_at}</td>
                <td>{location.cuisineId}</td>
                <td>{location.priceId}</td>
                </tr>
            ))}
            </tbody>
            <tbody>
            {recordprice.map((location) => (
                <tr key={location.id} >
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.located_at}</td>
                <td>{location.cuisineId}</td>
                <td>{location.priceId}</td>
                </tr>
            ))}
            </tbody> */}
        </table>     
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
