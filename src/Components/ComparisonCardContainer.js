import React from 'react';
import ComparisonCard from './ComparisonCard';
import Card from './Card.js';

	// {console.log(comparisonCards)}
	// {console.log(comparisonActive)}
const ComparisonCardContainer = ({ comparisonCards, comparisonActive, updateCardToCompare }) => {

 
    return (
    	  <div className="comparison-card-container-component">
      {(comparisonCards.map((card, index)=> {
        return <Card location={card.location}
                         data={card.data}
                          key={index}
                           id={index}
          updateCardToCompare={updateCardToCompare}
        />
      }))}
      </div>
    )
  
}






export default ComparisonCardContainer;
