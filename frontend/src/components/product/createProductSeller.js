import React, { Component } from 'react';
import { connect } from "react-redux";
import Cookies from 'js-cookie';
import { addProductseller } from '../../actions/userproduct';
import { fetchAllChildCategory } from '../../actions/category';
import { fetchColor } from '../../actions/color';

class createProductseller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      stock: '',
      image: '',
      imageName: '',
      categoryId: '',
      subcategoryId: '',
      childcategoryId: '',
      colors: []

    }
  }

  handleChange = (e) => {
    // e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
      // image:e.target.files[0]
    })
    // const filess = e.target.files[0]
  }

  // getDataimg = (file,callback) =>{
  //   const reader = new FileReader();
  //   reader.addEventListener('load',()=>callback(reader.result));
  //   reader.readAsDataURL(file)
  // }

  fileTransform = (e) => {
    // this.getDataimg(e.target.files[0],(image)=>{
    //   this.state.image = image;
    //   console.log(this.state);
    // })


    if (e.target.files[0] !== null || e.target.files[0] !== undefined) {
      this.setState({
        image: e.target.files[0],
        imageName: e.target.files[0].name
      });
    }
  }

  handleSubmit = (e) => {

    console.log(this.state);
    e.preventDefault();
    const { name, price, stock, image, colors, categoryId, subcategoryId, childcategoryId } = this.state;


    // this.props.addCategory(this.state)
    const formData = new FormData();

    formData.append('name', name);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('image', image);
    formData.append('childcategoryId', childcategoryId);
    formData.append('subcategoryId', subcategoryId);
    formData.append('categoryId', categoryId);
    formData.append('colors', colors);

    this.props.addProductseller(formData, Cookies);
    // this.props.history.push(`/show_product`);
  }
  componentDidMount() {
    console.log(this.props);
    // this.props.addProduct(this.props.product);
    // this.props.fetchProduct();
    this.props.fetchAllChildCategory();
    this.props.fetchColor();
    // this.props.addCategory();
  }
  render() {
    console.log(this.props.color, 'colors product');
    return (
      <div className="container">
        <h2 className="text-center">Create Product</h2>

        <form onSubmit={this.handleSubmit}>


          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter name"
              onChange={this.handleChange}
            />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Product Price</label>
            <input
              type="text"
              id="price"
              name="price"
              className="form-control"
              placeholder="Enter price"
              onChange={this.handleChange}
            />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Product Price</label>
            <input
              type="text"
              id="stock"
              name="stock"
              className="form-control"
              placeholder="Enter stock"
              onChange={this.handleChange}
            />

          </div>
          <div className="form-group">
            <label>image</label>
            <input
              type="file"
              id="image"
              name="image"
              data-testid="picture-dessert"
              className="form-control"
              onChange={this.fileTransform}
            />

            {this.state.imageName && (
              <div id="picture_uploaded">
                You have uploaded a file named {this.state.imageName}
              </div>
            )}
            <img src={this.state.image} />
          </div>
          <img style={{ height: 55 }} src={this.state.image} />
          <div className="form-group">
            <label className="mr-sm-2">Preference</label>
            <select className="form-control" id="subcategoryId" name="subcategoryId" onChange={this.handleChange}>
              <option >Choose...</option>
              {this.props.category.map((row, index) => (
                <option key={row.id} value={row.id}>{row.categories.title}</option>
              ))}

            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    ...state,
    productsellerdetails: state.productsellerdetails.productsellerdetails,
    category: state.categories.categories,
    color: state.colors.colors
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);

  return {
    addProductseller: (productsellerdetail, Cookies) => {
      dispatch(addProductseller(productsellerdetail, Cookies))
    },
    fetchAllChildCategory: () => {
      dispatch(fetchAllChildCategory())
    },
    fetchColor: () => {
      dispatch(fetchColor())
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(createProductseller);