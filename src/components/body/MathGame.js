import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default function MathGame() {    
    
    const clickCount = {
        fontSize: "30px",
        fontWeight: "bolder"
    }

    const dub = () => {

        changeClick(click * 2);
        changeMoves(moves + 1);
    };
    const decrement = () => {
        changeClick(click - 1);
        changeMoves(moves + 1);
    };
    const refresh = () => {
        changeClick(1);
        changeMoves(0);
    };
    

    
    const [challenge, changeChallenge] = useState(((Math.random() * 500) + 1).toFixed(0));
    const [moves, changeMoves] = useState(0);
    const [click, changeClick] = useState(1);
    
    const middleFunction =  () => {
        var n = challenge;
        
        var ma = 0; 
        while(n>1){
            //console.log(n)
            if (n%2 === 0){
                n=parseInt(n)/2;
                ma= parseInt(ma)+1;
            }else{
                n = parseInt(n)+1;
                ma = parseInt(ma)+1;
            }
        }        
        return (ma);
    };

    const [movesAllowed, changeMovesAllowed] = useState(middleFunction());
    
    useEffect(() => {       

        if (click == challenge){
            
            toast.success(`🦄 Wow so easy!\nYou took ${moves} moves`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
            });   //window.alert(moves)
            
            
            refresh();
            changeChallenge(((Math.random() * 500) + 1).toFixed(0));
            
           
        }
    }, [click, challenge, moves]);
    
    useEffect(() => {
        changeMovesAllowed(middleFunction);
    }, [movesAllowed, middleFunction])

    useEffect( () => {
        if (moves >= movesAllowed && click!=challenge){
            toast.error(`You lost the game. Restarting the level.`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            refresh();
        }
        
    }, [moves, click, movesAllowed, challenge])
    

    
    return (
        <div className="container">          

            <div>
                <Slide left>
                    <h1>Can you reach to {challenge}</h1>
                </Slide>
            </div>

            <br/>

            <div className="d-flex justify-content-between">
                <h6  className="d-inline">You're currently at: <span style={clickCount}>{click}</span></h6> 
                <h6  className="d-inline">You can use: <span style={clickCount}>{movesAllowed}</span></h6> 
                <h6>Moves: <span style={clickCount}>{moves}</span></h6>
            </div>
            
            <br /><br />
            <button className="btn btn-outline-primary mx-4" onClick={dub}>Double</button>
            <button className="btn btn-outline-primary mx-4" onClick={decrement}>Decrease by 1</button>
            <button className="btn btn-danger mx-4" onClick={refresh}>Restart</button>
        </div>
    );
}
