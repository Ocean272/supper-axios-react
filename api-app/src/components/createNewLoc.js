import { useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddLocation = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [located_at, setLocated_at] = useState('');
    const history = useHistory();
 
    const saveLocation = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            name: name,
            address: address,
            located_at: located_at
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveLocation }>
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
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddLocation