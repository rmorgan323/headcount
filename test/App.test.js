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

  it('should match snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  })

  it('Should render the correct components', () => {
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

    expect(renderedApp.state('comparison')).toEqual(null)
  })

  it('App should have a default state for the kinder data', () => {
    const newData =  new DistrictRepository(kinderData).findAllMatches()

    expect(renderedApp.state('data')).toEqual(newData)
  })

  it('should display number of cards according to search results', () => {
    let mountedApp = mount(<App/>)
    let input = mountedApp.find('input');

    input.simulate('change', {target: {value: 'br'} });
    expect(mountedApp.state('data').length).toEqual(4)
  })

  it('App state should change if cards are selected to be compared', () => {
    let mountedApp = mount(<App/>)
    let card = mountedApp.find('.card-component').at(1)

    expect(mountedApp.state('comparisonCards')).toEqual([])
    card.simulate('click')
    expect(mountedApp.state('comparisonCards').length).toEqual(1)
  })

  it.skip('should not allow comparisonCards array to have a length greater than two', () => {
    let mountedApp = mount(<App/>)
    let card1 = mountedApp.find('.card-component').at(1)
    let card2 = mountedApp.find('.card-component').at(2)
    let card3 = mountedApp.find('.card-component').at(3)

    expect(mountedApp.state('comparisonCards')).toEqual([])
    card1.simulate('click')
    expect(mountedApp.state('comparisonCards').length).toEqual(1)
    card2.simulate('click')
    expect(mountedApp.state('comparisonCards').length).toEqual(2)
    card3.simulate('click')
    expect(mountedApp.state('comparisonCards').length).toEqual(2)
  })

  it.skip('clear button should clear the comparisonCards array', () => {
    let mountedApp = mount(<App/>)
    let card1 = mountedApp.find('.card-component').at(1)
    let card2 = mountedApp.find('.card-component').at(2)
    let clearButton = mountedApp.find('.clear-button')
    let mockFunction = jest.fn()

    expect(mountedApp.state('comparisonCards')).toEqual([])
    card1.simulate('click')
    expect(mountedApp.state('comparisonCards').length).toEqual(1)
    card2.simulate('click')
    expect(mountedApp.state('comparisonCards').length).toEqual(2)
    clearButton.simulate('click')
    expect(mountedApp.state('comparisonCards')).toEqual([])
  })

  it('comparison state should be null by default until there are two cards in the comparison card array', () => {
    let mountedApp = mount(<App/>)
    let card1 = mountedApp.find('.card-component').at(1)
    let card2 = mountedApp.find('.card-component').at(2)

    expect(mountedApp.state('comparison')).toEqual(null)
    card1.simulate('click')
    expect(mountedApp.state('comparison')).toEqual(null)
    card2.simulate('click')
    expect(mountedApp.state('comparison')).toEqual(
    { loc1: 'COLORADO',
      avg1: 0.53,
      loc2: 'ACADEMY 20',
      avg2: 0.407,
      compare: 1.302 })
  })
})
