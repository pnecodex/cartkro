import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductVariation, fetchProductVariation, imagesProductVariation } from '../../actions/productvariationimage'

const defaultImage1 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg';
const imagedefault2 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
const imagedefault3 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
const imagedefault4 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'
const imagedefault5 = 'https://image.shutterstock.com/image-vector/no-image-photo-available-icon-600w-324606194.jpg'

const initialFileValues = {
    imageSrc1: defaultImage1,
    imageSrc2: imagedefault2,
    imageSrc3: imagedefault3,
    imageSrc4: imagedefault4,
    imageSrc5: imagedefault5,
    image: [null],
   

}
function VariationImages(props) {

    const id = props.match.params.id
    const fileArray = [];
    const [values, setValues] = useState(initialFileValues)
    const dispatch = useDispatch()
    const uploadMultipleFiles1 = (e) => {

        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            fileArray.push(imageFile);
            // console.log(fileArray,'file array');
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    values,
                    imageFile,
                    imageSrc1: x.target.result
                })
            }
            reader.readAsDataURL(e.target.files[0]);
            console.log(imageFile, 'image file upload');
            // } 
        } else {
            setValues({
              
                imageSrc: this.imageSrc1
            })
        }
    }


    const uploadMultipleFiles2 = (e) => {

        if (e.target.files && e.target.files[0]) {
            // for (let index = 0; index < e.target.files.length; index++) {
            //  let  fileArray = [];
            // }
            let imageFile = e.target.files[0];
            fileArray.push(imageFile);
            // console.log(fileArray,'file array');
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    values,
                    imageFile,
                    imageSrc2: x.target.result
                })
            }
            reader.readAsDataURL(imageFile);
            console.log(imageFile, 'image file upload');

        } else {
            this.setValues({
              
                imageSrc: this.state.imageSrc2
            })
        }

    }
    const uploadMultipleFiles3 = (e) => {

        if (e.target.files && e.target.files[0]) {
            // for (let index = 0; index < e.target.files.length; index++) {
            //  let  fileArray = [];
            // }
            let imageFile = e.target.files[0];
            fileArray.push(imageFile);
            // console.log(fileArray,'file array');
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    values,
                    imageFile,
                    imageSrc3: x.target.result
                })
            }
            reader.readAsDataURL(imageFile);
            console.log(imageFile, 'image file upload');

        } else {
            this.setValues({
              
                imageSrc: this.state.imageSrc3
            })
        }

    }
    const uploadMultipleFiles4 = (e) => {

        if (e.target.files && e.target.files[0]) {
            // for (let index = 0; index < e.target.files.length; index++) {
            //  let  fileArray = [];
            // }
            let imageFile = e.target.files[0];
            fileArray.push(imageFile);
            // console.log(fileArray,'file array');
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    values,
                    imageFile,
                    imageSrc4: x.target.result
                })
            }
            reader.readAsDataURL(imageFile);
            console.log(imageFile, 'image file upload');

        } else {
            this.setValues({
              
                imageSrc: this.state.imageSrc4
            })
        }

    }
    const uploadMultipleFiles5 = (e) => {

        if (e.target.files && e.target.files[0]) {
            // for (let index = 0; index < e.target.files.length; index++) {
            //  let  fileArray = [];
            // }
            let imageFile = e.target.files[0];
            fileArray.push(imageFile);
            // console.log(fileArray,'file array');
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    values,
                    imageFile,
                    imageSrc5: x.target.result
                })
            }
            reader.readAsDataURL(imageFile);
            console.log(imageFile, 'image file upload');

        } else {
            this.setValues({
              
                imageSrc: this.state.imageSrc5
            })
        }

    }
    const uploadFiles = (e) => {
        e.preventDefault()
        //  let file = ;
        let formData = new FormData();
        fileArray.forEach((item) => {
            formData.append('image', values.image)
        })
        formData.append('variationId', values.variationId)
        dispatch(imagesProductVariation(formData));

        //  console.log(file,'images file');


        //  formData.append('image',file);
        //  console.log(formData,'form image upload'); 
    }










    return (
        <div className="row" >
            <form onSubmit={uploadFiles}>
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
                        <img style={{ width: '80px' }} src={values.imageSrc1} alt="..." />
                        <input
                            type="file"
                            className="form-control"
                            // accept="image/*"
                            id="image"
                            name="image"
                            onChange={uploadMultipleFiles1}

                        />

                    </div>
                    <div className="form-group col">
                        <img style={{ width: '80px' }} src={values.imageSrc2} alt="..." />
                        <input
                            type="file"
                            className="form-control"
                            // accept="image/*"
                            id="image"
                            name="image"
                            onChange={uploadMultipleFiles2}

                        />
                    </div>
                    <div className="form-group col">
                        <img style={{ width: '80px' }} src={values.imageSrc3} alt="..." />
                        <input
                            type="file"
                            className="form-control"
                            // accept="image/*"
                            id="image"
                            name="image"
                            onChange={uploadMultipleFiles3}

                        />

                    </div>
                    <div className="form-group col">
                        <img style={{ width: '80px' }} src={values.imageSrc4} alt="..." />
                        <input
                            type="file"
                            className="form-control"
                            // accept="image/*"
                            id="image"
                            name="image"
                            onChange={uploadMultipleFiles4}

                        />
                    </div>
                    <div className="form-group col">
                        <img style={{ width: '80px' }} src={values.imageSrc5} alt="..." />
                        <input
                            type="file"
                            className="form-control"
                            // accept="image/*"
                            id="image"
                            name="image"
                            onChange={uploadMultipleFiles5}

                        />
                    </div>

                </div>
                <button type="submit" className="btn btn-success" >Upload</button>
            </form >
        </div>
    )
}

export default VariationImages
