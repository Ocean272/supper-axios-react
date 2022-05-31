import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const newLocation = () => {
    const [locationId, setLocationId] = useState("");
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [located_at, setLocated_at] = useState('');
    const [cuisineId, setCuisineId] = useState('');
    const [priceId, setPriceId] = useState('');
    const history = useHistory();
 
    const saveLocation = async (e) => {
        e.preventDefault();
        await axios.post('https://supper-makan-apa.herokuapp.com/user/newlocation',{
            locationId,
            name,
            address,
            located_at,
            cuisineId,
            priceId
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveLocation }>
                <div className="field">
                    <label className="label">Id</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ locationId }
                        onChange={ (e) => setLocationId(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Name of Restaruant</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Address</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Address"
                        value={ address }
                        onChange={ (e) => setAddress(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Location</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="located_at"
                        value={ located_at }
                        onChange={ (e) => setLocated_at(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Cuisine Served</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ cuisineId }
                        onChange={ (e) => setCuisineId(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Price Range</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ priceId }
                        onChange={ (e) => setPriceId(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default newLocation