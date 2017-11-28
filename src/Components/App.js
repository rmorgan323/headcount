import React, { Component } from 'react';
// import css from '../css/App.css';
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper';
import CardContainer from './CardContainer';
import Search from './Search';
import { findAllMatches } from '../helper';


class App extends Component {
	constructor() {
		super();
		this.state = {
			data: new DistrictRepository(kinderData)
		}
	}

	// componentDidMount() {
	// 	const dataArray = findAllMatches();
	// 	this.setState({data: dataArray})
	// 	console.log(this.state);
	// }

  render() {
    return (
      <div>
				<Search />
				<CardContainer allData={this.state.data}
				/>
			</div>
    );
  }
}

export default App;
