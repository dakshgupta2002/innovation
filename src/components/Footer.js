import React from 'react'

export default function Footer() {

    const state = {
        custName: "daksh"
    };
    const foot = {
        "width": "100%",
         "minHeight": "30vh",
         "backgroundColor": "Black",
         "color": "white",
         "fontSize" : "20px",
         "fontFamily" : "Helvetica",
         "left":"0px",
         "right":"0px",
    };
    return (
        <div className="mt-5" style = {foot}> {state.custName}</div>
    )
}
