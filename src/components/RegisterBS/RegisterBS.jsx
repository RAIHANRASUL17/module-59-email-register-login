import React from "react";

const RegisterBS = () => {
    const handleRegisterFrom = (event) =>{
        event.preventDefault()
        const email= event.target.email.value;
        console.log(email)
        const password= event.target.password.value;
        console.log(password)
    }
  return (
    <div className="mx-auto w-50">
        <h3 className="my-3">Please Register With BS</h3>
        <form onSubmit={handleRegisterFrom}>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" name="email" className="form-control ps-4 " id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name="password" className="form-control ps-4" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
};

export default RegisterBS;
