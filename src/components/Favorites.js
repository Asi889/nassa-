import React, { useState, useEffect } from 'react';

import MediaCard from './MediaCard';
import axios from 'axios';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('http://localhost:5000/favorites');
    setFavorites(res.data);
  };


  useEffect(() => {
    fetchData()
  }, []);

  const deleteFromFavorites = async (e) => {
    await axios.delete(`http://localhost:5000/favoriteD/${e.target.id}`);
    fetchData()
  }

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.map((s) => (
        <div>
          <MediaCard key={s._id} check={favorites} deleteFromFavorites={deleteFromFavorites} picture={s} />
        </div>
      ))}

    </div>
  );
}
