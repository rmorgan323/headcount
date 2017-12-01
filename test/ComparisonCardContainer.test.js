import CardContainer from './../src/Components/ComparisonCard.js';
import React from 'react';
import { shallow } from 'enzyme';

describe('CardContainer test', () => {
  it('should match the snapshot', () => {

    const mockCards = []
    const renderedApp = shallow(<CardContainer cards={mockCards}/>)

    expect(renderedApp).toMatchSnapshot();
  })

  it.skip('should render 3 cards', () => {
  const cardsToRender = [
    { id: 1, title: 'School1', data: '1' },
    { id: 2, title: 'School2', data: '2' },
    { id: 3, title: 'School3', data: '3' }
  ]

  const expectCardLength = 3
  const renderedApp = shallow(<CardContainer cards={cardsToRender}/>)

  expect(renderedApp.find('Card').length).toEqual(expectCardLength);
  expect(renderedApp).toMatchSnapshot()
});
})
