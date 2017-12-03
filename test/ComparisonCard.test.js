import React from 'react';
import { shallow } from 'enzyme';
import ComparisonCard from './../src/Components/ComparisonCard';

describe('ComparisonCard Tests', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(<ComparisonCard />)

    expect(renderedApp).toMatchSnapshot();
  })
})
