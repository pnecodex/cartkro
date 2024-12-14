import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { addProduct, fetchProduct } from '../../actions/product';
import { fetchCategory } from '../../actions/category';
import SubCatelogue from '../category/SubCatelogue';
import apiCall from '../../apiCall';
import $ from 'jquery';
import Axios from 'axios';
import { useParams, withRouter } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FormHook from './FormHook/FormHook';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
class createProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			price: '',
			imagedefault: 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg',
			image: '',
			uploadImage: '',
			imageName: [],
			catalog_id: '',
			catelogueActive: false,
			loading: false,
			sub_catelogues: [],
			discount_price: '',
			start_date: '',
			end_date: '',
			id: this.props.match.params.id,
			on_modal: false,
			loading: false,
			itemSuccess: uuidv4(),
		}
	}

	handleChange = (e) => {
		// e.preventDefault();
		this.setState({
			[e.target.id]: e.target.value,
		});
	}
	fileTransform = (e) => {
		if (e.target.files !== null || e.target.files[0] !== undefined) {
			let image_file = e.target.files[0];
			let reader = new FileReader();
			reader.onload = (x) => {
				this.setState({
					uploadImage: image_file,
					imageName: x.target.result
				});
			}
			reader.readAsDataURL(e.target.files[0]);
		}
	}

	handleSubmits = async (e) => {
		const called = false;
		const { title, description, price, image, uploadImage, catalog_id, discount_price, start_date, end_date } = this.state;
		const formData = new FormData();
		const h = new Date().getHours();
		const m = new Date().getMinutes();
		const s = new Date().getSeconds();
		formData.append('title', title);
		formData.append('description', description);
		formData.append('price', price);
		formData.append('image', uploadImage);
		formData.append('catalog_id', catalog_id);
		formData.append('discount_price', discount_price);
		formData.append('start_date', h + ":" + m + ":" + s + '/' + start_date);
		formData.append('end_date', h + ":" + m + ":" + s + '/' + end_date);
		if (!this.state.id) {
			this.setState({ loading: true });
			setTimeout(() => {
				this.setState({ loading: false });
			}, 5000);
			await this.props.addProduct(formData);
			this.setState({ on_modal: false });
			setTimeout(() => {
			
				this.props.history.push('/allproductseller/' + this.state.itemSuccess,
					{ state: { newInventory: true } }
				);
			}, 2000);

		} else {
			this.setState({ loading: true });
			const data = await apiCall(`/product/${this.state.id}`, 'put', formData);
			setTimeout(() => {
				this.setState({ loading: false });
				this.props.history.push('/allproductseller/' + this.state.itemSuccess,
					{ state: { updateInventory: true } }
				);
			}, 2000);
		}


	}
	componentDidMount() {
		this.props.fetchProduct();
		this.props.fetchCategory();

		const { id } = this.props.match.params;
		apiCall(`/product/${id}`)
			.then((response) => {
				this.setState({ ...response.data.data });
			});
	}
	handleCategories = async (e, ids) => {
		const id = e.target.getAttribute('data-id');
		const { data } = await apiCall(`/sub_catelogues/${id}`, 'get');
		this.setState({ catalog_id: ids })
		this.setState({ sub_catelogues: data.sub_catelogues })
		this.setState({ id });
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false });
			this.setState({ catelogueActive: true });
		}, 500);
	}

	render() {
		return (
			<>
				<div className="container">
					<h2 className="text-center">Create Product</h2>
					{this.state.loading ?
						<div className='d-flex align-item-center justify-content-center '>
							<div className="spinner-border text-primary" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div> : ''}
					{this.state.on_modal ? <div className="card">
						<div className='card-body'>
							<div className='card-title text-success'>Your inventory item deleted successful</div>
						</div>
					</div> : null}
					{/* <FormHook handleSubmits={this.handleSubmits} productsellerdetails={this.props.productsellerdetails}
						title={this.state.title}
						description={this.state.description}
						price={this.state.price}
						image={this.state.image}
						uploadImage={this.state.uploadImage}
						handleChange={this.handleChange}
						fileTransform={this.fileTransform}
					/> */}
					 <div className="form-group">
        <label className="mr-sm-2">Catelogue a product</label>
        <div className='select-category'>Select A Category</div>
        {this.state.loading ?
          <div className='h-100 d-flex align-item-center justify-content-center '>
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div> :
          this.state.catelogueActive == true ?
            <SubCatelogue sub_catelogues={this.state.sub_catelogues} handleCategories={this.handleCategories} />
            :
            <ul className="catelogue">
              {this.props.category.map((catelogue, index) => (
                <li className="categories" name="catalog_id" key={catelogue.id} value={catelogue.id} data-id={catelogue.id} onClick={(e) => this.handleCategories(e, catelogue.id)}>{catelogue.cataloguename}</li>
              ))}
            </ul>
        }
      </div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state,
		products: state.products.products,
		category: state.categories.categories
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		addProduct: (product) => {
			dispatch(addProduct(product))
		},
		fetchProduct: () => {
			dispatch(fetchProduct())
		},
		fetchCategory: () => {
			dispatch(fetchCategory())
		},
		// addCategory:(category)=>{
		//   dispatch(addCategory(category))
		// },


	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(createProduct));