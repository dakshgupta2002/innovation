import React, { useEffect, useState } from 'react'
import axios from 'axios';
import bg from './bg.jpg';
import './list1.css';


export default function List() {   
    
    //the liked dogs come here
    const [urlList, setUrlList] = useState([]);
    //add the liked dogs on liking
    const likeDog = () => {
        if (urlList.indexOf(dogURL) != -1){
            console.log("Already liked");
        }else{
            setUrlList([...urlList, dogURL]);
        }
    }
    
    //fetching the image link for random dogs
    const [dogURL, setDogURL] = useState( () => {
        axios.get("https://dog.ceo/api/breeds/image/random").then( (obj) => {
            setDogURL(obj.data.message);
        })
    });
    const fetch =  () => {
        axios.get("https://dog.ceo/api/breeds/image/random").then( (obj) => {
            setDogURL(obj.data.message);
        })
    }

    //style
    const dogBg = {
        backgroundImage: "url(" + bg +")",
        height: "90vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    const dogPhoto = {
        position: "absolute",
        top: "22%",
        display: "block",
        maxHeight: "65vh",
        maxWidth: "min(80vh, 90vw)",
        marginLeft: "auto",
        marginRight: "auto",        
        boxShadow: "0 10px 10px 0",
        borderRadius: "4%"
    }
    

    return (
        <>
            <div className="dogBg" style={dogBg}>
                
            </div>

            <div className="container d-flex justify-content-center" style = {{alignItems: "center"}}>
                <img src={dogURL} style={dogPhoto} className="dogPhoto" alt="DOG"></img>

                <div style={{position: "Absolute", top:"92%"}}>
                    <button className="btn btn-secondary mx-5" onClick={fetch}>Get Pups</button>
                    <button className="btn btn-danger mx-5" onClick={likeDog}>HEART</button>
                </div>
            </div>

            {/* <Route exact path="likes" element= { <LikedDogs/> }/> */}


        </>
    )
}
