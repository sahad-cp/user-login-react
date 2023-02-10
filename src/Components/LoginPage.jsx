import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from 'react';
import { APIClient } from '../utils/axios';


function LoginPage() {
  const emailRef = useRef();
  const passRef = useRef();

  async function handleSubmit(e){
    e.preventDefault();
    console.log({email: emailRef.current.value });

    const data = new FormData();
    data.append("email", emailRef.current.value);
    data.append("password", passRef.current.value);

    try{
      const response = await APIClient.post('/user/login/', data);
      console.log({response});
       window.localStorage.setItem("login", JSON.stringify(response.data));

    }
    catch(error){
      console.log({error});
    }

  }
  
  return (

    <div className="w-100 d-flex justify-content-center">
      <div className="w-25 mt-5">
        <form className="mt-5 p-3 card" onSubmit={(e)=> handleSubmit(e)}>
          <h3 className="m-auto">Login</h3>
          
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            ref={emailRef}
            type="email"
            placeholder="email"
            name="email"
          />
          <label htmlFor="Name">password</label>
          <input
            className="form-control"
            ref={passRef}
            type="password"
            placeholder="password"
            name="password"
          />
          <input
            className="form-control mt-2 bg-dark text-white py-2"
            type="submit"
            value="login"
          />
        </form>
      </div>
    </div>
  )
}

export default LoginPage
