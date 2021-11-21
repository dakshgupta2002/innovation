import React, { useState, useEffect, useRef } from 'react';
import Slide from 'react-reveal/Slide';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
export default function MathGame() {

    const challDiv = useRef(null);

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

    const newChallenge = () => {
        changeChallenge(((Math.random() * 500) + 1).toFixed(0));
        refresh();

    }


    const [challenge, changeChallenge] = useState(((Math.random() * 500) + 1).toFixed(0));
    const [moves, changeMoves] = useState(0);
    const [click, changeClick] = useState(1);


    const middleFunction = () => {
        var n = challenge;

        var ma = 0;
        while (n > 1) {
            if (n % 2 === 0) {
                n = parseInt(n) / 2;
                ma = parseInt(ma) + 1;
            } else {
                n = parseInt(n) + 1;
                ma = parseInt(ma) + 1;
            }
        }
        return (ma);
    };
    const solution = () => {
        var n = challenge;
        var sol = [n];

        while (n > 1) {

            if (n % 2 === 0) {
                n = parseInt(n) / 2;
            } else {
                n = parseInt(n) + 1;
            }

            sol.push(n);
        }
        return sol.reverse();
    }

    const [movesAllowed, changeMovesAllowed] = useState(middleFunction());
    const [solArray, setSolArray] = useState(solution());

    useEffect(() => {

        if (click == challenge) {

            toast.success(<>🦄Wow so easy!<br /><b>You took {moves} moves</b> <br />
                <Button className="mx-1 my-1" variant="contained" onClick={newChallenge}>New challenge</Button>
                <Button className="mx-1 my-1" variant="contained" onClick={refresh}>Restart</Button></>, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });   //window.alert(moves)


        }
    }, [click, challenge, moves]);

    useEffect(() => {
        changeMovesAllowed(middleFunction);
        setSolArray(solution());
    }, [movesAllowed, middleFunction, solArray, solution])

    useEffect(() => {
        if (moves >= movesAllowed && click != challenge) {
            toast.error(<>You lost the game. Restarting the level.
                <br />
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <b>View Solution</b>
                </button>
            </>, {
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
        <div className="container" style={{ minHeight: "70vh", paddingTop: "5%", maxWidth: "90%" }}>

            <div>
                <Slide left>
                    <h1>Can you reach to {challenge}</h1>
                </Slide><br />
                <h6 className="d-inline">You're currently at: <span style={clickCount}>{click}</span></h6>
            </div>

            <hr />

            <div className="d-flex justify-content-between">

                <h6>Moves used <span style={clickCount}>{moves}</span></h6>
                <h6 className="d-inline">Moves Allowed <span style={clickCount}>{movesAllowed}</span></h6>
            </div>

            <br /><br />
            <div className="d-flex justify-content-center">
                <Button className="mx-1 my-3" variant="contained" color="success" onClick={dub}>Double</Button>
                <Button className="mx-1 my-3" variant="outlined" color="error" onClick={decrement}>Decrease by 1</Button> <br />
            </div><br/>
            <div className="d-flex justify-content-center">
                <Button className="mx-1 my-3" variant="contained" onClick={refresh}>Retry</Button>
                <Button className="mx-1 my-3" variant="contained" onClick={newChallenge}>New challenge</Button>
            </div>

            <div className="accordion my-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>View Solution</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="container accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex overflow-auto">
                            {solArray.map(function (num) {
                                return <>
                                    <h6 className="m-1"> {num} -{'>'} </h6>
                                </>;
                            })}
                            VICTORY
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}
