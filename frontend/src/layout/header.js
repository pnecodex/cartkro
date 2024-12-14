import React,{useEffect} from 'react';
import { addToCart,removeFromCart} from '../actions/cart'
import {useSelector,useDispatch} from 'react-redux';
import { BrowserRouter as Route, NavLink,Link } from 'react-router-dom';

function Header(props) {
  const  {cartItems} = useSelector(state =>state.carts);
  // const  = cart;
  // const ProductId = props.match.params.id;
  // // const ProductId = 1;
	// const cart = useSelector(state => state.carts);
	// const {cartItems} = cart;
	// console.log(cart,'cart data show');
	// const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;
	// const dispatch = useDispatch();
	
	// useEffect(()=>{
	// 	if (ProductId,qty) {
	// 		dispatch(addToCart(ProductId,qty));
	// 	}
	// },[])

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          
          <li className="nav-item active">
            <NavLink className="nav-link" to="/dashboard">Dashboard<span className="sr-only"></span></NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/seller_shop_man">seller<span className="sr-only"></span></NavLink>
          </li>
        </ul>

        <ul className="navbar-nav ">

          <li className="nav-item">
            <NavLink className="nav-link" to="/login">login</NavLink>
          </li>
           <li className="nav-item">
            <NavLink className="nav-link" to="/register">sign Up</NavLink>
           </li>
           <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart
              {cartItems.length > 0 && (
                <span className="bedge">{cartItems.length}</span>
              )}
            </Link>
           </li>

        </ul>

      </div>
    </nav>


    );
}

export default Header
