// import { Op } from 'sequelize/types';
import models from '../models';
import Sequelize, { col } from 'sequelize';
import { decodeBase64 } from 'bcryptjs';
import { transformSync } from '@babel/core';
import { async } from 'regenerator-runtime';


const Op = Sequelize.Op;
// import { ProductRepo } from '../repositories/ProductRepo';
const { Productsellerdetail } = models;
const { User } = models;
const { ChildCategory } = models;
const { SubCategory } = models;
const { Category } = models;
const { Color } = models;
const { Size } = models;
const { type } = models;
const { SellerShop } = models;
const { SellerProductImage } = models;
const { SellImage } = models;
const { ImagesGellery } = models;

const SellerProductImages = {
    async create(req, res, next) {
        try {
            //    for(let image of req.files){
            let { productId, variationId } = req.body;
            //   return   console.log(req.files,'requesting');
            req.files.forEach(async (element, index, arr) => {

                //  console.log(arr,'array bulk image');

                // if(Array.isArray(image)&& image.length>0){
                // console.log(image);
                const SellerproductImage = await ImagesGellery.create({
                    //    type:element.mimetype,
                    //    name:element.filename,
                    variationId,
                    imagegellery: element.filename,

                });

                // if(sellerproductdetailIds && sellerproductdetailIds.length>0){
                //     SellerproductImage.addProductsellerdetails(sellerproductdetailIds)       
                // }

                //  console.log(SellerproductImage);
                //  if (!SellerproductImage) {
                //         return console.log('thorw is Error');
                //  }  else{
                return res.status(201).send({
                    SellerproductImage,
                    productId,
                    variationId,
                    message: { success: "Seller product image has been created by successfully!" }
                });
            });

        } catch (error) {
            return next(new Error(error))
        }
    },
    //   async  allImagesGelleries(req, res, next) {
    //     try {
    //             const allimagesgellery = await ImagesGellery.findAll({
    //                 where:{
    //                     id:req.params.id
    //                 }
    //             })

    //             return res.status(201).send({
    //                 SellerproductImage,
    //                 productId,
    //                 variationId,
    //                 message: { success: "Seller product image has been created by successfully!" }
    //             })


    //     } catch (error) {
    //         return next(new Error(error))
    //     }
    //   }
}


export default SellerProductImages;