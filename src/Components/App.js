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
			comparisonActive: false
		}
	}

	addComparisonCard = (card) => {
		let currentComparison = this.state.comparisonCards
		let newComparison = new DistrictRepository(kinderData).findByName(card)
		this.setState({comparisonCards: [...currentComparison, newComparison]})
	}

	searchCards = (string) => {
		const results = new DistrictRepository(kinderData).findAllMatches(string)
		this.setState({data: results})
	}

	clearComparisons() {
		this.setState({comparisonCards: [], comparisonActive: false})
	}

  render() {
    return (
      <div>
				<Search search={this.searchCards} />
				<ComparisonCardContainer comparisonCards={this.state.comparisonCards}
																comparisonActive={this.state.comparisonActive}

																	/>
				<CardContainer currentData={this.state.data}
								 addComparisonCard={this.addComparisonCard}
									/>
			</div>
    );
  }
}

export default App;
