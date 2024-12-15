import React from 'react';

function Search() {
  return (
    <div className="search">
      <h1>Search</h1>
      <div className="search__content">
        <input 
          type="text" 
          placeholder="What do you want to listen to?"
          className="search__input"
        />
        {/* Add search results here */}
      </div>
    </div>
  );
}

export default Search; 