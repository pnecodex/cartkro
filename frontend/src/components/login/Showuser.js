import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { alluser } from '../../actions/auth';


class showUser extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        console.log(this.props);

        this.props.alluser();
    }
    render() {
        // const  auth  = this.props;
        // console.log(auth);
        return (
            <div className="container">
            <div className="text-center" >
               <h2>Category Component</h2>
                    <table className="table table-striped ">
                        <thead>

                        <tr className="bd-dark">
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th scope="col">password</th>
                            <th scope="col">password</th>


                        </tr>
                        </thead>
                         {this.props.users.map((row, index) => (

                          <tbody key={row.id} className="table">

                             <tr scope="row">
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.password}</td>
                                <td>{row.productsellerdetails.id}</td>




                            </tr>
                         </tbody>
                        ))}

   </table>
 </div>
</div>
        )
    }
}







const mapStateToProps = (state)=>{
    console.log(state);

    return{

        users:state.users.users,
        // category:state.categories.categories
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return{
            alluser:()=>{
            dispatch(alluser())
        }



    }
}

export default connect(mapStateToProps,mapDispatchToProps)(showUser);