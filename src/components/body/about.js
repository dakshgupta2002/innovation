import React from 'react'
import { Link } from 'react-router-dom'

export default function about() {
    return (
        <div className="accordion m-5" id="accordionExample" >
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                       <b> Text Analyzer</b>
                    </button>
                </h2>
                <div id="collapseOne" className="container accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Format a paragraph or check your typing speed.<br/></strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    <Link to="/text">Text Analyzer</Link>
                    <br/> <br/>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <b>Game of 2's and 1's</b>
                    </button>
                </h2>
                <div id="collapseTwo" className="container accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>You can either double or reduce the number by one. Can you complete the challenge?<br/></strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    <Link to="/math">Game of 2's and 1's</Link>
                    <br/> <br/>

                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <b>Guess my number.</b>
                    </button>
                </h2>
                <div id="collapseThree" className="container accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Not the random magician guesses, but a particular least amount of guesses to get the number. <br/></strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    <Link to="/guess">Guess the NUmber</Link>
                    <br/> <br/>
                </div>
            </div>

           
        </div>
    )
}
