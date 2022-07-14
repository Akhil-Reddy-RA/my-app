import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Table from './Table';
import Form from './Form';
import Sidebar from './Sidebar';
import {getAllUsers, createUser} from './UserService';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Header from './Header';
import Footer from './Footer';



class Main extends Component {
    state = {
        confirmMsg:"",
        errorMsg:"",
        
        characters: [],
    }
    
    componentDidMount(){
       this.populate()  
    }

    populate() {

      getAllUsers(this.props.isToken.token)
      
      .then(users =>{
        
        if (users.status === 401) {
          
          this.props.deleteToken("Session Timeout, Login Again")
        } 
        if (users.length === 0) {
          this.setState({errorMsg:"Unable to connect to server"})
          
        } else {
          this.setState({characters: users})
          
        }  
      })  
    }

    removeCharacter = (index) => {   
        this.submit(index);     
    }

    submit = (index) => {

        const { characters } = this.state;

        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => this.setState({
                characters: characters.filter((character, i) => { 
                    return i !== index;
                }),
            })
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        })

        return (
            <div className='container'>
              <button onClick={this.submit}>Confirm dialog</button>
            </div>
        )
    }

    render() {
        const { characters,confirmMsg,errorMsg } = this.state
        const {deleteToken} = this.props
        
        return (
            <div className="container">
            
              <Header deleteToken={deleteToken}/>
  
                {confirmMsg && <p style={{color:'green', textAlign:'center'}}>{confirmMsg}</p>}
                {errorMsg && <p style={{color:'red', textAlign:'center'}}>{errorMsg}</p>}
            
            <BrowserRouter>
            <div style={{display:'flex'}}>
            <Sidebar/>
                <Routes>
                
                  <Route path="/" element={<Table characterData={characters} removeCharacter={this.removeCharacter} />}></Route> 
                  <Route path="/Form" element={<Form handleSubmit={this.handleSubmit} />}></Route> 

                </Routes>
                </div>  
            </BrowserRouter>
            
              <Footer/>
              
            </div>
        )
    }

    handleSubmit = (character) => {
      
        createUser(character,this.props.isToken.token).then((data)=>{
            this.populate();
            this.setState({confirmMsg:"User added Successfully!"})
        }).catch((reason)=>{
            
            this.setState({errorMsg:"Unable to connect to server"})
        })
       
    }
}

export default Main;