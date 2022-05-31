import axios from "axios";
import React, { useState } from "react";

const SearchForm = ({data}) => {
  const [search, setSearch] = useState("");
  const [record, setRecord] = useState([]);

  const searchRecords = (data) => {
    axios
      .get(`https://supper-makan-apa.herokuapp.com/public/location/${search}`)
      .then((res) => {
        setRecord(res.data);
      });
  };

  return (
    <section>
      <div className="container">
        <h4 className="mb-3 text-center mt-4">Search Restaruant location</h4>
        <div className="row mt-3">
            <input
                type="text"
                id="form1"
            //   onKeyDown={data}
                onKeyUp={searchRecords}
                onChange={(e) => setSearch(e.target.value)}
                class="form-control"
                placeholder="East, West, North, South, Central"
                style={{ backgroundColor: "#ececec" }}
            />
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
        </table>     
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
