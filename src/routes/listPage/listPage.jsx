import React, { useState } from 'react';
import { listData } from '../../lib/dummydata';
import './listPage.scss';
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";

function ListPage() {
  const [filteredData, setFilteredData] = useState(listData);

  const handleFilter = (data) => {
    setFilteredData(data);
  };

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter onFilter={handleFilter} />
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={filteredData} />
      </div>
    </div>
  );
}

export default ListPage;
