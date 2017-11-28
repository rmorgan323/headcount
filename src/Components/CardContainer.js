import React, {Component} from 'react';
import Card from './Card.js';


export default class CardContainer extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div>
      {(this.props.allData.findAllMatches().map((card, index)=> {
        return <Card location={card.location}
                         data={card.data}
                          key={index}
                           id={index}
        />
      }))}

        <h1>this is the card container</h1>
      </div>
    )
  }
}
