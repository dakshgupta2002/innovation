import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login/Login'
import AnimatedText from './components/body/AnimatedText'
import TextAnalyzer from "./components/body/TextAnalyzer.1"
import About from './components/body/about'
import MathGame from "./components/body/MathGame"
import GuessTheNum from './components/body/GuessTheNum';
import List from './components/api/List';
import LikedDogs from './components/api/LikedDogs';
import "jquery";
import "popper.js/dist/umd/popper"
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import ParticlesBackground from './components/particles/ParticlesBackground';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

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
    <div>

      <Routes>
        <Route exact path="/login" element={<> <div style={{ position: 'absolute' }}>
          <ParticlesBackground />
        </div> <Login /> </>
        } />

        <Routes path="/" element={<>

          <Header />
          <About />
          <Footer />

        </>
        } />

        <Route exact path="/math" element={<>

          <Header />
          <MathGame />
          <Footer />

        </>
        } />
        <Route exact path="/text" element={<>

          <Header />
          <TextAnalyzer />
          <Footer />

        </>
        } />
        <Route exact path="/guess" element={<>

          <Header />
          <GuessTheNum />
          <Footer />

        </>
        } />

        <Route exact path="/my-dogs" element={<>
            <Header/>
            <List urlList={urlList} LikeDog={LikeDog} />
            <Footer/> </>} />

        <Route exact path="/my-dogs/likes" element={<>
        <Header/>
        <LikedDogs urlList={urlList} removeLike={removeLike} />
        <Footer/> </>}/>


      </Routes>


    </div>
  );
}

export default App;
