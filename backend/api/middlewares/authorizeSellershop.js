import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import models from '../models';
import { jwtToken } from '../utils';
import { async } from 'regenerator-runtime';
import { decodeBase64 } from 'bcryptjs';
// const {Seller} = models;
const {SellerShop} = models;
config();
export default  (req,res,next) =>{
     console.log(req.body);
    if(!req.headers.authorization){
        return res.status(401).send({error:'Unauthorized'})
    }
    const token = req.headers.authorization.split(' ')[1];
     console.log(token,'token exist');
     jwt.verify(token, process.env.JWT_SECRETS,{expiresIn: '24'}, (error, decoded)=>{
        if(error){
             return res.status(401).send({error})

        }
        req.decoded = decoded;
        console.log(req.deocded = decoded,'seller id');
        SellerShop.findByPk(decoded.sellershopId).then((selleruser)=>{
            
            if(!selleruser){
                   return res.status(401).send({error:'Seller id does not exist'})

            }
            console.log(selleruser);

            next();
        })
    })

}