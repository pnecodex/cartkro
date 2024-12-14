import React, { useEffect, useState } from 'react';
import { addToCart, removeFromCart } from '../../actions/cart'
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../../actions/cart'
import { CreateOrder } from '../../actions/order';
// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition(); 
// recognition.start()
function Checkout(props) {

  const cart = useSelector(state => state.carts);
  const { cartItems } = cart;

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  // const [cont,setCount] = useState(0);
  const dispatch = useDispatch();


  //  const  speechhadle = ()=>{
  //    recognition.onstart = () =>{
  //      console.log('speech recongnized');
  //     }
  //   }
  //   useEffect(()=>{
  //     speechhadle();

  //   },[])
  //   recognition.onresult = (e) =>{
  //       const crnt = e.resultIndex;
  //       console.log(crnt);
  //       let transcript = e.results[crnt][0].transcript;
  //       let mobilerepeatbug = (crnt === 1 && transcript === e.results[0][0].transcript);
  //       if(!mobilerepeatbug){
  //         if(transcript === 'next' || transcript === 'next'){
  //           setCount(cont +1);
  //         }
  //         if(transcript === 'back' || transcript === 'back'){
  //           setCount(cont - 1 ? cont === - 0 :null);
  //         }
  //       }

  //   setTimeout(()=>{
  //     recognition.start();
  //   },20)

  //   } 
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShipping({ name, address, phone, city }));
    // dispatch(CreateOrder(cartItems));
    props.history.push('/payment');
  }
  // console.log(this.hadlerSubmit);
  return (

    <div className="container w-50">
      {/* <button onClick={()=> setCount(cont + 1)}>next</button>
          <p>{cont}</p>
          <button onClick={()=> setCount(cont - 1)} >back</button>
          <button onClick={window.location} >open</button> */}
      <div>
        <div className="cart">

          <div className="cart-list">
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shoping Cart
                </h3>
                <div>
                  <h2>
                    Price
                  </h2>
                </div>
              </li>

              {
                cartItems.length === 0 ?
                  <div>
                    Cart is Empty
                  </div>
                  :
                  cartItems.map(item =>
                    <li>
                      <div>
                        <div className="cart-image">
                          {item.image !== null ? <img src={`http://localhost:4244/image/` + item.image} alt="product" /> : null}
                          {item.image !== null ? <img src={`http://localhost:4244/image/` + sessionStorage.getItem('images', item.image)} alt="product" /> : null}
                        </div>
                        <div>

                          <div className="cart-name">
                            {item.name}
                          </div>
                          <div className="cart-price">
                            {item.price}
                          </div>
                          <div>

                            Qty: {item.qty}
                          </div>
                        </div>

                      </div>

                    </li>
                  )}


            </ul>
          </div>


          <div className="cart-action">
            <h4>


            </h4>

          </div>


        </div>
      </div>
      <h2 className="text-center">Checkout</h2>

      <form onSubmit={handlerSubmit}>

            <div className="form-group">
             <label htmlFor="exampl eInputEmail1">Name</label>
             <input
             type="text"
             id="name"
             name="name"
             className="form-control"
             placeholder="Enter Name"
             onChange={(e)=> setName(e.target.value)}
             />

           </div>
             {
          // name < 12 ? <div className="form-group">
          //   <label htmlFor="exampl eInputEmail1">Name</label>
          //   <input
          //     type="text"
          //     id="name"
          //     name="name"
          //     className="form-control"
          //     placeholder="Enter Name"
          //     onChange={(e) => setName(e.target.value)}
          //   />

          // </div> : null
        }

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Delivery Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            placeholder="Enter Phone"
            onChange={(e) => setPhone(e.target.value)}
          />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-control"
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          />

        </div>
        <button type="submit" className="btn btn-primary">Checkout</button>
      </form>



    </div>
  )
}

export default Checkout
