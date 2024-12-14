import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addSeller } from '../../actions/seller';


class sellerCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      market: '',
      address: '',
      location: '',
      sellerimage: '',
      imageName: '',
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
        sellerimage: e.target.files[0],
        imageName: e.target.files[0].name
      });
    }
  }

  handleSubmit = (e) => {

    console.log(this.state);
    e.preventDefault();
    const { name, market, address, location, sellerimage, imageName } = this.state;


    // this.props.addCategory(this.state)
    const formData = new FormData();
    // this
    formData.append('name', name);
    formData.append('market', market);
    formData.append('address', address);
    formData.append('location', location);
    formData.append('sellerimage', sellerimage);

    this.props.addSeller(formData);
    this.props.history.push(`/dashboard`) ? this.props.history.push(`/seller_shop_man`) : this.props.history.push(`/seller_shop_man`);
  }
  componentDidMount() {
    console.log(this.props);

  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h2 className="text-center">Seller Shop create</h2>

          <form onSubmit={this.handleSubmit}>

            <div className="form-group">
              <label htmlFor="exampl eInputEmail1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Enter Name"
                onChange={this.handleChange}
              />

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">market</label>
              <input
                type="text"
                id="market"
                name="market"
                className="form-control"
                placeholder="Enter market"
                onChange={this.handleChange}
              />

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">location</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                placeholder="Enter location"
                onChange={this.handleChange}
              />

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="form-control"
                placeholder="Enter address"
                onChange={this.handleChange}
              />

            </div>
            <div className="form-group">
              <label>image</label>
              <input
                type="file"
                id="sellerimage"
                name="sellerimage"
                data-testid="picture-dessert"
                className="form-control"
                onChange={this.fileTransform}
              />

              {this.state.imageName && (
                <div id="picture_uploaded">
                  You have uploaded a file named {this.state.imageName}
                </div>
              )}
              <img src={this.state.sellerimage} />
            </div>
            <img style={{ height: 55 }} src={this.state.sellerimage} />

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);

  return {
    ...state,
    sellers: state.sellers.sellers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSeller: (seller) => {
      dispatch(addSeller(seller))
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(sellerCreate);