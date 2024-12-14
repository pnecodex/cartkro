import React, { Component, useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Variation } from '../../actions/productVariationAction'
// import VariationImage from './variationImage';



function Variations(props) {
  // const id = props.match.params.id
  const productvariationimagedetails = useSelector(state => state.productvariationimagedetails.productvariationimagedetails);
  
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log(addproductVariation,'addproductva');
  //   dispatch(fetchProductVariation(ProductId))
  // }, []);
  const [inputFields, setIputField] = useState([
    {
      size: '',
      sellerSKU: '',
      conditionId: '',
      saleprice: '',
      qty: '',
      cId: '',
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
    // dispatch(Variation(inputFields))
    console.log('submited', inputFields);

  }


  const handleAddField = () => {
    setIputField([...inputFields,
    {
     
      size: '',
      sellerSKU: '',
      conditionId: '',
      saleprice: '',
      qty: '',
      cId: '',
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
          
            <th>size</th>
            <th>sellerSKU</th>
            <th>item condition</th>
            <th>sale price</th>
            <th>qeentity</th>
            {/* <th>productId</th> */}
          </tr>

          {/* <form onSubmit={handleSubmit}> */}
          {inputFields.map((inputField, index) => (

            <tr key={inputFields.id}>
          
              <td>

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
                  id="sellerSKU"
                  name="sellerSKU"
                  className="form-control"
                  value={inputField.sellerSKU}
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
                {/* <select className="form-control" id="conditionId" name="conditionId" onChange={(e) => handleChange(index, e)} ue={inputField.conditionId}
                  >
                    <option >Condition...</option>

                    {this.props.category.map((row, index) => (
                   <option key={row.id} value={row.id}>{row.categories.title}</option> 
                    ))}

                  </select> */}
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
                  id="qty"
                  name="qty"
                  className="form-control"
                  value={inputField.qty}
                  onChange={(e) => handleChange(index, e)} />
              </td>
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
                <button className="btn btn-lg" onClick={() => handleAddField()}>+</button>
                <button className="btn btn-lg" onClick={() => handleRemoveField(index)} hidden={inputFields.length === 1}>-</button>


              </td>

            </tr>

          ))}
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
          {/* {addproductVariation.map((item, index) => (
            <tbody>
              <tr key={item.id}>
                <td><input type="checkbox" /></td>

                <td>
                  {(() => {
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


                  })()}
                  <span><NavLink to={'/add_variation_images/' + item.id} style={{ textDecoration: 'none' }}>{item.color}</NavLink></span>
                </td>

                <td>
                  <span>{item.size}</span>
                </td>
                <td>
                  <span>{item.sellerSKU}</span>
                </td>

                <td>
                  <h5>PKR:{item.saleprice}</h5>
                </td>

                <td>
                  <input type="number" value={item.qty} style={{ width: '100px' }} />
                </td>
                <td>

                </td>
              </tr>
            </tbody>
          ))} */}
        </table> 
        {/* <VariationImage /> */}
      </div>
    </div>
  )
}

export default Variations
