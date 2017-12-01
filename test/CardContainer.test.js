import React from 'react';
import CardContainer from './../src/Components/CardContainer';
import { shallow, mount } from 'enzyme';
import kinderData from './../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './../src/helper';

// describe('Card Container Tests', () => {
// let district = new DistrictRepository(kinderData)
// let info = district.cleanData
// let wrapper = shallow(<CardContainer info={district} />);
// let cards = wrapper.find('Card');
// let mountContainer = mount(<CardContainer info={district}/>);

it.skip('should render a card for each item in the info prop', () => {
  expect(cards.nodes.length).toEqual(info.length);
  })
// })
