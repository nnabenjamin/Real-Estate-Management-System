import React, { useState } from 'react';
import pic from "../images/signinimage.png" 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp(props) {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [study_course,setStudy_course] = useState("");
  const [student_level,setStudent_level] = useState("");
  const [password,setPassword] = useState("");
  const [role,setRole] = useState("student");
const [errorsz,setErrorsz] = useState("");

const navigate = useNavigate();

const onSubmit = async (event) => {
event.preventDefault();

try {
    const response = await axios.post("http://localhost:3001/auth/user/register",{firstName,lastName,email,role,study_course,student_level,password,});
setErrorsz(response.data.message);
if(response.data.message === "Account Created"){
    navigate("/dashboard");
}
} catch (error) {
    console.log(error);
}
}

    return (
        <div className='d-flex'>
            <div className="image overflow-hidden" style={{width: "50%", height: "100vh"}}>
                <img src={pic} alt="..." className='img-fluid'/>
            </div>
            <div className="form- d-flex align-items-center justify-content-center flex-column" style={{width: "50%"}}>
                <Form onSubmit={onSubmit} style={{width: "80%"}} autocomplete="off">
                <h3 className='text-start mb-4'>The world of learning awaits</h3>
                <span style={{color:"red",marginBottom:"10px"}}>{errorsz}</span>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="text" id='firstName' value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Firstname" className='py-1'/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="text" id='lastName' value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Lastname" className='py-1'/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>School Email</Form.Label>
                        <Form.Control type="text" id='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder="e.g yourname@student.babcock.edu.ng" className='py-1'/>
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Course Of Study</Form.Label>
                        <Form.Control type="text" id='study_course' value={study_course} onChange={(event) => setStudy_course(event.target.value)} placeholder="Course Of Study" className='py-1'/>
                    </Form.Group>

                     <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Student Level</Form.Label>
                        <Form.Control type="text" id='student_level' value={student_level} onChange={(event) => setStudent_level(event.target.value)} placeholder="Just write only the number of the level" className='py-1'/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} id='password' placeholder="Password" className='py-1'/>
                    </Form.Group>

                    <span className="mb-3" style={{fontSize: "12px"}}>Already have an account? <Link to="/" className="text-decoration-none" >Login</Link> </span>

                    {/* <Link to="/dashboard"> */}
                        <Button variant="primary w-100 py-3" type="submit" style={{background: "#0043C8"}}>
                            Submit
                        </Button>
                    {/* </Link> */}
                    
                </Form>
            </div>
        </div>
    );
}

export default SignUp;