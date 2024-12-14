import models from '../models';
// import { ProductRepo } from '../repositories/ProductRepo';
const {Color} = models;
// const {Category} = models;
const color = {
    async create(req,res,next){
        try {

            const {name} = req.body;
            console.log(req.body);
            const color = await Color.create({
                name
            });
           
            return res.status(201).send({color,message:{success:'color created'}})
        } catch (error) {
            return next(new Error(error))
        }
    },
    async fetchColor(req,res,next){
        try {

            const colors = await Color.findAll()
           
            return res.status(201).send({colors,message:{success:'fetch all colors'}})
        } catch (error) {
            return next(new Error(error))
        }
    },


}

export default color;
