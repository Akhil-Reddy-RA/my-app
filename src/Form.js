import React from 'react';
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";

const Form = (props) =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const onSubmit = (data) => {
        props.handleSubmit(data)
        navigate("/")
        
    }
    
    return (
        <div className='container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label htmlFor="firstName">firstName</label>
            <input 
                type="text" 
                {...register("firstName", { required: true, maxLength: 10 })} />
                {errors.firstName && <p style={{color:'red'}}>Please check the First Name</p>}

             <label htmlFor="lastName">lastName</label>
            <input 
                type="text" 
                {...register("lastName", { required: true, maxLength: 10 })} />
                {errors.lastName && <p style={{color:'red'}}>Please check the Last Name</p>}

            <label htmlFor="email">email</label>
            <input 
                type="text" 
                {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
                {errors.email && <p style={{color:'red'}}>Please check the Email</p>}

                <button type='submit' >Submit</button>
                  
        </form>
        </div>
    )
}

export default Form;

