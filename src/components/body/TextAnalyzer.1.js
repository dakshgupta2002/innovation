import Slide from 'react-reveal/Slide';
import React, { useState } from 'react';


export default function TextAnalyzer() {

    const [data, setData] = useState("enter your text");

    const uppercase = () => {
        setData(data.toUpperCase());
    };
    const lowercase = () => {
        setData(data.toLowerCase());
    };
    const bold = () => {
        setData(data);
    };
    const italic = () => {
        setData(data);
    };
    const underline = () => {
        setData(data);
    };
    const clear = () => {
        setData("");
    }
    const typing = (event) => {
        setData(event.target.value)
    }
    return (

        <div className="container">

            <h1>Type your text below to TextAnalyzer it</h1>

            <textarea value={data} rows="10" cols="100" id="text" onChange={typing} />
            <br />
            <span className="container">
                <div>
                    Word Count: <strong>{data.split(" ").length}</strong> and characters are <strong>{data.length}</strong>
                </div>

                <div>
                    {(0.008 * data.split(" ").length).toFixed(2)} minutes read.
                </div>
            </span>
            <br/>

            <div className="btn-group mr-2" role="group" aria-label="First group">

                <div>
                    <Slide top>
                        <button type="button" className="btn btn-primary mx-3" onClick={uppercase}>Uppercase</button>
                        <button type="button" className="btn btn-primary mx-3" onClick={lowercase}>LowerCase</button>
                        <button type="button" className="btn btn-danger mx-3" onClick={clear}>Clear</button>
                        <button type="button" className="btn btn-secondary" onClick={bold}><strong>B</strong></button>
                        <button type="button" className="btn btn-secondary" onClick={italic}><i>I</i></button>
                        <button type="button" className="btn btn-secondary" onClick={underline}><u>U</u></button>
                    </Slide>
                </div>                      
             
            </div>
        </div>
    );
}
