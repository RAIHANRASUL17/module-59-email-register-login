import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../../firbase/firebase.config";
// const auth = getAuth(app);

const handleRegister = (event) => {
  // 1.prevent refresh
    event.preventDefault()
    // 2.collect from data
    const email= event.target.email.value;
    const password= event.target.password.value
    console.log(email, password)
    // // 3.crease user in firebase(fb)
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((result)=>{
    // const loggedUser = result.user;
    // console.log(loggedUser)
    // })
    // .catch((error)=>{
    //   console.log(error)
    //   // for red alert console.error
    //   console.error(error)
    // })
};

const RegisterRBS = () => {
  return (
    <div className="mx-auto w-50">
      <h1 className="mx-auto">Please Register!!!</h1>

      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterRBS;
