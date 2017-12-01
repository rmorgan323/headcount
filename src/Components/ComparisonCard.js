import React from 'react';

const ComparisonCard = ({ loc1, avg1, loc2, avg2, compare }) => {

console.log(loc1)

	return (
	  <div>
	    <h3>{loc1}</h3>
	    <h3>{avg1}</h3>
	    <h3>{loc2}</h3>
	    <h3>{avg2}</h3>
	    <h3>{compare}</h3>
	  </div>
	)
}

export default ComparisonCard;
