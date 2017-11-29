import React from 'react';
import '../css/Card.css';


const Card = ({ location, data, id }) => {
  let yearArray = Object.keys(data);
  let mappedYearArray = yearArray.map((year, index)=> {
  return <p key={`${id}-${index}`}>{year}: {data[year]}</p>

  })

  return (
    <div className="card-component">
      <h2>{location}</h2>
      {mappedYearArray}
    </div>
  )
}

export default Card;
