import React from 'react';
import './Home.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  return (
    <div>
     
      <div className="w-100 d-flex justify-content-center ">
        <div className="w-25 mt-5 card bg-dark">
          <div className="mx-auto profile mt-5">
            <img
              src='/images/Profile'
              alt=""
            />
          </div>
          <div className="w-100 d-flex justify-content-center">
            <h4 className="mx-auto text-white">Username</h4>
          </div>
          <h1 className="mx-auto my-3 text-white">WELCOME</h1>
        </div>
      </div>
    </div>
  );
}

export default Home
