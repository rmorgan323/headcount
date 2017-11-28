import React from 'react';


const Card = ({ location, data, id }) => {
  let yearArray = Object.keys(data);
  let mappedYearArray = yearArray.map((year, index)=> {
  return <p key={`${id}-${index}`}>{data[year]}</p>

  })

  return (
    <div>
      <h1>{location}</h1>
      {mappedYearArray}
    </div>
  )
}


export default Card;












// <div>
//   <h2>{location}</h2>
//   <h3>2004: {data[2004]}</h3>
//   <h3>2005: {data[2005]}</h3>
//   <h3>2006: {data[2006]}</h3>
//   <h3>2007: {data[2007]}</h3>
//   <h3>2008: {data[2008]}</h3>
//   <h3>2009: {data[2009]}</h3>
//   <h3>2010: {data[2010]}</h3>
//   <h3>2011: {data[2011]}</h3>
//   <h3>2012: {data[2012]}</h3>
//   <h3>2013: {data[2013]}</h3>
//   <h3>2014: {data[2014]}</h3>
// </div>
