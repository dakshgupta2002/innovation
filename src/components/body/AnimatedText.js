import React from 'react'
import Typing from 'react-typing-animation';

export default function AnimatedText() {

    const AnimatedComponent = () => (
        <Typing loop={true}>
            <span>Maths & Algebra</span>
            <Typing.Delay ms={1000}/>
            <Typing.Backspace count={20} speed={10}/>
            <span>Algorithms</span>
            <Typing.Delay ms={1000}/>
            <Typing.Backspace count={20} speed={10}/>
            <span>Problem Solving</span>
            <Typing.Delay ms={1000}/>
            <Typing.Backspace count={20} speed={10}/>
        </Typing>
    );
    return (
        
        <div className="container">
            <AnimatedComponent/> <hr/>  
  
        </div>
    )
}
