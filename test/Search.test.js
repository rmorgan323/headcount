import React from 'react';
import Search from './../src/Components/Search';
import { shallow } from 'enzyme';


describe('Search Tests', () => {
  let renderedApp = shallow(<Search />)

  it('should have a search container', () => {
    let searchContainer = renderedApp.find('.search-container');

    expect(searchContainer.length).toEqual(1);
  })

  it('should have an input', () => {
    let input = renderedApp.find('input');

    expect(input.length).toEqual(1);
  })
})
