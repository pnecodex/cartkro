import React, { Component } from 'react';
import apiCall from '../../apiCall';
import $ from 'jquery';
class ChildCatelogue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ul>
          {
            this.props.Childsub_catelogues.map((subcatelogue, index) => (
              <li key={index} value={subcatelogue.id}>{subcatelogue.cataloguename}</li>
            ))
          }
        </ul>
    )
  }
}

export default ChildCatelogue;