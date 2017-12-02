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

    expect(renderedApp.state('comparison')).toEqual(null)
  })

  it('App should have a default state for the kinder data', () => {
    const newData =  new DistrictRepository(kinderData).findAllMatches()

    expect(renderedApp.state('data')).toEqual(newData)
  })

  it('should have a title', () => {
    let mountedApp = mount(<App/>)
    let title = mountedApp.find('h1')

    expect(title.text()).toEqual('HeadCount');
  })

  it('should have instructions', () => {
    let mountedApp = mount(<App/>)
    let instructions = mountedApp.find('.instructions')

    expect(instructions.text()).toEqual('Please select two districts to compare them')
  })

  it('should display number of cards according to search results', () => {
    let mountedApp = mount(<App/>)
    let input = mountedApp.find('input');

    input.simulate('change', {target: {value: 'br'} });
    expect(mountedApp.state('data').length).toEqual(4)
  })

  it('App state should change if cards are selected to be compared', () => {



  })
})
