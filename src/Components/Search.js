import React, { Component } from 'react';


export default class Search extends Component {
  constructor() {
    super()

    this.searchInput = (event) => {
      let searchString = event.target.value;
      this.props.search(searchString)
    }
  }

  render() {
    return(
      <div>
        <input placeholder="Search" 
               onChange={this.searchInput}
        />
      </div>
    )
  }
}
