import React from 'react'
import  { Redirect } from 'react-router-dom'

export default function Logout() {   
    
    sessionStorage.removeItem('token')
    alert("You are now logged out!");
    window.location.href = "/cards";
    return (        
        <Redirect to="/cards" >
            
        </Redirect>
    )
}