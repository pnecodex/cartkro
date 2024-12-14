import { combineReducers } from 'redux';
import users from './auth';
import todo from './todo';
import categories from './category';
import products from './product';
import productsellerdetails from './productsellerdetail';
import orderCreate from './order';
import allorders from './order';
import carts from './cart';
import colors from './color';
import sellers from './seller';
import imagesvariation from './productvariationimage';
import productvariationimagedetails from './productVariationReducer';
export default combineReducers({
    users: users,
    todo,
    categories: categories,
    products: products,
    productsellerdetails: productsellerdetails,
    allorders: allorders,
    orderCreate: orderCreate,
    carts: carts,
    colors: colors,
    sellers: sellers,
    imagesvariation: imagesvariation,
    productvariationimagedetails:productvariationimagedetails

});