import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { CreateOrder } from '../../actions/order';
class OrderPlace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: '',
            // address: '',
            // city: '',
            // phone: '',
            // productId:'',
            // checkoutId: '',
            // userId:'',
            // price: '',
            // qty: ''
            name: 'laptop',
            address: 'laptop',
            city: 'laptop',
            phone: 'laptop',
            productId: 2,
            checkoutId: 20,
            userId: 2,
            price: 25000,
            qty: 2
          
          }
    }
    //  datacall = () => {
    //     var {cartItem} = this.props.carts;
    //     for (var [key , value] of Object.entries(cartItem)) {
    //         for (var [ke, val] of Object.entries(value)) {
    //             console.log(`keys${ke} : values ${val}`);
    //           }
              
    //         console.log(`s:${key} ${value}`);
    //       }
    // }
    PlaceOrderHandler = (e) =>{
            // var {cartItem} = this.props.carts;
            e.preventDefault()
           this.props.CreateOrder(this.props.carts);
        //    this.props.CreateOrder(value);
        console.log(this.props.carts);
    }
    render() { 
       
        // this.datacall();
        return (  
            <Fragment>
            <button onClick={this.PlaceOrderHandler}>OrderPlace</button>
           </Fragment>
        );
    }
}
const mapStateToProps = (state)=>{
    console.log(state);

    return{
          carts:state.carts
        // createOrder:state.createOrder.createOrder,

    }
}
const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return{

        CreateOrder:(order)=>{
            dispatch(CreateOrder(order))
        },


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(OrderPlace);