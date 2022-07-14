
import { useState } from "react";
import { useForm } from "react-hook-form";
import {createLoginUser} from './UserService';


const Login = (props) =>{
    const { register,handleSubmit, formState: { errors } } = useForm();
    const [ error,setError ]= useState("")
    

    const onSubmit = (dataToServer) => {
        
        createLoginUser(dataToServer).then((dataFromServer)=>{props.setToken(dataFromServer)})
        .catch((reason)=>{

            setError("Unable to connect to server")
            
        })
    }
    
    return (
        <div className='container'>
            {props.loginErrorMsg && <p style={{color:'red', textAlign:'center'}}>{props.loginErrorMsg}</p>}
            {error && <p style={{color:'red', textAlign:'center'}}>{error}</p>}
            {props.sessionError && <p style={{color:'red', textAlign:'center'}}>{props.sessionError}</p>}
            <h1>Login In Here</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="username">Username</label>
            <input 
                type="text" 
                {...register("username", { required: true, maxLength: 10 })} />
                {errors.username && <p style={{color:'red'}}>Please check the User Name</p>}


            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                {...register("password", { required: true, maxLength: 10 })}/>
                {errors.password && <p style={{color:'red'}}>Please check the Password</p>}

                <button type='submit'>Login</button>

            </form>
        </div>
    )
}

export default Login;