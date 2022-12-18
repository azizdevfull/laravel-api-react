import React, {useState, useEffect} from 'react';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";


function Login()
{
    const navigate = useNavigate();
    useEffect(() =>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add');
        }
    }, []);
    return(
        <div>
     <Header />

            <h1>Login </h1>
        </div>
    );
}

export default Login;