import React, {Component} from "react";
import Header from "./components/Header";
import "./styles.css";
import Main from "./Pages/Main";
import Routes from "./routes";


const App = () => (
  <div className="App">
    <Header /> 
    <Routes />  
  </div>
);

export default App;
