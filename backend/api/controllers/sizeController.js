import models from '../models';
// import { ProductRepo } from '../repositories/ProductRepo';
const {Size} = models;
// const {Category} = models;
const size = {
    async create(req,res,next){
        try {

            const {name} = req.body;
            console.log(req.body);
            const size = await Size.create({
                name
            });
            
            return res.status(201).send({size,message:{success:'size created'}})
        } catch (error) {
            return next(new Error(error))
        }
    },


}

export default size;
