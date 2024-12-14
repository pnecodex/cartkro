import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';
import { fetchAllorder } from '../../actions/order';
import { connect } from 'react-redux';


class showOrder extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        
        this.props.fetchAllorder();
    }
    render() {
        var style = {
            height: 100,
            fontSize: 200
        }
        const imageUrl = 'http://localhost:4244/image/';
        return (
            <div className="container">
                <div className="text-center" >
                    <h2>All Orders</h2>
                    <table className="table table-striped ">
                        <thead>

                            <tr className="bd-dark">
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">City</th>
                                <th scope="col">Qty</th>
                                <th scope="col">ProductName</th>
                                <th scope="col">ProductPrice</th>
                                <th scope="col">ProductImage</th>
                            </tr>
                        </thead>
                        {this.props.allorders.map((row, index) => (
                            <tbody key={row.id} className="table">
                                <tr scope="row">
                                    <td>{row.id}</td>
                                    <td>{row.checkouts.name}</td>
                                    <td>{row.checkouts.address}</td>
                                    <td>{row.checkouts.phone}</td>
                                    <td>{row.checkouts.city}</td>
                                    <td>{row.qty}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    console.warn(state.allorders.allorders, 'allorders');
    return {
        allorders: state.allorders.allorders,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllorder: () => {
            dispatch(fetchAllorder())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showOrder);