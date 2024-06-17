import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './filter.scss';
import { listData } from '../../lib/dummydata'; 

const Filter = ({ onFilter }) => {
  const [query, setQuery] = useState({
    location: '',
   
  });

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.location.trim() === '') {
      alert('Please enter a location before searching.');
      return;
    }
    
    const filteredData = listData.filter((item) => {
      return (
        (!query.location || item.address.toLowerCase().includes(query.location.toLowerCase())) 
        
      );
    });

    onFilter(filteredData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevQuery) => ({
      ...prevQuery,
      [name]: value,
    }));
  };

  return (
    <div className='filter'>
      <h1>Search results for <b>{query.location || 'City'}</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="location"
            placeholder='City Location'
            value={query.location}
            onChange={handleChange}
          />
        </div>
      </div>
      
      
       


        <button onClick={handleSearch}>
          <img src="search.png" alt="Search" />
        </button>
      </div>
    
  );
};

export default Filter;
