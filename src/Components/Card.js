import React from 'react';
import '../css/Card.css';


const Card = ({ location, data, id, updateCardToCompare }) => {
  let yearArray = Object.keys(data);
  let mappedYearArray = yearArray.map((year, index)=> {
  return  <p key={`${id}-${index}`}>
            <span className="info-span">{year}:</span>{data[year]}
          </p>
  })

  return (
    <div onClick={() => updateCardToCompare(location)}
       className="card-component">

      <h2>{location}</h2>
      <hr />
      <div className="card-info-block">
        {mappedYearArray}
      </div>
    </div>
  )
}

export default Card;
