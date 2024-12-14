import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import Register from './login/Register.jsx';
import Login from './login/Login.jsx';
import showCategory from './category/ShowCategory';
import createCategory from './category/createCategory';

import showProduct from './product/ShowProduct';

import createProduct from './product/createProduct.js';
import createProductseller from './product/createProductSeller.js';
import userProductsSellerdetail from './product/userProductsSellerdetail.js';

import Layout from '../layout/layout.js';
import Alluser from './login/Alluser.js';
import Showuser from './login/Showuser.js';
import userProduct from './product/userProducts.js';
import OneProduct from './product/OneProduct.js';
import CartShow from './product/CartShow.js';
import Checkout from './product/checkout.js';


import allorders from './product/allorders';
import dashboard from './dashboard/dashboard.js';
import adminDashboardLayout from '../adminLayout/adminDashboardLayout';
import history from 'history';
import AppRoute from './AppRoute';
import authGuard from './HOCs/authGuard';
import { createBrowserHistory } from "history";
import PlaceOrder from './product/PlaceOrder.js';
import OrderPlace from './product/OrderPlace.js';
import ShowProduct from './product/ShowProduct';
import sellerCreate from './sellershop/sellerCreate.js';
import OneProductcls from './product/OneProductcls.js';
import ProductVariation from './product/productVariation.js';
import VariationImage from './product/variationImage.js';
import variationImage from './product/variationImage.js';
import Variation from './product/variation.js';
import OneProductdetails from './oneProductDetail/oneProductdetails.js';
import VariationImages from './variationImages/variationImages.js';
import addVariation from './variationImages/addVariation.js';
import dynamicInput from './oneProductDetail/dynamicInput.js';
import PaymentMethod from './Payment/PaymentMethod.js';
import verifiedAccount from './login/verifiedAccount.js';
import AccountVerified from './login/AccountVerified.js';

function App() {
  const history = createBrowserHistory();
  console.log(history);
  return (
    <>

      <Router history={history}>
        <Switch>
          <Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <AppRoute exact path="/AccountVerified/:token" component={AccountVerified} layout={Layout} />
            <AppRoute exact path="/" component={userProduct} layout={Layout} />
            <AppRoute exact path="/create_product" component={createProduct} layout={Layout} />
            <AppRoute exact path="/show_product" component={ShowProduct} layout={Layout} />

            <AppRoute exact path="/all_category" component={showCategory} layout={Layout} />
            {/* <AppRoute path="/one-product/:id" component={OneProductcls} layout={Layout} /> */}
            <AppRoute path="/one-product/:id" component={OneProductdetails} layout={Layout} />
            {/* <AppRoute path="/one-product/:id" component={OneProduct} layout={Layout} /> */}
            <AppRoute path="/cart/:id?" component={CartShow} layout={Layout} />
            <AppRoute path="/checkout" component={Checkout} layout={Layout} />
            <AppRoute path="/payment" component={PaymentMethod} layout={Layout} />
            <AppRoute path="/placeorder" component={PlaceOrder} layout={Layout} />


            <AppRoute path="/seller_shop_man" component={sellerCreate} layout={Layout} />
            <AppRoute path="/dashboard" component={dashboard} layout={adminDashboardLayout} />
            <AppRoute path="/category" component={createCategory} layout={adminDashboardLayout} />
            <AppRoute path="/product" component={createProduct} layout={adminDashboardLayout} />
            <AppRoute path="/productseller" component={createProductseller} layout={adminDashboardLayout} />
            <AppRoute path="/edit_product/:id" component={createProduct} layout={adminDashboardLayout} />

            {/* <AppRoute exact path="/add_variation" component={authGuard(ProductVariation)} layout={adminDashboardLayout} /> */}
            <AppRoute exact path="/add_variation/:id" component={ProductVariation} layout={adminDashboardLayout} />
            <AppRoute exact path="/add_variation" component={ProductVariation} layout={adminDashboardLayout} />
            {/* <AppRoute exact path="/color_variation/:id" component={Variation} layout={adminDashboardLayout} /> */}
            {/* <AppRoute exact path="/add_variation_image" component={addVariation} layout={adminDashboardLayout} /> */}
            <AppRoute exact path="/add_variation_images/:id" component={addVariation} layout={adminDashboardLayout} />
            <AppRoute exact path="/add_variation_images" component={VariationImages} layout={adminDashboardLayout} />
            {/* <AppRoute exact path="/add_variation_images/:id" component={variationImage} layout={adminDashboardLayout} /> */}
            <AppRoute path="/allproductseller" component={userProductsSellerdetail} layout={adminDashboardLayout} />
            {/* <AppRoute path="/allproductseller" component={authGuard(userProductsSellerdetail)} layout={adminDashboardLayout} /> */}
            <AppRoute path="/allorders" component={authGuard(allorders)} layout={adminDashboardLayout} />
            <AppRoute path="/add_variation/:" component={addVariation} layout={adminDashboardLayout} />
            <AppRoute path="/dynamic_input" component={dynamicInput} layout={Layout} />


          </Route>
        </Switch>
      </Router>



    </>
  )

}


export default App;

