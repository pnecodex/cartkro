import React, { Component } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { fetchUserProductseller } from '../../actions/userproduct';
import { FaStar } from 'react-icons/fa';
import { connect } from 'react-redux';
import { set } from 'js-cookie';
import $ from 'jquery';
import VariationImage from './variationImage';
import apiCall from '../../apiCall';


class userSellerProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: false,
            on_modal: false,
            loading: false,
            data: [],
            location: this.props.location.state,
            ratings: null
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle = (e) => {
        const { checked } = e.target;
        console.warn(checked)
        // if (checked) {
        //     this.props.productsellerdetails.forEach(product_status => product_status.status = checked);
        //     this.setState({status:checked})
        //     // $('input[type="checkbox"]').prop('checked', true);
        // } else {
        //     $('input[type="checkbox"]').prop('checked', false);
        // }
    }
    onModal = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
            this.setState({ catelogueActive: true });
            this.setState((preveState) => ({
                on_modal: !preveState.on_modal
            }));
        }, 500);
        // this.setState((prevState)=>{
        // console.log(prevState.on_modal,'prevState');

        //     return{
        //         on_modal:prevState.on_modal + 2
        //     }
        // });
        // console.log(this.state.on_modal,'on_modal');
    }
    deteleInventory = (id) => {
        this.setState({ loading: true });
        setTimeout(() => {
            apiCall(`/product/${id}`, 'delete')
                .then((response) => {
                    console.warn(response);
                    this.props.fetchUserProductseller();
                });
            this.setState({ loading: false });
            this.setState({ on_modal: true });
        }, 5000);
        setTimeout(() => {
            this.setState({ on_modal: false });
        }, 10000);
    }
    componentDidMount() {
        this.props.fetchUserProductseller();
        // this.setState({ data: this.props.productsellerdetails });
        setTimeout(() => {
            this.setState({ location: false })
        }, 5000);
    }

    render() {
        const imageUrl = 'http://localhost:4244/image/';
        return (
            <div className="container text-center">
                <button type="button" className="btn btn-primary btn-sm float-right mt-5" onClick={this.onModal}>add product</button>
                {this.state.loading ?
                    <div className='h-100 d-flex align-item-center justify-content-center '>
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> : ''}
                {this.state.on_modal ? <div className="card">
                    <div className='card-body'>
                        <div className='card-title text-success'>Your inventory item deleted successful</div>
                    </div>
                </div> : null}
                {this.state.location ? <div className="card">
                    <div className='card-body'>
                        <div className='card-title text-success'>{this.state.location.state.newInventory ? "Your inventory item submited successful" : "Your inventory item updated successful"}</div>
                    </div>
                </div> : null}
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"><input type="checkbox" name="" id="" onClick={this.handleToggle} /></th>
                            <th scope="col">status</th>
                            <th scope="col">image</th>
                            {/* <th scope="col">sellerSKU</th> */}
                            <th scope="col">Rating</th>
                            <th scope="col">item price</th>
                            <th scope="col">item name</th>
                            <th scope="col">item stock</th>
                        </tr>
                    </thead>
                    {this.props.productsellerdetails.map((item, index) => (
                        <tbody>
                            <tr key={item.id}>
                                <input id='rating-input' type="hidden" name="" data-rating={JSON.stringify(item.Ratings)} />
                                <td id='check_status'><input type="checkbox" value={item.status == true ? 'true' : 'false'} checked={item.status} /></td>
                                <td><span>{item.status ? 'active' : 'inactive'}</span></td>
                                <td>
                                    <img style={{ width: '100px', height: '80px' }} src={imageUrl + item.image} alt={item.name} />
                                </td>
                                <td>

                                    {/* {item.Ratings.map((rating, index) => (
                                        [...Array(5)].map((rat, index) => (
                                            <FaStar
                                                className="star"
                                                color={index < rating.rating ? "#ffc107" : "#e4e5e9"}
                                                size={10} />
                                        ))
                                    ))} */}
                                </td>
                                {/* <td>
                                    <span>green-BTSM</span>
                                </td> */}
                                <td>
                                    <h5>PKR:{item.price}</h5>
                                </td>
                                <td>
                                    <p >{item.title}</p>
                                </td>
                                <td>
                                    <input type="number" value={item.stock} style={{ width: '100px' }} />
                                </td>
                                <td>
                                    <div className="dropdown">
                                        <NavLink style={{ height: '35px', borderColor: 'skyblue' }} to={`/add_variation_images/${item.id}`} className="btn dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" >
                                            product image manage
                                        </NavLink>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Manage Image</a>
                                            <a className="dropdown-item" href="#">Manage Product list</a>
                                            <a className="dropdown-item" href="#">Delete product and listing</a>
                                        </div>
                                        <div style={{ display: "inline-grid" }}>
                                            <NavLink style={{ textDecoration: 'none' }} className="btn btn-sm btn-info" to={'/add_variation/' + item.id}>Variation</NavLink>
                                            <NavLink style={{ textDecoration: 'none' }} className="btn btn-sm btn-primary" to={'/edit_product/' + item.id}>Edit product</NavLink>
                                            <button style={{ textDecoration: 'none' }} className="btn btn-sm btn-danger" onClick={() => this.deteleInventory(item.id)}>Delete Inventory</button>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        productsellerdetails: state.productsellerdetails.productsellerdetails,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserProductseller: () => {
            dispatch(fetchUserProductseller())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userSellerProduct);