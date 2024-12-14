import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCategory } from '../../actions/category';
// import ShowCategory from './ShowCategory';
class addcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      
    }
  }
   handleChange = (e) =>{
    // e.preventDefault();
    this.setState({
      [e.target.id] : e.target.value 
    })
  }

   handleSubmit =  (e) =>{
 
    console.log(this.state);
    
    this.props.addCategory(this.state)
    e.preventDefault();
    this.props.history.push(`/all_category`);
  }
  render() { 
  
    return (   
    <div className="container">
    <h2 className="text-center">Create Category</h2>

 <form  onSubmit={this.handleSubmit}>
 <div className="form-group">
  <label htmlFor="exampleInputEmail1">Title</label>
  <input 
  type="text" 
  id="title"
  name="title"
  className="form-control" 
  placeholder="Enter Title"
  onChange={this.handleChange}
  />
  
</div>
<div className="form-group">
<label htmlFor="exampleInputEmail1">Description</label>
  <input 
  type="text" 
  id="description"
  name="description"
  className="form-control" 
  placeholder="Enter Description"
  onChange={this.handleChange}
  />
  
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div> );
  }
}

const mapStateToProps = (state) =>{
  console.log(state);
  
  return {
      ...state
  }
}

const mapDispatchToProps = (dispatch) =>{
  console.log(dispatch);
  
  return {
       addCategory:(category)=>{
        dispatch(addCategory(category))
      }
  }
  }
 
export default connect(mapStateToProps,mapDispatchToProps)(addcategory);