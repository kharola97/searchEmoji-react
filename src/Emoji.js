import React, { useState } from 'react';
import axios from 'axios';
import './Emoji.css';

function Emoji() {
  const [search, setSearch] = useState('');
  const [emoji, setEmoji] = useState([]);

  const fetchEmoji = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://emoji-api.com/emojis?search=${search}&access_key=4d05cabe670a38ffa39221d160afe11d63b3c7c5`
      );
      setEmoji(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="container">
        <div className='top'>
      <h1>Search for emoji</h1>
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search for emojis..."
        />
        <button onClick={fetchEmoji}>Search</button>
      </div>
      </div>
      <div className="emoji-container">
        {emoji.map((emoji) => (
          <div className="card" key={emoji.slug}>
            <div className="card-content">
              <div className="emoji">{emoji.character}</div>
              <div className="emoji-name">{emoji.slug}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Emoji;
