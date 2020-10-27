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
        element =
            <div className="card">
                <h1 >{props.picture.title}</h1>
                <img className="cardImg" src={props.picture.image} alt=" " />
                <br></br>

                <button className="likebtn">
                    <div >

                        <img
                            data-description={props.picture.description}
                            data-pic={props.picture.image}
                            data-title={props.picture.title}
                            // name={props.picture.image + " " + props.picture.title + "  " + props.picture.description}
                            onClick={props.addToFavorites}
                            style={{ width: '30px', height: '30px' }}
                            src='https://cdn.onlinewebfonts.com/svg/img_521100.png'
                            className="thumbsup"
                            alt=" "
                        >
                        </img>

                    </div>
                </button>
            </div>
    }

    if (checkURL.includes(homeLink)) {
        element =
            <div className="home">
                 {props.picture.media_type==="video"? <div>
                    <h1 className="homeTitle"> {props.picture.title}</h1>
                    <div ><iframe className="homeImg" src={props.picture.url} alt="" /></div>
                    <div>{props.picture.explanation}</div>
                    </div>
                    : 
                    <div>
                    <h1 className="homeTitle">{props.picture.title}</h1>
                    <div >< img className="homeImg" src={props.picture.url} alt="" /></div>
                    <div>{props.picture.explanation}</div>
                    </div>}
                    
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
