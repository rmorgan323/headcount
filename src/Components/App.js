import React, { Component } from 'react';
import '../css/App.css';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import CardContainer from './CardContainer';
import Search from './Search';
import { findAllMatches } from '../helper';


class App extends Component {
	constructor() {
		super();
		this.state = {
			data: new DistrictRepository(kinderData).findAllMatches()
		}
	}

	searchCards = (string) => {
		const results = new DistrictRepository(kinderData).findAllMatches(string)
		this.setState({data: results})
	}

  render() {
    return (
      <div>
				<Search search={this.searchCards} />
				<CardContainer currentData={this.state.data}
				/>
			</div>
    );
  }
}

export default App;
