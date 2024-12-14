import models from '../models';
// import { ProductRepo } from '../repositories/ProductRepo';
const { Product, Catalogue, ProductSaleOffer } = models;
const product = {
    async create(req, res, next) {
        try {
            return console.log(req.body);
            const { title, description, price, catalog_id, discount_price, start_date, end_date } = req.body;
            const image = req.file.filename;
            const product = await Product.create({
                title,
                description,
                price,
                image: image,
                catalog_id
            });
            if (discount_price !== '' && start_date !== '' && end_date !== '') {
                const product_sale_offer = await ProductSaleOffer.create({
                    product_id: product.id,
                    discount_price,
                    start_date,
                    end_date,
                    status: 1
                });
                console.log('data has store');
            } else {
                console.log('data empty');
            }
            return res.status(201).send({
                product,
                message: { success: "product has been created by successfully!" }
            });
        } catch (error) {
            return next(new Error(error));
        }
    },
    CreateGUID() {
        const guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        return console.log(guid);
    },
    async fetchAll(req, res, next) {
        try {
            const product = await Product.findAll();
            return res.json({ product, message: { success: "all product show successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },
    async fetchOne(req, res, next) {
        try {
            const Oneproductsellerdetail = await Product.findOne({
                where: {
                    id: req.params.id
                },
            });
            return res.status(200).send({ Oneproductsellerdetail, message: { success: "one product show successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },
}

export default product;
