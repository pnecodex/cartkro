import models from '../models';
// import { ProductRepo } from '../repositories/ProductRepo';
const {Productseller} = models;

const productseller = {
    async create({body,decoded},res,next){
        try {

            const {name,price,} = body;
            const {userId} = decoded;
            // const image = req.file.filename;
            // console.log( title,description,price,categoryId);
            // return console.log(image);
            //:params.categoryId

            const productseller = await Productseller.create({name,price,userId});
            console.log(productseller);
            return res.status(201).send({
                productseller,
                userId,
                // image_url:`htpp://localhost:4244/image/${req.file.filename}`,
                message:{success:"product has been created by successfully!"}
            })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async fetchAll(req, res, next){
        try {

        //    console.log(image_url);

            const product = await Product.findAll();
            // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
            return res.json({product, message:{success:"all product show successfully!"}})
        } catch (error) {
            return next(new Error(error))
        }
    }
}

export default productseller;
