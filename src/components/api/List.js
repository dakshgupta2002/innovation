import React, { useState } from 'react'
import axios from 'axios';
import bg from './bg.jpg';
import './list1.css';


export default function List(props) {

    //fetching the image link for random dogs
    const [dogURL, setDogURL] = useState(() => {
        axios.get("https://dog.ceo/api/breeds/image/random").then((obj) => {
            setDogURL(obj.data.message);
        })
    });
    const fetch = () => {
        axios.get("https://dog.ceo/api/breeds/image/random").then((obj) => {
            setDogURL(obj.data.message);
        })
    }

    //style
    const background = {
        backgroundImage: "url(" + bg + ")",
        height: "90vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display:"block",
        justifyContent: "center",
        alignItems: "center"
    }
    const dogPhoto = {
        position: "relative",
        maxHeight: "65vh",
        maxWidth: "min(80vh, 90vw)",
        marginLeft: "auto",
        marginRight: "auto",
        boxShadow: "0 5px 10px 0",
        borderRadius: "4%",
        marginRight: "50px",
        flex: "1"
    }


    return (
    
        <div style={background}>
            <div className="dogBg container d-flex justify-content-center">
                
                <div  className="dogPhoto container"><img src={dogURL} style={dogPhoto} alt="DOG"></img></div>

                <div className="container">
                    <button className="btn btn-secondary mx-5" onClick={fetch}>Get Pups</button>
                    <button style={{flex: "1"}} className="btn btn-danger mx-1" onClick={() => props.LikeDog(dogURL)}>HEART</button>
                </div>
            </div>
        </div>

    )
}
