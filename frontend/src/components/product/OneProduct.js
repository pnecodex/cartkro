import React, { useEffect, Fragment } from 'react';
import { fetchOneProductseller } from '../../actions/userproduct'
import { useSelector, useDispatch } from 'react-redux';
import { fetchColor } from '../../actions/color';
import { Link } from 'react-router-dom';
import Colors from './colors';
import PropTypes from 'prop-types';
import ProductVariationColorSizeImages from '../oneProductDetail/productVariationColorSizeImages';
// import { prototype } from 'mini-css-extract-plugin';
// import {Typeahead, Control} from 'react-typeahead';
// Typeahead

function OneProduct(props) {

	const [qty, setQty] = React.useState(1)
	const [variation, setVariation] = React.useState([])

	const OneproductDetail = useSelector(state => state.productsellerdetails.productsellerdetails);
	// if (!OneproductDetail && OneproductDetail == null) {
	// 	console.log('Error');
	// }else{

	// 	console.log( {OneproductDetail:{name}},'one pro');
	// }

	const { stock, colors, image, price, name, productvariations } = OneproductDetail;
	// console.log(typeof [...Array(productvariations)] , 'one vpro');
	// console.log( sellersku,'one vpro');
	// function VariationProduct(){
	// 	return(
	// 		<div>
	// 			{/* {OneproductDetail.map((row,index)=>(
	// 				<span>{row}</span>
	// 			))} */}
	// 			{(()=>{
	// 				// console.log(OneproductDetail);

	// 			})()}
	// 		</div>
	// 	)
	// }VariationProduct()

	// for(let key in OneproductDetail.sellimages){
	// 	var obj =  OneproductDetail.sellimages[key];
	// 	console.log(typeof obj,'obj.type val');pp
	// 	var ar = [];
	// 	ar.push(2,obj);
	// 	console.log( Array([ar]),'ar');

	// }
	// ar.map((r,i)=>{
	// 		console.log(r,'r vl');
	// 	})
	// console.log(typeof Array(sellerproductimages),'type product');
	const dispatch = useDispatch();
	useEffect(() => {
		const { id } = props.match.params;
		console.log(id, 'id is');

		dispatch(fetchOneProductseller(id));
		setVariation(productvariations)
	}, [])
	// console.log(OneproductDetail,'product match');
	const handleAddToCart = () => {
		props.history.push('/cart/' + props.match.params.id + "qty=" + qty)
	}									

	return (

		<div className="roots" style={{ height: 1000 }}>
			{/* {[...Array(OneproductDetail.productvariations).keys()].map((row,index)=>(<div>{row}</div>))} */}
			{/* <VariationProduct /> */}
			<div className="side-image">

				{/* <img src={`http://localhost:4244/image/`+image} title="product" className="image_detail" /> */}

			</div>
			<div class6="details">
				{/* {OneproductDetail.map((index)=>( */}
				<div className="details-image">
					<img src={`http://localhost:4244/image/` + image} title="product" className="image_detail" />
					{/* <ProductVariationColorSizeImages info={OneproductDetail.productvariations} /> */}
					{[Array(productvariations)].map((row, index) => (
						<td>{row.color}</td>
					))}
				</div>
				<div className="details-info">
					<div className="details-image">,
					</div>
					<ul className="ul_one">
						<li className="li_name">
							{/* <h4><small>Product Name</small>:{name}</h4> */}
							<h4><small>Product Name</small>{name}</h4>
							{/* <Colors key={id} info={/> */}
							{/* {colors.map((,ind)=>(<li>{.name}</li>))} */}

						</li>

						<li className="li_price">
							<b>Price:{price}</b>
						</li>

						Qty: <select defaultValue={qty} className="slct_qty">
							{[...Array(stock).keys()].map((row, index) => (
								<option key={row + 1} value={row + 1}>{row + 1}</option>
							))}
						</select>

					</ul>

				</div>

				<div className="details-action">
					<ul className="ul_price_detail">
						<li className="li_price_detail">

						</li>

						<li className="li_AddToCart">
							<button type="submit" className="botton" onClick={handleAddToCart}>Add To Card</button>
						</li>
					</ul>
				</div>
			</div>

		</div>

	)
}

// OneProduct.propTypes ={
// 	// fetchOneProductseller:PropTypes.func.isRequired,
// 	productvariations:PropTypes.object.isRequired,
// 	id:PropTypes.number.isRequired,
// }
export default OneProduct;