// import { Op } from 'sequelize/types';
import models from '../models';
import Sequelize, { col } from 'sequelize';
import { decodeBase64 } from 'bcryptjs';
import { transformSync } from '@babel/core';
import { async } from 'regenerator-runtime';
import category from './categoryController';
// const {SellerProductImage} = models;

const Op = Sequelize.Op;
// import { ProductRepo } from '../repositories/ProductRepo';
const { Productsellerdetail } = models;
const { User } = models;
const { ChildCategory } = models;
const { SubCategory } = models;
const { Category } = models;
const {Color} = models;
const {Size} = models;
const {type} = models;
const {SellerShop} = models;
const {SellImage} = models;
const {SellerProductImage} = models;
const {ProductVariation} = models;
const { Catalogue } = models;
console.log(typeof Catalogue, 'catalog');


const productsellerdetail = {
    async create(req, res, next) {
        try {

            const {catalogues, name,price,stock} = req.body;
            // const {catalogues,types,sizes,colors,name,price,stock} = req.body;
            // for(let i=0; req.files !=null && i<req.files.length;i++){
            //    const image = rq.files;
            //      console.log( req.files[i]);
            // }
            // const image = req.file.filename;
            // const {userId} = req.decoded;
            //  console.log(image);
            // return console.log(userId);
            // return console.log(req.body);
            // const {sellershopId} = req.decoded;
            // return console.log(sellershopId);
            // console.log(sellershpId,'suserid is response');

            // console.log(image);
            const productsellerdetail = await Productsellerdetail.create({name,price,stock});
            // const productsellerdetail = await Productsellerdetail.create({name,price,stock});
            // const productsellerdetail = await Productsellerdetail.create({userId,name,price,stock,image});

            // req.files.forEach(async(element,index,arr) => {
            //     var els =  await element.filename

            //  console.log(els,'as');
            // //  const productsellerdetail = await Productsellerdetail.create(data);
            //     if(colors && colors.length>0 ||  sizes && sizes.length>0 || types && types.length>0 ||sellimgs && sellimgs.length>0){
            //     // if(sellimg && sellimg.length>0){
            if (catalogues && catalogues.length > 0) {
                //         // return console.log(sellimg  );
                //         // return console.log(addSellerProductImages,'variable in');
                //         //  productsellerdetail.addSellerProductImages(sellimg)        
                //  productsellerdetail.addColors(colors)        
                //         // productsellerdetail.addSizes(sizes)  
                //         // productsellerdetail.addTypes(types)  


                //     //   return  console.log(prodcutsellerdetail);
                productsellerdetail.addCatalogues(catalogues);
            }
            console.log(req.body);

            // });
            return res.status(201).send({
                productsellerdetail,
                // userId,
                // colors,
                // types,
                // sizes,
                catalogues,
                // image_url:`htpp://localhost:4244/image/${req.file.filename}`,
                message: { success: "product has been created by successfully!" }
            })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async fetchAll({ decoded }, res, next) {
        try {

            const {userId} = decoded;
        // return    console.log(userId);
            const productsellerdetail = await Productsellerdetail.findAll({
                // where: {
                //     userId: decoded.userId
                // },
                // include: [
                //     {
                //         model: User,
                //         as: 'users',
                //         // through: { attributes: ['name'] }
                //     },
                //     {
                //         model: ChildCategory,
                //         as: 'childcategories',
                //         attributes: ['name']
                //     },
                //     {
                //         model: SubCategory,
                //         as: 'subcategories',
                //         attributes: ['name']
                //     },
                //     {
                //         model: Category,
                //         as: 'categories',
                //         attributes: ['title']
                //     },
                //     {
                //         model: ProductVariation,
                //         as: 'productvariations',
                //         //  attributes: ['title']
                //     },
                // ]

            });
            // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
            return res.status(200).json({ productsellerdetail, message: { success: "all product show successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async fetchAlls(req, res, next) {
        try {

        
            const productsellerdetail = await Productsellerdetail.findAll({
                        // where: {
                        //     userId: req.params.userId
                        // },
                // include: [
                //     {
                //         model: User,
                //         as: 'users',
                //         attributes: ['name']
                //     },
                //     {
                //         model: ChildCategory,
                //         as: 'childcategories',
                //         // through: { attributes: ['name'] }
                //     },
                //     {
                //         model: Color,
                //         as: 'colors',
                //         attributes: ['name'],
                //         //  product 
                //     },
                //     {
                //         model: Size,
                //         as: 'sizes',
                //         attributes: ['name'],
                //         //  product 
                //     },
                //     {
                //         model: type,
                //         as: 'types',
                //         attributes: ['name'],
                //         //  product 
                //     },
                //     {
                //         model: SellerShop,
                //         as: 'sellershops',
                //         attributes: ['name', 'sellerimage', 'address', 'location', 'market'],
                //         //  product 
                //     },
                //     {
                //         model: SellImage,
                //         as: 'sellimages',

                //     },
                // ]

            });
            // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
            return res.status(200).send({ productsellerdetail, message: { success: "all product show successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async fetchOneProduct(req, res, next) {
        try {

            const Oneproductsellerdetail = await Productsellerdetail.findOne({
                where: {
                    id: req.params.id
                },
                // include: [
                //     {
                //         model: Color,
                //         as: 'colors',
                //         attributes: ['name'],
                //         through: { attributes: ['colorId'] }
                //     },
                //     {
                //         model: SellImage,
                //         as: 'sellimages',
                //         // attributes: ['id','name']


                //     },
                //     {
                //         model: ProductVariation,
                //         as: 'productvariations',
                //         // attributes: ['id','name']


                //     },
                // ]

            });
            // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
            return res.status(200).send({ Oneproductsellerdetail, message: { success: "one product show successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async ProductSearch(req, res, next) {
        try {

            const { search } = req.body;

            const productsellerdetailSearch = await Productsellerdetail.findAll({
                where: {
                    name: { [Op.like]: '%' + search + '%' },
                },
                include: [
                    {
                        model: User,
                        as: 'users',
                        // through: { attributes: ['name'] }
                    },
                ]



            });
            // return console.log(productsellerdetailSearch);
            // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
            return res.status(200).json({ productsellerdetailSearch, message: { success: "all product Search successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },
    async ProductbySellerCatalogSlug(req, res, next) {
        try {

            // const { catalogueslug } = req.body;
           if(!req.params){
            return res.status(404).send({message:'error'})

        }else{
            const productbysellerslug = await Catalogue.findOne({
                where: {
                    catalogueslug:req.params.catalogueslug
                },
                include: [
                    {
                        model: Productsellerdetail,
                        as: 'productsellerdetails',
                        // through: { attributes: ['name'] }
                    },
                    {
                        model: Catalogue,
                        as: 'catalogues',
                      attributes: ['id','cataloguename']
                    }
                ]



            });
            return res.status(200).json({ productbysellerslug, message: { success: "all product Search successfully!" } })
        }
            // return console.log(productsellerdetailSearch);
            // return res.status(201).send({product,image_url:{image_url}, message:{success:"all product show successfully!"}})
        } catch (error) {
            return next(new Error(error))
        }
    },


}

export default productsellerdetail;
