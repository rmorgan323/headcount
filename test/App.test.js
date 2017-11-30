import React from 'react';
import ReactDOM from 'react-dom';
import App from './../src/Components/App';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import DistrictRepository from './../src/helper';
import kinderData from './../data/kindergartners_in_full_day_program.js';



describe('App tests', () => {
  let renderedApp;

  beforeEach(() => {
    renderedApp = shallow(<App />);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
})

  it.skip('should match snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  })

  it('Should render the correct components', () => {
  // const renderedApp = shallow(<App />);
  const foundCardContainer = renderedApp.find('CardContainer');
  const foundSearch = renderedApp.find('Search');
  const foundComparisonCardContainer = renderedApp.find('ComparisonCardContainer');

  expect(foundCardContainer.length).toEqual(1);
  expect(foundSearch.length).toEqual(1);
  expect(foundComparisonCardContainer.length).toEqual(1);
  })

  it('App should have a default state for comparison cards', () => {

    expect(renderedApp.state('comparisonCards')).toEqual([])
  })

  it('App should have a default state for comparison', () => {

    expect(renderedApp.state('comparison')).toEqual({})
  })

  it('App should have a default state for the kinder data', () => {
    const newData =  new DistrictRepository(kinderData).findAllMatches()

    expect(renderedApp.state('data')).toEqual(newData)
  })


})
