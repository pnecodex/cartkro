import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom';
import { fetchProduct } from '../../actions/product';
import { fetchCategory } from '../../actions/category';
import { connect } from 'react-redux';


class showProduct extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    componentDidMount() {
        
        // this.props.fetchProduct()
        console.warn(this.props.products);

    }

    render() {
        var style = {
            height: 100,
            fontSize: 200
        }
        const { products } = this.props;
        return (
            <div className="container">
                <div className="text-center" >
                    <h2>Category Component</h2>
                    <NavLink to="/create_product" className="btn btn-primary float-right">New Category</NavLink>
                    <table className="table table-striped ">
                        <thead>

                            <tr className="bd-dark">
                                <th scope="col">#</th>
                                <th scope="col">title</th>
                                <th scope="col">description</th>
                                <th scope="col">price</th>
                                <th scope="col">image</th>
                                <th scope="col">category</th>
                            </tr>
                        </thead>
                        {this.props.products.map((row, index) => (

                            <tbody key={row.id} className="table">

                                <tr scope="row">
                                    <td>{row.id}</td>
                                    <td>{row.title}</td>
                                    <td>{row.description}</td>
                                    <td>{row.price}</td>
                                    <td><img style={{ height: 55 }} src={row.image} /> </td>
                                    {/* <td>{row.categories.cate}</td> */}
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
    console.warn(state,'state');

    return {

        // products: state.products.products,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        fetchProduct: () => {
            dispatch(fetchProduct())
        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(showProduct);