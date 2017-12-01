import React from 'react'
import { shallow } from 'enzyme'
import Card from './../src/Components/Card';

describe('Card Tests', () => {
  it('should match the snapshot', () => {
    const card = { location: 'Turing', data: 1 }
    const { location, data } = card
    const renderedApp = shallow(<Card
                            location={location}
                                data={data}  />)

   expect(renderedApp).toMatchSnapshot()
  })
})
