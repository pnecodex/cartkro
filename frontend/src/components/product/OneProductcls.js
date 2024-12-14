import React,{useEffect, Fragment, Component} from 'react';
import {fetchOneProductseller} from '../../actions/userproduct'
import {useSelector,useDispatch, connect} from 'react-redux';
import { fetchColor } from '../../actions/color';
import { Link } from 'react-router-dom';



class OneProductcls extends Component{
	constructor(props) {
        super(props)

        this.state = {
			qty:1
        }
    }	

	// handleAddToCart = () =>{
	// 	this.props.history.push('/cart/'+this.props.match.params.id + "qty=" + this.state.qty)
	// }
	componentDidMount(){
		const id = this.props.match.params.id;
		this.props.fetchOneProductseller(id)
		console.log(id,'data fet');
	}
	// componentDidUpdate(prevProps,prevState){
	// 	if(prevProps.productsellerdetails !== this.props.productsellerdetails){
	// 		var singleProductsellerdetail = this.props.productsellerdetails;
	// 		console.log(singleProductsellerdetail,'single product');
	// 		this.setState({
	// 			name:singleProductsellerdetail.name,
	// 			sellimages:singleProductsellerdetail.sellimages
	// 		})
	// 	}
	// 	console.log(this.state.sellimages,'sell img');
	// 	console.log(prevState,'prepro');
	// }
	render(){
		let {productsellerdetails} = this.props
		console.log(productsellerdetails,'pr');
		// const {data:{colors:{name}}} = this.props.fetchOneProductseller()
		const items = {}

		for (const [index, value] of Object.entries(productsellerdetails)) {
			console.log(value.sellimages,'val');
		items.push(<li key={index}>{value}</li>)
		}
	  
	return (
		<Fragment>
			<p>{items}</p>
			{/* <div>
			{(()=>{
				var ar = [];

				// for(let i = 0; i < productsellerdetails>4; i++){
				for(let iss in productsellerdetails){
					// var obj =  OneproductDetail.sellimages[key];
					console.log(productsellerdetails[iss],'obj.type val');
					// productsellerdetails[iss].map((row,idx)=>(
					// <p>{row}</p>
					// ))
					// ar.push(
					// return ( <img src={'http://localhost:4244/image/'+productsellerdetails.sellimages[i]} />)
					// );
					// return ar
					// console.log( Array([ar]),'ar');
					
					// ar.map((r,i)=>{
					// 		console.log(r,'r vl');

					// <p>{r}</p>
						// })

					}
				})()}
			</div>
			 */}
                {/* {this.props.productsellerdetails.map((row,index)=>(
					<p>{row}</p>
				))}  */}
		</Fragment>
	)
  }
}
const mapStateToProps = (state) =>{
	return {
		...state,
		productsellerdetails:state.productsellerdetails.productsellerdetails
	}
}
const mapDispatchToProps = (dispatch) =>{
	return {
		fetchOneProductseller:(id) => {
			dispatch(fetchOneProductseller(id))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(OneProductcls); 