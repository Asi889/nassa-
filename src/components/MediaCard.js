import React from 'react';
import { Link } from 'react-router-dom';



function MediaCard(props) {
    let checkURL = window.location.href 
    let homeLink = "home"
    let searchLink = "search"
    let favoritesLink = "favorites"
    let favoriteOneLink = `${props.picture._id}`
    let element = ""

    if (checkURL.includes(searchLink)) {
        // .includes(searchLink)
        console.log(window.location.href);
        console.log("hohoh");
        element =
            <div className="card">
                <h1 >{props.picture.title}</h1>
                <img className="cardImg" src={props.picture.image} alt=" " />
                <br></br>
                <button className="likebtn">
                <img
                    name={props.picture.image + " " + props.picture.title + "  " + props.picture.description}
                    onClick={props.addToFavorites}
                    style={{ width: '30px', height: '30px' }}
                    src='https://cdn.onlinewebfonts.com/svg/img_521100.png'
                    className="thumbsup"
                    alt=" "
                ></img>
                 </button>
            </div>
    }

    if (checkURL.includes(homeLink)) {
        element =
            <div className="home">
                <h1 className="homeTitle" >{props.picture.title}</h1>
                <img className="homeImg" src={props.picture.image} alt=" " />
                <p>{props.picture.description}</p>
            </div>
    }

    if (checkURL.includes(favoritesLink)) {
        element =
            <div className="card">
                <h1 >{props.picture.title}</h1>
                <Link to={`/favorite1/${props.picture._id}`}>
                    <img className="cardImg" src={props.picture.image} alt=" " />
                </Link>
                <br></br>
                <button className="likebtn">

                <img
                    id={props.picture._id}
                    onClick={props.deleteFromFavorites}
                    style={{ width: '30px', height: '30px' }}
                    src='https://cdn.iconscout.com/icon/free/png-256/thumbs-down-14-624867.png'
                    alt=""
                    className="thumbsdown"
                ></img>
                </button>

            </div>
    }

    if (checkURL.includes(favoriteOneLink)) {
        element =
            <div className="favoriteOne">
                <h1 >{props.picture.title}</h1>
                <img className="cardImg" src={props.picture.image} alt=" " />
                <p>{props.picture.description}</p>
                <button>
                <img
                    id={props.picture._id}
                    onClick={props.deleteFromFavorites}
                    style={{ width: '30px', height: '30px' }}
                    src='https://cdn.iconscout.com/icon/free/png-256/thumbs-down-14-624867.png'
                    className="thumbsdown"
                    alt=""
                ></img>
                </button>
                <br></br>
                <Link to='/favorites'>
                    <button>Back</button>
                </Link>

            </div>
    }


    return element
}

export default MediaCard;
