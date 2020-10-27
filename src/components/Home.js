import React, { useState, useEffect } from 'react';
import MediaCard from './MediaCard';
import axios from 'axios';

function Home() {
    const [pictureData, setPictureData] = useState([]);

    useEffect(() => {
        (async () => {
            const starData = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=PP8V4Kpt9zDxPUG6jDC2cAHzVAFa6CDw8SB1iYv1`)

            setPictureData(starData.data);

        })()
    }, [])

    return (
        <div>
            <MediaCard key={pictureData.title} picture={pictureData} />
        </div>
    );
}

export default Home;
