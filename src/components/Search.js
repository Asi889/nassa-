import React from 'react';
import { useState } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import MediaCard from './MediaCard';


function Search() {

    const [searchPics, setSearchPics] = useState([]);

    const search = async (word) => {
        const data = await axios.get(`https://images-api.nasa.gov/search?q=${word}`)
        let newSearchArr = [];
        let dataArr = data.data.collection.items

        dataArr
            .filter(i => i.data[0].media_type === "image")
            .map(i =>
                newSearchArr.push({
                    title: i.data[0].title,
                    image: i.links[0].href,
                    description: i.data[0].description
                })
            )

        setSearchPics(newSearchArr);
        
    };

    const addToFavorites = async (e) => {
       
        let newFavoret = {
            title: e.target.getAttribute('data-title'),
            image: e.target.getAttribute('data-pic'),
            description: e.target.getAttribute('data-description'),
            inFavorite: true
        }
        await axios.post('http://localhost:5000/favorite', newFavoret)
    };
    console.log(searchPics)
    return (
        <div>
            <SearchBar searchWord={search} />           
            {searchPics.length<=0 &&(<img id="spaceimg" src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"></img>)}
            
            <div >
                {searchPics.map((i, u) => (
                    <div>
                        <MediaCard key={i.title} addToFavorites={addToFavorites} picture={i} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
