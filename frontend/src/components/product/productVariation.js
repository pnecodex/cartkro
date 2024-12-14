import React, { Component, useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProductVariation, fetchProductVariation, imagesProductVariation } from '../../actions/productvariationimage'
// import VariationImage from './variationImage';



function ProductVariation(props) {
  const ProductId = props.match.params.id;
  const addproductVariation = useSelector(state => state.imagesvariation.imagesvariation);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(addproductVariation, 'addproductva');
    dispatch(fetchProductVariation(ProductId))
  }, []);
  const [inputFields, setIputField] = useState([      
    {
      color: '',
      // size: '',
      // sellersku: '',
      // conditionId: '',
      // saleprice: '',
      // quentity: '',
      sellerproductId: ProductId,
    },


  ])

  const handleChange = (index, e) => {
    // console.log(e.target.name);
    const valuse = [...inputFields];
    valuse[index][e.target.name] = e.target.value;
    setIputField(valuse);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductVariation(inputFields))
    console.log('submited', inputFields);

  }


  const handleAddField = () => {
    setIputField([...inputFields,
    {
      color: '',
      // size: '',
      // sellersku: '',
      // conditionId: '',
      // saleprice: '',
      // quentity: '',
      sellerproductId: ProductId,
    },
    ])

  }
  const handleRemoveField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setIputField(values)
  }
  return (
    <div className="text-center">
      <h2>add Variation</h2>
      <div className="inputfiel">

        <table>

          <tr>
            <th>color</th>
            {/* <th>size</th>
            <th>sellerSKU</th>
            <th>item condition</th>
            <th>sale price</th>
            <th>qeentity</th> */}
            {/* <th>productId</th> */}
          </tr>

          {/* <form onSubmit={handleSubmit}> */}
          <div>
            <div className="color_div">
              {inputFields.map((inputField, index) => (
                <>
                  <td key={inputFields.id}>
                    {/* <div className="form-group "> */}
                    <input
                      type="text"
                      id="color"
                      name="color"
                      className="form-control"
                      value={inputField.color}
                      onChange={(e) => handleChange(index, e)}
                      onClick={() => handleAddField()}
                    />
                  </td>
                  {/* <td>

                <input
                  type="text"
                  id="size"
                  name="size"
                  className="form-control"
                  value={inputField.size}
                  onChange={(e) => handleChange(index, e)} />
              </td>
              <td>

                <input
                  type="text"
                  id="sellersku"
                  name="sellersku"
                  className="form-control"
                  value={inputField.sellersku}
                  onChange={(e) => handleChange(index, e)} />
              </td>
              <td>
                <input
                  type="text"
                  id="conditionId"
                  name="conditionId"
                  className="form-control"
                  value={inputField.conditionId}
                  onChange={(e) => handleChange(index, e)} />
               
              </td>
              <td>

                <input
                  type="text"
                  id="saleprice"
                  name="saleprice"
                  className="form-control"
                  value={inputField.saleprice}
                  onChange={(e) => handleChange(index, e)} />
              </td>
              <td>

                <input
                  type="text"
                  id="quentity"
                  name="quentity"
                  className="form-control"
                  value={inputField.quentity}
                  onChange={(e) => handleChange(index, e)} />
              </td> */}
                  {/* <td>

                  <input
                    type="text"
                    id="sellerproductId"
                    name="sellerproductId"
                    className="form-control"
                    
                    value={inputField.sellerproductId}
                    onChange={(e) => handleChange(index, e)} />
                </td> */}
                  <td>
                    <button className="btn btn-primary" >+</button>
                    <button className="btn btn-danger" onClick={() => handleRemoveField(index)} hidden={inputFields.length === 1}>-</button>


                  </td>

                </>

              ))}
            </div>
          </div>


          {/* </form> */}
        </table>
      </div>
      <button className="btn btn-success float-right mr-5" onClick={handleSubmit}>variation finish</button>
      <hr style={{ height: '20px;' }} />
      <div className="text-center ">
        <table className="table">
          <thead>

            <tr>

              <th scope="col">status</th>
              <th scope="col">color</th>
              <th scope="col">size</th>
              <th scope="col">sellerSKU</th>
              <th scope="col">item price</th>
              <th scope="col">item stock</th>

            </tr>
          </thead>
          {addproductVariation.map((item, index) => (
            <tbody>
              <tr key={item.id}>
                <td><input type="checkbox" /></td>

                <td>
                  {/* {(() => {
                    var unique = [];
                    var distinct = [];
                    for (let i = 0; i < addproductVariation.length; i++) {
                      if (!unique[addproductVariation[i].color]) {
                        distinct.push(addproductVariation[i].color);
                        unique[addproductVariation[i].color] = 1;
                      }
                      // console.log(unique, 'uniq');
                      <span id="d">{unique}</span>
                    }
                    return unique;
                    var d = document.getElementById("d");
                    d = "" + distinct;


                  })()} */}
                  <span><NavLink to={'/add_variation_images/' + item.id} style={{ textDecoration: 'none' }}>{item.color}</NavLink></span>
                </td>

                <td>
                  <span>{item.size}</span>
                </td>
                <td>
                  <span>{item.sellersku}</span>
                </td>

                <td>
                  <h5>PKR:{item.saleprice}</h5>
                </td>

                <td>
                  <input type="number" value={item.quentity} style={{ width: '100px' }} />
                </td>
                <td>

                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {/* <VariationImage /> */}
      </div>
    </div>
  )
}

export default ProductVariation
