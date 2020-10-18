import React, { useState } from 'react'



export default function SearchBar(props) {

    const [input, setInput] = useState('')

    const wordInput = (e) => {
        let newWord = e.target.value
        console.log(newWord);
        setInput(newWord)
    }


    const searchWord = () => {
        props.searchWord(input)
       
    }

    return (
        <div>
            <input className="searchInput" placeholder='Search the universe' onChange={wordInput}></input>
            <button onClick={searchWord}>Search</button>
        </div>

    )
}