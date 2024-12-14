import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Variation } from '../../actions/productVariationAction';
import { addProductVariation, fetchProductVariation, imagesProductVariation } from '../../actions/productvariationimage'

class addVariation extends Component {
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
        super(props);
        this.state = {
            inputFields: [
                {
                    size: '',
                    sellerSKU: '',
                    conditionId: '',
                    saleprice: '',
                    qty: '',
                    cId: id,
                },


            ],
            variationId: id,
            imageSrc1: imagedefault1,
            imageSrc2: imagedefault2,
            imageSrc3: imagedefault3,
            imageSrc4: imagedefault5,
            imageSrc5: imagedefault4,
            image: [null],

        }
        // this.handleAddField = this.handleAddField.bind(this)
        // this.handleChange = this.handleChange.bind(this)
        // this.handleRemoveField = this.handleRemoveField.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.uploadMultipleFiles1 = this.uploadMultipleFiles1.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    // images
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
                image:"",
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
                image:"",
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
                image:"",
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
                image:"",
                imageSrc: this.state.imageSrc5
            })
        }

    }
    /////////////////////////image controll ///////////////
    handleChange(index, e) {
        // const { name, value } = e.target.value;
        // let inputFields = [...this.state.inputFields];
        // inputFields[index] = {...inputFields[index], [name]: value};
        // this.setState({ inputFields });

        // console.log(e.target.value);
        const valuse = [...this.state.inputFields];
        valuse[index][e.target.name] = e.target.value;
        this.setState({ valuse });
    }
    handleSubmit(e) {
        e.preventDefault();
        // dispatch(Variation(inputFields))
        // console.log('submited', inputFields);

    }


    handleAddField() {
        const id = this.props.match.params.id
        console.log(id,'id in');
        this.setState(preState => ({
            inputFields: [...preState.inputFields, {
                size: '',
                sellerSKU: '',
                saleprice: '',
                conditionId: '',
                qty: '',
                cId: id,
            },
            ]
        }))
        // this.setState([...this.state.inputFields,
        // {  
        //     cId: id,
        // }
        // ])

    }
    handleRemoveField(index) {
        console.log(index);
        const inputFields = [...this.state.inputFields];
        inputFields.splice(index, 1);
        // this.setState({values})
        this.setState({ inputFields })
    }



    
    uploadFiles(e) {
        e.preventDefault()
        //  let file = ;
        console.log(this.state.image, 'state images ');
        let formData = new FormData();
        this.fileArray.forEach((item) => {
            formData.append('image', item)
        })
        formData.append('variationId', this.state.variationId)
        this.props.Variation(this.state.inputFields);
        this.props.imagesProductVariation(formData);
        // alert('A name was submitted: ' + JSON.stringify(this.state.inputFields));
        //  console.log(file,'images file');


        //  formData.append('image',file);
        //  console.log(formData,'form image upload'); 
    }

    createUI() {

        return this.state.inputFields.map((inputField, index) => (
            <div className="text-center">
                <table className="table">


                    <tr key={inputField.id}>
                        <tbody>

                            <td>

                                <input
                                    type="text"
                                    id="size"
                                    name="size"
                                    className="form-control"
                                    // value={inputField.size || ''}
                                    onChange={this.handleChange.bind(this, index)} />
                            </td>
                            {/* <td>

                                <input
                                    type="text"
                                    id="cId"
                                    name="cId"
                                    className="form-control"
                                    value={inputField.cId}
                                    onChange={this.handleChange.bind(this, index)} />
                            </td> */}

                            <td>

                                <input
                                    type="text"
                                    id="sellerSKU"
                                    name="sellerSKU"
                                    className="form-control"
                                    // value={inputField.saleprice}
                                    onChange={this.handleChange.bind(this, index)} />
                            </td>
                            <td>

                                <input
                                    type="text"
                                    id="saleprice"
                                    name="saleprice"
                                    className="form-control"
                                    // value={inputField.saleprice}
                                    onChange={this.handleChange.bind(this, index)} />
                            </td>

                            <td>
                                <input
                                    type="text"
                                    id="conditionId"
                                    name="conditionId"
                                    className="form-control"
                                    // value={inputField.conditionId}
                                    onChange={this.handleChange.bind(this, index)} />
                                {/* <select className="form-control" id="conditionId" name="conditionId" onChange={(e) => handleChange} ue={inputField.conditionId}
        >
          <option >Condition...</option>

          {this.props.category.map((row, index) => (
        //  <option key={row.id} value={row.id}>{row.categories.title}</option> 
          ))}

        </select> */}
                            </td>
                            <td>

                                <input
                                    type="text"
                                    id="qty"
                                    name="qty"
                                    className="form-control"
                                    // value={inputField.qty}
                                    onChange={this.handleChange.bind(this, index)} />
                            </td>
                       
                            <td>

                                <button className="btn btn-sm" onClick={this.handleRemoveField.bind(this, index)} hidden={this.state.inputFields.length === 1}>remove</button>
                            </td>


                        </tbody>

                    </tr>
                </table>
            </div>
        ))

    }
    componentDidMount(){
        alert(this.props.match.params.id)
    }  
    render() {
        return (
            <div>
                <table>

                    <tr>
                        <thead>

                            <th scope="col">size</th>
                            <th scope="col">sellerSKU</th>
                            <th scope="col">saleprice</th>
                            <th scope="col">Condition</th>
                            <th scope="col">qty</th>
                        </thead>
                    </tr>
                </table>
                <button className="btn float-left" onClick={this.handleAddField.bind(this)}>add more</button>
                <form onSubmit={this.uploadFiles}>
                    {this.createUI()}
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
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        ...state,
        imagesvariation: state.imagesvariation.imagesvariation,
        productvariationimagedetails: state.productvariationimagedetails.productvariationimagedetails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        imagesProductVariation: (images) => {
            dispatch(imagesProductVariation(images))
        },
        Variation: (variation) => {
            dispatch(Variation(variation))
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(addVariation);