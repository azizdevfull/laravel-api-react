import React, {useState, useEffect} from 'react';
// import { useHistory } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
function Register()
{
    useEffect(() =>{
        if(localStorage.getItem('user-info'))
        {
            navigate('/add');
        }
    }, []);
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    // const history = useHistory();
    const navigate = useNavigate();

    async function signUp() 
    {
        let item = {name,password,email};
            console.warn(item);


            let result = await fetch("http://localhost:8000/api/register",{
                method: 'POST',
                body:JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });

            result = await result.json();
            // console.warn("Result", result);
            localStorage.setItem("user-info", JSON.stringify(result));
            // history.push('/add');
            navigate('/add');
    }
    return(
        <>
        <Header />
        <div className="col-sm-6 offset-sm-3" >
            <h1>Register</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="Name" />
            <br />
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br />
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br />
            <button type="submit" onClick={signUp} className="btn btn-primary">Register</button>
        </div>
        </>
    );
}

export default Register;