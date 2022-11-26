import API from "../screens/API";
import React, { useState } from "react";

const SearchOneForm = () => {

  const [record, setRecord] = useState([]);
  //const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  
  const searchRecords = async () => {
    const res = await API.get(`/public/location/${name}`)
    setRecord(res.data);
    console.log(res.data);
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    record.filter((p => p.name.toUpperCase().includes(name)))
        setName(e.target.value.toUpperCase());
  }

  
  // const getReviewsAll = async () => {
  //   const res = await API.get(
  //     `/public/review/${id}`
  //   );
  //   if (res.status === 200) {
  //     console.log(res);
  //     setReviews(res.data);
  //     };
  //   }


  return (

        <>
          <h3 className="child-header">Search one restaurant</h3>
            <h4 className="loginBox">Please enter</h4>
            <form onSubmit={handleSubmit}>
                <p>Login</p>
                <input
                type="text"
                name=" "
                value={name}
                placeholder="enter a name"
                onChange={handleChange}
                />
                <label
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    aria-label="Date"
                    >
                <option value="All"></option>
                </label>
                <button type="submit" onClick={searchRecords} >Submit</button>
            </form>
            
            <table>
            <tbody>
              <tr className="table-wrapper">
                <th>name</th>
                <th>address</th>
                <th>located_at</th>
                <th>cuisineId</th>
                <th>priceId</th>
                <th>review</th>
                <th>openingHour</th>
                <th>image</th>
              </tr>
              {(record)
                //.slice(0, visible)
                .map((a) => {
                  return (
                    <tr key={a._id}>
                      <td>{a.name}</td>
                      <td>{a.address}</td>
                      <td>{a.located_at}</td>
                      <td>{a.cuisineId}</td>
                      <td>{a.priceId}</td>
                      <td>{a.review}</td>
                      <td>{a.openingHour}</td>
                      <td>{a.image}</td>
                      <br />
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      );
    };

export default SearchOneForm;
