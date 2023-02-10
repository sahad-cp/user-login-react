import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Pages/Login";
import RegistrationPage from "./Pages/RegistrationPage";
import { Routes,Route} from 'react-router-dom';
import Home from "./Pages/Home";


function App() {
  return (
    <div className="App">
      <Routes>
        
          <Route exact path="/" element={<Login/>} />
          <Route path="/register" element={<RegistrationPage/>} />
          <Route path="/home" element={<Home/>} />

        
      </Routes>
    </div>
  );
}

export default App;
