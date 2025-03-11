// /* eslint-disable no-undef */
import { useState } from 'react';

import './Form.css'

function Form(){
    const[user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        userName:"",
        


    });

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setUser((prev) => ({...prev,[name] : value}))

    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const { firstName, lastName, email, password } = user; 
        const formData = { firstName, lastName, email, password };
        console.log(formData);
    }
    return(
        <>
    <div className="container">
        <div className="form-content">
        <h1>React Form</h1>

<form className='form-container' onSubmit={handleFormSubmit}>
    <div className="input-field">
        <input type="text" name='firstName' value={user.firstName} placeholder='Enter First Name : ' onChange = {handleInputChange}/>
    </div>

    <div className="input-field">
        <input type="text" name='Last Name' value={user.lastNameastName} placeholder='Enter last Name : ' onChange = {handleInputChange}/>
    </div>

    <div className="input-field">
        <input type="email" name='email' value={user.email} placeholder='Enter Email : ' onChange = {handleInputChange} />
    </div>

    <div className="input-field">
        <input type="password" name='password' value={user.password} placeholder='Enter Password : ' onChange = {handleInputChange} />
    </div>

    <button type='submit'>Submit</button>
    
</form>

        </div>
        
    </div>

        </>
    )
}

export default Form;