import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef} from "react";

import { APIClient } from "../utils/axios";

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();



  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ name: nameRef.current.value });


    const data = new FormData();
    data.append("name", nameRef.current.value);
    data.append("email", emailRef.current.value);
    data.append("password", passRef.current.value);


    try {

      const res = await APIClient.post("/user/register/", data);
      console.log({ res });
      window.localStorage.setItem("logindata", JSON.stringify(res.data));


    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="w-25 mt-5">
        <form className="mt-5 p-3 card" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="m-auto">Register</h3>
          <label htmlFor="Name">Name</label>
          <input
            // value={username}
            ref={nameRef}
            className="form-control"
            type="text"
            placeholder="name"
            name="username"
          />
          <label htmlFor="email">Email</label>
          <input
            // value={email}
            ref={emailRef}
            className="form-control"
            type="email"
            placeholder="email"
            name="email"
          />
          <label htmlFor="Name">password</label>
          <input
            // value={password}
            ref={passRef}
            className="form-control"
            type="password"
            placeholder="password"
            name="password"
          />
          <label htmlFor="Name">Conform Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="conform password"
            name="password2"
          />
          <input
            className="form-control mt-2 bg-dark text-white py-2"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;
