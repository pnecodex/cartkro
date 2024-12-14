import models from '../models';
import base64 from 'base-64';

const { ProductVariation, ImagesGellery,Condition,Variation} = models;
const productVariation = {

    async create(req, res, next) {
        try {
            // const {color,size,sellersku,saleprice,quentity,conditionId,sellerproductId} = req.body;
            console.log(req.body);
            const createvariation = req.body;

            const productvariation = [];
            createvariation.map(data => {
                productvariation.push({
                    color: data.color,
                    size: data.size,
                    sellersku: data.sellersku,
                    saleprice: data.saleprice,
                    quentity: data.quentity,
                    conditionId: data.conditionId,
                    sellerproductId: data.sellerproductId,

                });
            })
            // const productVariation = await ProductVariation.create({color,size,sellersku,saleprice,quentity,conditionId,sellerproductId})
            const productVariation = await ProductVariation.bulkCreate(productvariation)
            // console.log(base64.encode( productVariation,));
            return base64.encode( res.status(201).send({ productVariation, message: { success: "productVariation has been created by successfully!" } }))
        } catch (error) {
            return next(new Error(error))
        }
    },

    async fetchOne(req, res, next) {
        // return console.log(req.params.sellerproductId);
        try {
            const productVariationOne = await ProductVariation.findAll({
                where: {
                    sellerproductId: req.params.sellerproductId
                },
                // order: [
                //     ['color', 'asc']
                // ],
                include: [
                    {
                    model: Variation,
                    as: 'variations',
                    order:[
                        ['size','asc']
                    ]
                    },
                    {
                    model: ImagesGellery,
                    as: 'imagesgelleries',
                    order:[
                        ['id','asc']
                    ]
                    },
                    {
                    model: Condition,
                    as: 'conditions'
                    }

            ]
            })
            // encodeBase64(
            // return console.log();
            return  res.status(200).send({ productVariationOne, message: { success: 'all variation show successfuly!' } });
        } catch (error) {
            return next(new Error(error))
        }
    },
    async fetchAllChildCategory(req, res, next) {
        try {
            const Childcategory = await ChildCategory.findAll({
                include: [
                    {
                        model: Category,
                        as: 'categories',
                    },
                    {
                        model: SubCategory,
                        as: 'subcategories',
                        attributes: ['name']

                    }
                ]
            })

            return res.status(200).send({ Childcategory, message: { success: 'all Childcategories show successfuly!' } });
        } catch (error) {
            return next(new Error(error))
        }
    }


}
export default productVariation;