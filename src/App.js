import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import "jquery";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';


function App() {
    
  return (
    <div>    
      <Header />   
      <Main/> 
      <Footer/>
    </div>
  );
}

export default App;
