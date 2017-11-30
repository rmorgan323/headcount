import React from 'react';
import '../css/Card.css';

// let colorDisplay = () => {
//   if (Number(data[year]) > .5) {
//     return ( <span className="info-span">{year}:{data[year]} </span> )
//   } else {
//     return ( <span className="info-span color-green">{year}:{data[year]} </span> )
//   }


const Card = ({ location, data, id, updateCardToCompare }) => {
  let yearArray = Object.keys(data);
  let mappedYearArray = yearArray.map((year, index)=> {

  return  <p key={`${id}-${index}`}>
            <span className="info-span color-green">{year}:</span>{data[year]} 
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
