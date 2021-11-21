import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';

export default function GuessTheNum() {

    const [number, setNumber] = useState(((Math.random() * 500) + 1).toFixed(0));

    // const binSearch = () => {
    //     var movessAllowed = 0;
    //     var hi=500, lo=0;
    //     var mid = Math.floor((hi-lo)/2);

    //     while(mid != number){
    //         mid = Math.floor((hi-lo)/2);
    //         movessAllowed=parseInt(movessAllowed)+1;
    //         if (mid>number){
    //             lo=pareInt(mid)-1;
    //         }else if(mid<number){
    //             lo=parseInt(mid)+1;
    //         }
    //     }
    //     console.log(number, movessAllowed);
    //     return movessAllowed;
    // }
    
    // const [movesAll, setMovesAll] = useState(binSearch());



    return (
        <div className="container" style={{ minHeight: "50vh", marginTop: "5%" }}>          

            <div>
                <Slide left>
                    <h1>Can you guess my {number} between 1 to 500</h1>
                </Slide>
            </div>

            <br/>

            <div className="d-flex justify-content-between">
                <h6  className="d-inline">You have used: <span>click</span></h6> 
                <h6  className="d-inline">You can use: <span>movesAllowed</span></h6> 
                <h6>Moves: <span>moves</span></h6>
            </div>
            
            <br /><br />
            
            <form>
                <input type="number"></input> <button className="btn btn-success">Submit</button>


            </form>
        </div>
    )
}
