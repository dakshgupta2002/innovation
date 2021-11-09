import React from 'react'

export default function LikedDogs(props) {

    const likedStyle = {
        height: "30%",
        width: "30%",
        margin: "10px",
        display: "inline"
    }

    return (
        <div className="container">
            {
                props.urlList.map( (url) => 
                <>
                    <img src={url} style={likedStyle} alt='Likes'/>
                    <button className="btn btn-danger mx-5" onClick={ () => props.removeLike(url)}>DisHEARTen</button>
                </>
                )
            }
        </div>
    )
}
