import React, { useState } from 'react'
//npm i react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextAnalyzer from "./body/TextAnalyzer.1"
import About from './body/about'
import MathGame from "./body/MathGame"
import GuessTheNum from './body/GuessTheNum';
import List from './api/List';
import LikedDogs from './api/LikedDogs';
import ParticlesBackground from './particles/ParticlesBackground';

export default function Main() {

    //the liked dogs come here
    const [urlList, setUrlList] = useState([]);
    //add the liked dogs on liking
    const LikeDog = (dogURL) => {
        if (urlList.indexOf(dogURL) != -1) {
            console.log("Already liked");
        } else {
            setUrlList([...urlList, dogURL]);
        }
    }
    const removeLike = (url) => {
        setUrlList(urlList.filter(findUrl => findUrl != url));
    }

    return (

        <div style={{ minHeight: "70vh" }}>
            {/* <div style={{ position: 'absolute', zIndex: "1" }}>
                <ParticlesBackground />
            </div> */}

            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/math" element={<MathGame />} />
                <Route exact path="/text" element={<TextAnalyzer />} />
                <Route exact path="/guess" element={<GuessTheNum />} />
                <Route exact path="/my-dogs" element={<List urlList={urlList} LikeDog={LikeDog} />} />
                <Route exact path="/my-dogs/likes" element={<LikedDogs urlList={urlList} removeLike={removeLike} />} />
            </Routes>


        </div>
    )
}
