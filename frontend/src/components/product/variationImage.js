import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProductVariation, fetchProductVariation, imagesProductVariation } from '../../actions/productvariationimage'
import Variation from './variation'
// import VariationImage from './variationImage';
// import defaultimage from '../../../public/image'

class VariationImage extends Component {
  fileObj = [];
  fileArray = [];
  constructor(props) {
    const imagedefault1 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
    const imagedefault2 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
    const imagedefault3 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
    const imagedefault4 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
    const imagedefault5 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
    // console.log(id,'id declear');
    const id = props.match.params.id
    super(props)
    this.state = {
      variationId: id,
      imageSrc1:  imagedefault1,
      imageSrc2: imagedefault2,
      imageSrc3: imagedefault3,
      imageSrc4: imagedefault5,
      imageSrc5: imagedefault4,
      image: [null],
  
    }

    this.uploadMultipleFiles1 = this.uploadMultipleFiles1.bind(this)
    this.uploadFiles = this.uploadFiles.bind(this)
    // this.variationId = this.variationId.bind(this)
  }
   
  uploadMultipleFiles1 = (e) => {

    if (e.target.files && e.target.files[0]) {
      // for (let index = 0; index < e.target.files.length; index++) {
      //  let  fileArray = [];
      // }
      let imageFile = e.target.files[0];
      this.fileArray.push(imageFile);
      // console.log(fileArray,'file array');
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState({
          image: imageFile,
          imageSrc1: x.target.result
        })
      }
      reader.readAsDataURL(e.target.files[0]);
      console.log(imageFile, 'image file upload');
      // } 
    } else {
      this.setState({
        image:"",
        imageSrc: this.imageSrc1
      })
    }
  }
  uploadMultipleFiles2 = (e) => {

    if (e.target.files && e.target.files[0]) {
      // for (let index = 0; index < e.target.files.length; index++) {
      //  let  fileArray = [];
      // }
      let imageFile = e.target.files[0];
      this.fileArray.push(imageFile);
      // console.log(fileArray,'file array');
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState({
          image: imageFile,
          imageSrc2: x.target.result
        })
      }
      reader.readAsDataURL(imageFile);
      console.log(imageFile, 'image file upload');

    } else {
      this.setState({
        image: "",
        imageSrc: this.state.imageSrc2
      })
    }

  }
  uploadMultipleFiles3 = (e) => {

    if (e.target.files && e.target.files[0]) {
      // for (let index = 0; index < e.target.files.length; index++) {
      //  let  fileArray = [];
      // }
      let imageFile = e.target.files[0];
      this.fileArray.push(imageFile);
      // console.log(fileArray,'file array');
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState({
          image: imageFile,
          imageSrc3: x.target.result
        })
      }
      reader.readAsDataURL(imageFile);
      console.log(imageFile, 'image file upload');

    } else {
      this.setState({
        image: "",
        imageSrc: this.state.imageSrc3
      })
    }

  }
  uploadMultipleFiles4 = (e) => {

    if (e.target.files && e.target.files[0]) {
      // for (let index = 0; index < e.target.files.length; index++) {
      //  let  fileArray = [];
      // }
      let imageFile = e.target.files[0];
      this.fileArray.push(imageFile);
      // console.log(fileArray,'file array');
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState({
          image: imageFile,
          imageSrc4: x.target.result
        })
      }
      reader.readAsDataURL(imageFile);
      console.log(imageFile, 'image file upload');

    } else {
      this.setState({
        image: "",
        imageSrc: this.state.imageSrc4
      })
    }

  }
  uploadMultipleFiles5 = (e) => {

    if (e.target.files && e.target.files[0]) {
      // for (let index = 0; index < e.target.files.length; index++) {
      //  let  fileArray = [];
      // }
      let imageFile = e.target.files[0];
      this.fileArray.push(imageFile);
      // console.log(fileArray,'file array');
      const reader = new FileReader();
      reader.onload = (x) => {
        this.setState({
          image: imageFile,
          imageSrc5: x.target.result
        })
      }
      reader.readAsDataURL(imageFile);
      console.log(imageFile, 'image file upload');

    } else {
      this.setState({
        image: "",
        imageSrc: this.state.imageSrc5
      })
    }

  }
  uploadFiles(e) {
    e.preventDefault()
    //  let file = ;
    console.log(this.state.image, 'state images ');
    let formData = new FormData();
    this.fileArray.forEach((item) => {
      formData.append('image', item)
    })
    // formData.append('variationId', this.state.variationId)
    this.props.imagesProductVariation(formData);

    //  console.log(file,'images file');


    //  formData.append('image',file);
    //  console.log(formData,'form image upload'); 
  }


  render() {

    return (
      // <p>image</p>
      <div className="container" style={{ height: '500px' }}>
          {/* <Variation/>   */}
        <form onSubmit={this.uploadFiles}>
          <div className="form-group multi-preview">
            {/* <div className="form-group multi-preview"> */}
            {/* {this.state.imageSrc.length === 0 ?( this.fileArray || []).map(url => (
                        <img src={url} alt="..." />
                    )) : null} */}
            <div className="form-group multi-preview">
              {/* {(this.fileArray || []).map(url => (
                      // console.log(url,'url images')
                        <img src={url} alt="..." />
                    ))} */}
            </div>
            {/* </div>  */}
            <div style={{}}>
              {/* {this.state.imageSrc < 0 ? this.imageSrc.map(row => (
                  
                  <img style={{ width: '80px' }} src={row} alt="..." />
              )) : null} */}

              {/* <img style={{ width: '80px' }} src={this.state.imageSrc2} alt="..." />  
              <img style={{ width: '80px' }} src={this.state.imageSrc2} alt="..." />  
          */}

            </div>

          </div>

          <div className="row" >
            <div className="form-group col">
              <img style={{ width: '80px' }} src={this.state.imageSrc1} alt="..." />
              <input
                type="file"
                className="form-control"
                // accept="image/*"
                id="image"
                name="image"
                onChange={this.uploadMultipleFiles1}

              />

            </div>
            <div className="form-group col">
              <img style={{ width: '80px' }} src={this.state.imageSrc2} alt="..." />
              <input
                type="file"
                className="form-control"
                // accept="image/*"
                id="image"
                name="image"
                onChange={this.uploadMultipleFiles2}

              />
            </div>
            <div className="form-group col">
              <img style={{ width: '80px' }} src={this.state.imageSrc3} alt="..." />
              <input
                type="file"
                className="form-control"
                // accept="image/*"
                id="image"
                name="image"
                onChange={this.uploadMultipleFiles3}

              />

            </div>
            <div className="form-group col">
              <img style={{ width: '80px' }} src={this.state.imageSrc4} alt="..." />
              <input
                type="file"
                className="form-control"
                // accept="image/*"
                id="image"
                name="image"
                onChange={this.uploadMultipleFiles4}

              />
            </div>
            <div className="form-group col">
              <img style={{ width: '80px' }} src={this.state.imageSrc5} alt="..." />
              <input
                type="file"
                className="form-control"
                // accept="image/*"
                id="image"
                name="image"
                onChange={this.uploadMultipleFiles5}

              />
            </div>

          </div>
          <button type="submit" className="btn btn-success" >Upload</button>
        </form >
        {/* <button type="button" onClick={()=> {this.state.imageSrc.slice(this.state.imageSrc.length)}}>x</button>  */}

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    ...state,
    imagesvariation: state.imagesvariation.imagesvariation

  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    imagesProductVariation: (images) => {
      dispatch(imagesProductVariation(images))
    },

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(VariationImage)
