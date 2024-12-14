import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {colors} = this.props.info;
    //  return   console.log({colors:{name}});
        return ( 
            <ul>
                
                {this.props.info.map((colorrow,index)=>(
                    <li key={colorrow.id}>{colorrow}</li>
                ))}
            </ul>
         );
    }
}
 
export default connect(null,)(Colors);