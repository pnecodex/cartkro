import React,{useEffect, useState} from 'react';
import { addToCart,removeFromCart} from '../../actions/cart'
import {useSelector,useDispatch} from 'react-redux';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { fetchOneProductseller } from '../../actions/userproduct';
import CheckSizes from '../oneProductDetail/checksizes';

const CartShow = (props)=>{
	
	const [selectedOption,setSelectOption] = useState('');
	const [qtyStock,setqtyStock] = useState('');
	const [stock,setStock] = useState(1);

	const ProductId = props.match.params.id;
	const {cartItems} = useSelector(state => state.carts);
	console.log({cartItems},'cartitems and variation')

	// const {cartItems} = cart;
	const OneproductDetail = useSelector(state => state.productsellerdetails.productsellerdetails);
	// const  {id} = OneproductDetail;
	console.log(ProductId,'cart data show');
	const qty = props.location.search ? Number(props.location.search.split("=")[1]):1;
	console.log(qty,'qty in');
	// const {selectedOption} = props.location.search ? Number(props.location.search.split("=")[1]):1;
	// console.log(selectedOption,'selectedOption');
	const dispatch = useDispatch();
	const removeFromCartHandler = (ProductId)=>{
		// productId.prevenDefault();
		dispatch(removeFromCart(ProductId));
		sessionStorage.removeItem('sizeWithPrice');
		sessionStorage.removeItem('sizeWtihQty')
	}
	useEffect(()=>{
		if (ProductId,qty) {
			dispatch(addToCart(ProductId,qty));
		}
		dispatch(fetchOneProductseller(props.match.params.id));

		// const showQty = '';
        // if (qtyStock != null && qtyStock.length > 0 && stock) {
        //     showQty = <select defaultValue={qty} onChange={handleQty}>
        //         {[...Array(stock).keys()].map((rowt, index) => (
        //             // console.log(rowt, 'aaqty')
        //             <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
        //         ))}

        //     </select>

        // } else {
        //     showQty = <select defaultValue={qtyStock} onChange={handleQty}>
        //         {
        //             // selectedOption && this.state.selectedOption.map((row, index) => (
        //             [...Array(qtyStock).keys()].map((rowt, index) => (
        //                 // console.log(rowt, 'aaqty')
        //                 <option key={rowt + 1} value={rowt.qty}>{rowt + 1}</option>
        //             ))
        //             // <option key={row + 1} value={row.qty}>{row.qty}</option>
        //             // ))

        //         }
        //     </select>
        // }


	},[dispatch])


	const changeSizeWithQty = (pos) => {
        console.log({ qtyStock: pos }, 'console.log')
        console.log(pos, 'pos value', this.setqtyStock({ qtyStock: pos }));

        alert(JSON.stringify({ qtyStock: pos }))




	}
	const handleQty = (e) => {
        const qty = e.target.value
        const qtyStock = e.target.value
        this.setqtyStock({
            // qty: qty,
            qtyStock: qtyStock
        })
	}
	const sizePriceHandle = (e) =>{
        console.log(e.target.value,'size');
        console.log(e.target.valueLink,'price');
       this.setState({priceWithsize:e.target.value});
       sessionStorage.setItem('sizeWithPrice',e.target.value)
    }
	return(

	 	<div className="cart">

			 <div className="cart-list">
				<ul className="cart-list-container">
					<li>
							<h3>
								Shoping Cart
							</h3>
							{/* <NavLink to={'/one-product/'+id}>back product</NavLink> */}
							<div>
							<h2>
								Price
		                    </h2>
		                    </div>
					</li>

							{
								cartItems.length === 0 ? cartItems === null ? null:
								<div>
									Cart is Empty
								</div>
								:
								cartItems.map(item =>
								<li>
								<div>
									<div className="cart-image">
											
									{<img src={`http://localhost:4244/image/`+item.image} alt="product" />}
									{/* {<img src={`http://localhost:4244/image/`+sessionStorage.getItem('images')} alt="product" /> ? <img src={`http://localhost:4244/image/`+sessionStorage.getItem('images')} alt="product" /> : <img src={`http://localhost:4244/image/`+item.image} alt="product" />} */}
         	
									</div>
		                               <div>

										<div className="cart-name">
										<h5>{item.name}</h5>
										</div>
										{/* <div className="cart-name">
										<h5>{sessionStorage.getItem('sizeWithPrice')}</h5>
										</div> */}
										<div className="cart-price">
										 {/* { item.price?item.price: null} */}
										 {sessionStorage.getItem('sizeWithPrice'), sessionStorage.getItem('sizeWithPriceId')?sessionStorage.getItem('sizeWithPrice'):item.price}
										</div>
										  {/* <CheckSizes changeSizeWithQty={changeSizeWithQty} selectedOption={selectedOption} /> */}
                              
												<div className="qty-right">

													{/* Qty:{qtyStock != null && qtyStock.length > 0 ? */}
													Qty:{sessionStorage.getItem('sizeWtihQty') ? 
																	<select defaultValue={item.qty} onChange={(e) => dispatch(addToCart(item.productId, Number(e.target.value)))}>
																	{/* <option value="" key="">qtyStock</option> */}
																	{
																		// selectedOption && this.state.selectedOption.map((row, index) => (
																		[...Array(Number(sessionStorage.getItem('sizeWtihQty'))).keys()].map((row, index) => (
																			// console.log(rowt, 'aaqty')
																			<option key={row + 1} value={row + 1}>{row + 1}</option>
																		))
																		// <option key={row + 1} value={row.qty}>{row.qty}</option>
																		// ))
		
																	}
																</select>:
														<select value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, Number(e.target.value)))}>
															
															{[...Array(item.stock).keys()].map((rowt, index) => (
																// console.log(rowt, 'aaqty')
																<option key={rowt + 1} value={rowt + 1}>{rowt + 1}</option>
															))}

														</select>
														
										
													}
													{/* <select value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, Number(e.target.value)))}>
														{[...Array(item.stock).keys()].map((row, index) => (
															<option key={row + 1} value={row + 1}>{row + 1}</option>
														))}
													</select> */}
													<Link to className="btn-remove" onClick={(e) => removeFromCartHandler(item.productId)}>
														Remove
													</Link>
												</div>
		                                 </div>

       		                       </div>

       		                       </li>
							)}


		 		</ul>
			 </div>


			<div className="cart-action">
				<h4>
					SubTotal  ( {cartItems.reduce((a,c) => a  + c.qty,0)} items)
						:
						{/* {cartItems.reduce((a,c)=> a + c.qty + qty,0)} total item */}
					RS {sessionStorage.getItem('sizeWithPrice')?sessionStorage.getItem('sizeWithPrice') : cartItems.reduce((a,c) => a + c.price * c.qty,0)}
				</h4>
				<NavLink to='/checkout'>
				<button className="button-primary" disabled={cartItems.length === 0}>
					Proceed To Checkout
				</button>
				</NavLink>
			</div>
			{/* <CheckSizes sizePriceHandle={sizePriceHandle}  changeSizeWithQty={this.changeSizeWithQty} selectedOption={this.state.selectedOption}  />  */}
                                   										

		</div>
	 )

}

export default CartShow;