import React, { Component } from 'react';
import '../css/App.css';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import CardContainer from './CardContainer';
import Search from './Search';
import { findAllMatches, findByName } from '../helper';
import ComparisonCardContainer from './ComparisonCardContainer'

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: new DistrictRepository(kinderData).findAllMatches(),
			comparisonCards: [],
			comparison: {}
		}
	}

	updateCardToCompare = (card) => {
		const currentComparison = this.state.comparisonCards
		const newComparison = new DistrictRepository(kinderData).findByName(card)
		let foundCard = this.state.comparisonCards.find(card => {
			return card.location === newComparison.location
		})

		if (foundCard === undefined) {
			foundCard = {location: ''}
		}

		if (foundCard.location === newComparison.location) {
			const cardToKeep = this.state.comparisonCards.filter(card => {
				return card.location !== newComparison.location
			})
			this.setState({comparisonCards: cardToKeep})
			document.querySelector('.error-message').innerText = '';

		} else {
				if (this.state.comparisonCards.length === 2) {
					document.querySelector('.error-message').innerText = 'You idiot';
			} else {
				this.setState({comparisonCards: [...currentComparison, newComparison]})
			}
		}
		//
		// if(this.state.comparisonCards.length === 2) {
		// this.populateComparisonCard()
		// }
	}


	searchCards = (string) => {
		const results = new DistrictRepository(kinderData).findAllMatches(string)
		this.setState({data: results})
	}

	clearComparisons = () => {
		this.setState({comparisonCards: []})
	}

	// populateComparisonCard() {
	// 	const loc1 = this.state.comparisonCards[0];
	// 	const loc2 = this.state.comparisonCards[1];
	// 	const comparison = new DistrictRepository(kinderData).compareDistrictAverages(loc1, loc2)
	//
	// 	this.setState({comparison: comparison})
	// }


  render() {
    return (
      <div>
				<Search search={this.searchCards} />
				<ComparisonCardContainer comparisonCards={this.state.comparisonCards}
																comparisonActive={this.state.comparisonActive}
														 updateCardToCompare={this.updateCardToCompare}
														 clearComparisons={this.clearComparisons}
																	/>
				<h1 className="error-message"></h1>
				<CardContainer currentData={this.state.data}
							 updateCardToCompare={this.updateCardToCompare}
									/>
			</div>
    );
  }
}

export default App;
