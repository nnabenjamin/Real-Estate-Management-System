import React, { useState } from 'react';
import pic from "../images/signinimage.png" 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate,Navigate } from 'react-router-dom';
import axios from "axios";
import { useCookies} from "react-cookie";

function SignIn(props) {
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [errorsz,setErrorsz] = useState("");

const [cookie,setCookies] = useCookies(["access_token"]);

const navigate = useNavigate();

// if (cookie.access_token) {
//    return <Navigate to="/dashboard" />;
//     }
const HandleSubmit = async (event) =>{
  event.preventDefault();

  try {
   const response =  await axios.post("http://localhost:3001/auth/user/login",{email,password,});

setCookies("access_token",response.data.token);
window.localStorage.setItem("userID", response.data.userID);
setErrorsz(response.data.message);
if(response.data.token !== "" && response.data.token !== undefined){
   navigate("/dashboard");
}else{
    navigate("/");
}
  } catch (error) {
   console.log(error);
  }}

    return (
        <div className='d-flex'>
            <div className="image overflow-hidden" style={{width: "50%", height: "100vh"}}>
                <img src={pic} alt="..." className='img-fluid'/>
            </div>
            <div className="form- d-flex align-items-center justify-content-center flex-column" style={{width: "50%"}}>
                
                <Form style={{width: "80%"}} onSubmit={HandleSubmit}>
                <h3 className='text-start mb-4'>The world of learning awaits</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>School Email/Matric No</Form.Label>
                        <Form.Control type="text" id='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="e.g yourname@student.babcock.edu.ng or 00/1234" className='py-3'/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id='password' value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className='py-3'/>
                    </Form.Group>
<span className="mb-4" style={{fontSize: "12px"}}>Don't have an account? <Link to="/signup" className="text-decoration-none" >Sign Up</Link> </span>
                    {/* <Link to="/dashboard"> */}
                        <Button variant="primary w-100 py-3" type="submit" style={{background: "#0043C8"}}>
                            Submit
                        </Button>
                    {/* </Link> */}
                    
                </Form>
                {errorsz}
            </div>
        </div>
    );
}

export default SignIn;