import React, { Component, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { fetchUserProduct, ProductsellerSearch } from '../../actions/userproduct';
import { connect } from 'react-redux';
import { SellerSearch, Sellerfetch } from '../../actions/seller';




class UserSellerProduct extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            sellersearch: ''
        }
    }
    /*//////*/
    // handleChange =  (e) =>{
    //     e.preventDefault();
    //    this.setState({
    //       [e.target.id] : e.target.value,
    //     })
    //     //  this.props.ProductsellerSearch(this.state)
    //     // console.log(this.state);
    //     // if (this.state=="") {

    //     // }else{

    //     // }
    // }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value,
        })
        // if (this.state=="") {
        //     this.props.fetchUserProduct()
        // }else{
        //     this.props.ProductsellerSearch(this.state)
        // }


    }
    submitValue = (e) => {

        e.preventDefault();
        this.props.ProductsellerSearch(this.state)
        console.log(this.state, 'search product show');


    }
    SellerSubmitValueS = (e) => {
        e.preventDefault();
        this.props.SellerSearch(this.state);
        console.log(this.state, 'seller searching');
    }
    /*/////*/

    componentDidMount() {
        // console.log(this.props);

        this.props.fetchUserProduct()
        this.props.Sellerfetch()
    }


    render() {
        const imageUrl = 'http://localhost:4244/image/';
        var productChunk = [];
        var chunkSize = 3;
        if (this.props.productsellerdetails != null && this.props.productsellerdetails.length > 0) {
            for (var i = 0; i < this.props.productsellerdetails.length; i += chunkSize) {
                productChunk.push(this.props.productsellerdetails.slice(i, i + chunkSize))
            }
        }
        return (

            <div className="container" >
                <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input className="form-control" type="text" name="search" id="search" onChange={this.handleChange} placeholder="Search Product" />
                    <button type="submit" onClick={this.submitValue}>Search product</button>
                </div>
                <div className="md-form active-pink active-pink-2 mb-3 mt-0">
                    <input className="form-control" type="text" name="sellersearch" id="sellersearch" onChange={this.handleChange} placeholder="Seller Search" />
                    <button type="submit" onClick={this.SellerSubmitValueS}>Search seller</button>
                </div>
                {productChunk.map((row, index) => (

                    <div className="row" style={{ margin: '100px' }}>

                        {row.map((item, index) => (
                            (item.status) == true ?
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <Link to={'/one-product/' + item.id}>
                                                <img className="card-img-top imghover" src={imageUrl + item.image} alt={item.name} />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">PKR:{item.price}</h5>
                                                <p className="card-text">{item.name}</p>
                                                {/* <p className="card-text">{item.sellimages.map((imagerow,index)=>(
                         <Fragment>

                         <p className="card-text">{imagerow.sellimage}</p>
                      
                     <img  style={{height:'50%', margin:'12px'}} src={imageUrl+imagerow.sellimage}  />
                         </Fragment>
))}</p> */}
                                                {/* <p className="seller-name">{this.props.sellers.map((row,index)=>(
                          <p>{row.name}</p>
                      ))}</p> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : ''
                        ))}
                    </div>
                ))}
            </div>


        )
    }
}



const mapStateToProps = (state) => {
    console.log(state);

    return {

        productsellerdetails: state.productsellerdetails.productsellerdetails,
        sellers: state.sellers.sellers,
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {

        fetchUserProduct: () => {
            dispatch(fetchUserProduct())
        },
        ProductsellerSearch: (Searching) => {
            dispatch(ProductsellerSearch(Searching))
        },
        SellerSearch: (Searching) => {
            dispatch(SellerSearch(Searching))
        },
        Sellerfetch: () => {
            dispatch(Sellerfetch())
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSellerProduct);