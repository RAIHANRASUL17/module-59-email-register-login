import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// step-3: import sign in part
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firbase/firebase.config";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
/*________________________________________________________________*/
// forget password : useRef import from 'react'
const emailRef= useRef()
// emailRef have to use email input field
/*________________________________________________________________*/
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    /*___________________________________________________________________*/
    // password validation
    setError("");
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("please at least two upperCase");
      return;
    } else if (!/(?=.*[0-9]*[0-9])/.test(password)) {
      setError("please at least two numbers");
      return;
    } else if (password.length < 6) {
      setError("please add at lest 6 characters in your password");
      return;
    } else if (!/(?=.[!@#$&*])/.test(password)) {
      setError("please add special character(! @) # $ & *");
      return;
    }
    /*___________________________________________________________________*/
    //   step-3: set firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        // setError
        setError("");
        // setSuccess
        setSuccess("The user has successfully logged in");
                // for clear form
                event.target.reset()
      })
      .catch((error) => {
        console.log(error);
        // setError
        setError(error.message);
      });
  };
// forget password
const handleResetPassword = (event) =>{
  console.log(emailRef.current.value)
  const email= emailRef.current.value
  if(!email){
    alert('please provide your email address to reset password')
    return;
  }
sendPasswordResetEmail(auth, email)
.then(()=>{
  alert("please check your password 'Ammar & Ukil'")
})
.catch((error)=>{
console.log(error.message)
})
}
  return (
    <div className="mx-auto w-25">
      <h2 className="my-3 d-flex justify-content-center">This is login page</h2>
      <h3 className="d-flex justify-content-center">Please login!!!</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
                        // forgetPassword
                        ref={emailRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <small>
        <p>
  
          New to this website? Please <Link to="/register">Register</Link>{" "}
        </p>
      </small>
      <p>Forget Password? Please Reset <button onClick={handleResetPassword} className="btn btn-danger">Reset-Password</button></p>
      <div>
        <p className="text-danger">Display Error= {error}</p>
        <p className="text-success">display success= {success}</p>
      </div>
    </div>
  );
};

export default Login;
