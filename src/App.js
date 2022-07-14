import React, { Component } from 'react';
import Login from './Login';
import Main from './Main'


class App extends Component {
 
    state = { 
        isToken:"", 
        loginErrorMsg:"",   
    }


    componentDidMount(){
        
        this.setState({isToken:JSON.parse(localStorage.getItem("userToken"))})
    }

    render() {
        const { isToken,loginErrorMsg} = this.state
       
        if(!isToken) {
            
            return <Login setToken={this.setToken}  loginErrorMsg={loginErrorMsg}/>
                
        }
        return (
            <Main isToken={isToken} deleteToken={this.deleteToken} />
        )
    }
   
    setToken = (token)=>  {
        console.log(token)
        this.setState({isToken:token})
        localStorage.setItem("userToken", JSON.stringify(token));
    }

    deleteToken =(loginErrorMsg)=>{
        if(loginErrorMsg){
            this.setState({loginErrorMsg:loginErrorMsg})
        }
        
        localStorage.removeItem("userToken")
        this.setState({isToken:""})

    }
}

export default App;