import axios from 'axios';
import React, { useState, useEffect } from 'react'

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);

    const loadLocationDetail = async () => {
        const res = fetch('https://supper-makan-apa.herokuapp.com/public/location')
            .then(res =>{
                return res.json();
            })
            .then((myJson) => {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadLocationDetail();
    }, []);

    const searchRecords = () => {
        axios.get(`https://supper-makan-apa.herokuapp.com/public/location/${search}`)
           .then(res => {
                setRecord(res.data);
        });
    }


    const loadLocationAgain = async () => {
        const res = fetch('https://supper-makan-apa.herokuapp.com/public/location')
            .then(res =>{
                return res.json();
            })
            .then((myJson) => {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadLocationAgain();
    }, []);

  return (
    <section>  
    <div class="container">  
    <h4 className="mb-3 text-center mt-4">Search Restaruant location</h4>
      <div class="row mt-3">
      <div class="col-sm-11">
        <div class="input-group mb-4 mt-3">
          <div class="form-outline">
           <input type="text" id="form1"    onKeyDown={loadLocationAgain} onKeyUp={searchRecords} onChange={(e)=>setSearch(e.target.value)} class="form-control" placeholder="East, West, North, South, Central" style={{backgroundColor:"#ececec"}}/>
        </div>
        {/* <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button> */}
        </div>  
        <table class="table table-hover  table-striped table-bordered ml-4 ">
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
     
            {record.map((location)=>
                <tr>
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.located_at}</td>
                <td>{location.cuisineId}</td>
                <td>{location.priceId}</td>
                <td><img class="img-fluid" src={"/images/" + location.emp_image} style={{maxWidth:"40px"}}  alt=""/></td>
                </tr>
                )} 
            </tbody>
        </table>
      </div>
      </div>
    </div>
   </section>
  )
}



export default SearchForm