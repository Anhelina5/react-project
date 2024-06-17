import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchBar.scss';

function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const defaultLocation = "defaultCity"; 
    navigate(`/list?location=${encodeURIComponent(defaultLocation)}`);
  };

  return (
    <div className='searchBar'>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
