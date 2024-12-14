import { decodeBase64 } from 'bcryptjs';
import session from 'express-session';
import models from '../models';
import {jwtTokens}  from '../utils/sellershop';
import Sequelize from 'sequelize';

    
const Op = Sequelize.Op;
const {SellerShop} = models;
const {User} = models;
// const {Seller} = models;
console.log(jwtTokens.createTokens);

const SellerShops = {
    async create(req,res,next){
        try{
            // return console.log(req.file);
        const {name,market,location,address} = req.body;
        const imageUrl = 'http://localhost:4244/image/';
        const {userId} = req.decoded;
        const sellerimage = imageUrl+req.file.filename;
        // console.log(sellerimage);
       
      
        const sellerShop = await SellerShop.create({sellerimage,userId,name,market,location,address})
        // console.log(sellerShop);
        const sellerT = jwtTokens.createTokens(sellerShop)
        return res.status(201).send({
            sellerShop,
            sellerT,
            message:{success:"sellershop has been created by successfully!"}
        })

        }catch(error){
            return next(new Error(error))
        }
    },
    async fetchOne(req,res,next){
        try{
       
        const sellerShop = await Seller.findOne({where:{id:req.params.id,include:[{model:User,as:'users'}]}});
        // const sellerT = jwtTokens.createTokens(sellerShop)
        // console.log(sellerT);    
        return res.status(201).send({
            sellerShop,
            // sellerT,
            message:{success:"sellershop has been created by successfully!"}
        })

        }catch(error){
            return next(new Error(error))
        }
    },
    async fetchAll({decoded},res,next){
        try{
        // const {sellershopname,sellershopmarketname,sellershoplocation,sellershopfulladdress} = req.body;
        // const {userId} = req.decoded;
    //  return  console.log(userId);
    const sellerShop = await SellerShop.findAll({ 
        // where: {
        //    userId: decoded.userId
        //  },
         include:[
             {
               model:User,
               as:'users'  
             }
         ]
         });
    //  console.log(sellerShop);    
        // const sellerT = jwtTokens.createTokens(sellerShop)
        return res.status(201).send({
            sellerShop,
            // sellerT,
            message:{success:"all seller fetch successfully!"}
        })

        }catch(error){
            return next(new Error(error))
        }
    },
    async SellerSearch(req, res,next){
        try {

            const {sellersearch}  = req.body;
 
            const SellerSearchs = await SellerShop.findAll({
                    where: {
                        name:{[Op.like]: '%' + sellersearch + '%'},
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
            return res.status(200).json({SellerSearchs, message:{success:"seller Search successfully!"}})
        } catch (error) {
            return next(new Error(error))
        }
    },

}

export default SellerShops;