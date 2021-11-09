import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import AnimatedText from './components/body/AnimatedText'
import "jquery";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react';

function App() {
    
  return (
    <div >  
  
      <Header />  
      <AnimatedText /> 
      <Main/> 
      <Footer/>

    </div>
  );
}

export default App;
