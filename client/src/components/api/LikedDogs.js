import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function LikedDogs(props) {

    const likedStyle = {
        height: "30%",
        width: "30%",
        margin: "10px",
        display: "inline"
    }

    return (
        <div className="container" style={{ minHeight: "50vh", marginTop: "5%" }}>

            {
                props.urlList.length == 0 ? <>
                    <h3>Your <b>liked</b> list is empty :(</h3><br />
                    <Link to="/my-dogs" class ="btn btn-success" style={{fontSize: "larger"}}>Find dogs</Link></>
                     : ""
            }
            {
                props.urlList.map((url) =>
                    <>
                        <img src={url} style={likedStyle} alt='Likes' />
                        <button className="btn btn-danger mx-5" onClick={() => props.removeLike(url)}>DisHEARTen</button>
                    </>
                )
            }
        </div>
    )
}
