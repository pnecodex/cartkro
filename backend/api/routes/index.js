import auth from "../controllers/authController"
import validator from "../middlewares/auth";
import todos from "../controllers/todoController";
import authorize from "../middlewares/authorize";
import todoItems from "../controllers/todoItemsController";
import category from '../controllers/categoryController';
import product from "../controllers/productController";
import productsellerController from '../controllers/productsellerController';
import productsellerdetailController from '../controllers/productsellerdetailController'
import uploadFile from "../middlewares/upload";
import orderController from '../controllers/orderController';
import colorController from "../controllers/colorController";
import sizeController from "../controllers/sizeController";
import typeController from "../controllers/typeController ";
import SellerShopController from '../controllers/sellerShopController'
import authorizeSellershop from "../middlewares/authorizeSellershop";
import sessionctlContorller from "../controllers/sessionController";
import SellerProductImageController from "../controllers/sellerProductImageController";
import productVariationController from "../controllers/productVariationController";
import variationController from "../controllers/variationController";
export const routes = (app) => {
    /*Main Category*/
    app.post('/api/create_category', category.create);
    app.get('/api/all_category', category.MainCategoryfetchAll);
    app.get('/api/auth/sign', (req, res) => res.send({ message: 'message is' }));

    /*Sub category*/
    app.post('/api/create_subcategory', category.SubCategoryCreate);
    app.get('/api/all_subcategory', category.SubCategoryfetchAll);
    app.get('/api/auth/sign', (req, res) => res.send({ message: 'message is' }));

    /*Child category*/
    app.post('/api/create_childcategory', category.ChildCategoryCreate);
    app.get('/api/all_child_category', category.fetchAllChildCategory);
    app.get('/api/auth/sign', (req, res) => res.send({ message: 'message is' }));


    // seller Sign in and Singup routes
    app.post('/api/auth/sign_up', validator, auth.signUp);
    app.post('/api/auth/sign_in', auth.signIn);
    app.get('/api/auth/alluser', auth.fetchAll)
    app.get('/api/auth/account-unverified-user/:id', auth.fetchOneUserUnverified)
    app.patch('/api/auth/account-verification/:id', auth.AccountVerification)

    app.post('/api/todos', authorize, todos.create);
    app.get('/api/todos', authorize, todos.fetchAll);
    app.get('/api/todos/:todoId', authorize, todos.fetchOne);
    app.put('/api/todos/:todoId', authorize, todos.update);
    app.delete('/api/todos/:todoId', authorize, todos.delete);

    app.post('/api/todoItems', todoItems.create);
    app.get('/api/todoItems/:todoId', todoItems.fetchAll);
    app.get('/api/todoItems/:todoItemId', todoItems.fetchOne);
    app.put('/api/todoItems/:todoItemId', todoItems.update);
    app.delete('/api/todoItems/:todoItemId', todoItems.delete);

    app.post('/api/create_product', uploadFile.single('image', 8), product.create);
    app.get('/api/all-product', product.fetchAll);


    app.post('/api/create-productseller', authorize, productsellerController.create);


    // app.post('/api/productsellerdetail', uploadFile.array('sellimg', 8), authorize, productsellerdetailController.create);
    // app.post('/api/productsellerdetail', uploadFile.array('sellimg', 8), authorize, productsellerdetailController.create);
    app.post('/api/productsellerdetail', uploadFile.single('image'), productsellerdetailController.create);
    app.get('/api/all-productsellerdetail', authorize, productsellerdetailController.fetchAll);
    app.get('/api/alls-productsellerdetail', productsellerdetailController.fetchAlls);
    app.get('/api/one-productsellerdetails/:id', productsellerdetailController.fetchOneProduct);
    app.get('/api/one-productsellerdetail/:id', product.fetchOne);
    app.post('/api/productsearch', productsellerdetailController.ProductSearch);
    app.get('/api/product_by_seller_catalog_slug/:catalogueslug', productsellerdetailController.ProductbySellerCatalogSlug);

    app.post('/api/createorder', orderController.createOrder);
    app.get('/api/allorders', authorize, orderController.fetchOrders);
    // app.post('/api/checkout',morderController.createCheckout);
    app.post('/api/payment', orderController.Payment)

    app.post('/api/create_color', colorController.create);
    app.get('/api/all_color', colorController.fetchColor);
    app.post('/api/create_size', sizeController.create);
    app.post('/api/create_type', typeController.create);

    /**Seller shop Routing**/
    app.post('/api/seller_shop', uploadFile.single('sellerimage'), authorize, SellerShopController.create);
    app.get('/api/seller_shop_one/:id', SellerShopController.fetchOne);
    app.get('/api/seller_shop_seller', SellerShopController.fetchAll);
    app.post('/api/sellersearch', SellerShopController.SellerSearch);

    // user info session store server side
    // app.post('/api/seller_user_info', sessionctlContorller.createSession)
    ///////////////////////////
    // productVarationImagesGelleries
    app.post('/api/seller_product_image', uploadFile.array('image', 8), SellerProductImageController.create);
    ///////////////////////.
    // product variation route 
    app.post('/api/product_variation', productVariationController.create);
    app.get('/api/product_variation_one/:sellerproductId', productVariationController.fetchOne);

    ////////////////////////////
    // variationRoutes
    app.post('/api/color_variation', variationController.create);
    app.get('/api/color_variation_one/:colorId', variationController.fetchOne)

    ///////////
    // categories ///routes
    app.post('/api/create_catelogue_categories', uploadFile.single('image'), category.createCategories);
    app.get('/api/file_all_catelogue_categories', category.findAllCategories);
    app.get('/api/sub_catelogues/:id', category.subCatelogues);
    // app.get('/api/file_all_catelogue_categories', category.ProductbySellerCatalogSlug);

};

export default routes;