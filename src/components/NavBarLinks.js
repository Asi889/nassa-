import React from 'react';
// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBarLinks() {
  return (
    <div className="navBar">
      <div className="divNavBtn">

    <Link to="/home"> <span className="navBtn">Home </span></Link>
    <Link to="/search"> <span className="navBtn">Search </span></Link>
    <Link to="/favorites"><span className="navBtn">Favorites </span></Link>
    <img id="nasaicon" src="https://img.icons8.com/color/452/nasa.png"></img>
      </div>

</div>
  );
}

export default NavBarLinks;
