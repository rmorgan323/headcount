import React from 'react';
import ComparisonCard from './ComparisonCard';
import Card from './Card.js';


class ComparisonCardContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.comparisonCards.length === 2 && nextProps.comparisonCards !== this.props.comparisonCards) {
			this.props.populateComparisonCard(nextProps.comparisonCards[0].location, nextProps.comparisonCards[1].location)
		} else if (nextProps.comparisonCards.length !== 2 && nextProps.comparisonCards !== this.props.comparisonCards) {
			this.props.resetComparison();
		}
	}

	render() {
    return (
    	  <div className="comparison-card-container-component">
      {(this.props.comparisonCards.map((card, index) => {
        return <Card location={card.location}
                         data={card.data}
                          key={index}
                           id={index}
          updateCardToCompare={this.props.updateCardToCompare}
        />
      }))}
      <ComparisonCard />
      <button onClick={ this.props.clearComparisons }
            className="clear-button">Clear
      </button>
      </div>
    )
  }
}







export default ComparisonCardContainer;
