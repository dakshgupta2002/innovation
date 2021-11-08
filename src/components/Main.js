import React from 'react'
//npm i react-router-dom
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TextAnalyzer from "./body/TextAnalyzer.1"
import About from './body/about'
import MathGame from "./body/MathGame"
import AnimatedText from './body/AnimatedText'
import GuessTheNum from './body/GuessTheNum';
import List from './api/List'
import LikedDogs from './api/LikedDogs'
export default function main() {
    const bodyStyle = {
        minHeight: "70vh"
    }
    return (
        <div style= {bodyStyle}>
            <AnimatedText/>   

            <Routes>
                <Route exact path="/about" element={  <About/> } /> 
                <Route exact path="/math" element={  <MathGame/> } />
                <Route exact path="/text" element={  <TextAnalyzer/> } />    
                <Route exact path="/guess" element = { <GuessTheNum/> } />                         
                <Route exact path="/my-dogs" element = {<List/> } />
                <Route exact path="/my-dogs/liked" element = {<LikedDogs/> } />
            </Routes>


        </div>


    )
}
