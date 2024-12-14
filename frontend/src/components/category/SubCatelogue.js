import React, { Component } from 'react';
import apiCall from '../../apiCall';
import $ from 'jquery';
class SubCatelogue extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <ul className="catelogue">
          {
            this.props.sub_catelogues.map((subcatelogue, index) => (
              <li className="categories" name="categoryId" key={index} value={subcatelogue.id} data-id={subcatelogue.id} onClick={(e)=>this.props.handleCategories(e,subcatelogue.id)}>{subcatelogue.cataloguename}</li>
            ))
          }
        </ul>
    )
  }
}

export default SubCatelogue;