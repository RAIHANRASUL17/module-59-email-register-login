import React, { useState } from "react";
import "./Register.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../firbase/firebase.config";
import { Link } from "react-router-dom";
const auth = getAuth(app);

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  /*_________________________________________________________________*/
  const [email, setEmail] = useState("");
  const handleEmailChange = (event) => {
    //     // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    //     // console.log(event.target.value);
  };
  /*_________________________________________________________________*/

  // submit
  const handleRegisterSubmit = (event) => {
    // 1.prevent refresh
    event.preventDefault();
    // 2.collect from data
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email);
    console.log(password);
    // 3.crease user in firebase(fb)
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        // for clear form
        event.target.reset();
        // for success
        setSuccess("User has created successfully");
        //call handleEmailVerification
        handleEmailVerification(result.user);
      })
      .catch((error) => {
        console.log(error);
        // for red alert console.error
        // console.error(error.message);
        // for error
        setError(error.message);
        // for success
        setSuccess("");
      });
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
    const handleEmailVerification = (cUser) =>{
      sendEmailVerification(cUser)
      .then((result) => {
        console.log(result);
        alert("Please verify your email address");
      });
    };
    /*___________________________________________________________________*/
  };
  return (
    <div className="mx-auto w-50">
      <form onSubmit={handleRegisterSubmit}>
        <h3>Please register</h3>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your PassWord"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Register" />
      </form>

      <small>
        <p>
          Already have an account? Please <Link to="/login">Login</Link>{" "}
        </p>
      </small>
      <div>
        <p>display Error:={error}</p>
        <p className="text-success">display Success= {success}</p>
      </div>
    </div>
  );
};

export default Register;
