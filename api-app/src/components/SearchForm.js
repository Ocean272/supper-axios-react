import axios from "axios";
import React, { useState } from "react";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");
  const [recordloc, setRecordloc] = useState([]);
  //const [recordcui, setRecordcui] = useState([]);
  //const [recordprice, setRecordprice] = useState([]);

  const searchRecords = () => {
    axios
      .get(`http://localhost:3000/public/location/${search}/${search1}/${search2}`)
      .then((res) => {
        setRecordloc(res.data);
        // setRecordcui(res.data);
        // setRecordprice(res.data);
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
              <input
                type="text"
                id="form1"
            //   onKeyDown={data}
                onKeyUp={searchRecords}
                onChange={(e) => setSearch1(e.target.value)}
                class="form-control"
                placeholder="Western, Muslim, Indian, Chinese, "
                style={{ backgroundColor: "#ececec" }}
            />
              <input
                type="text"
                id="form1"
            //   onKeyDown={data}
                onKeyUp={searchRecords}
                onChange={(e) => setSearch2(e.target.value)}
                class="form-control"
                placeholder="$, $$, $$$, $$$$, $$$$$, $$$$$$"
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
            {recordloc.map((location) => (
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
