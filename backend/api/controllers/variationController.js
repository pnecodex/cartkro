import models from '../models';
const { Variation, ImagesGellery,Condition } = models;
const Variations = {

    async create(req, res, next) {
        try {
            // const {cId,size,sellerSKU,saleprice,qty,conditionId,sellerproductId} = req.body;
    //  return   console.log(req.body);
            const createvariation = req.body;

            const productvariation = [];
            createvariation.map(data => {
                productvariation.push({
                  
                    size: data.size,
                    sellersku: data.sellersku,
                    saleprice: data.saleprice,
                    quentity: data.quentity,
                    conditionId: data.conditionId,
                    cId: data.cId,

                });
            })
            // const ColorVariation = await Variation.create({cId,size,sellerSKU,saleprice,qty,conditionId,sellerproductId})
            const ColorVariation = await Variation.bulkCreate(productvariation)
            console.log(ColorVariation);
            return res.status(201).send({ ColorVariation, message: { success: "productVariation has been created by successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },

    async fetchOne(req, res, next) {
        // return console.log(req.params.sellerproductId);
        try {
            const colorVariationOne = await Variation.findAll({
                where: {
                   cId: req.params.colorId
                },
                order: [
                    ['size', 'desc']
                ],
                include: [
                    // {
                    // model: ImagesGellery,
                    // as: 'imagesgelleries'
                    // },
                    {
                    model: Condition,
                    as: 'conditions'
                    }

            ]
            })
            // return console.log();
            return res.status(200).send({ colorVariationOne, message: { success: 'all variation show successfuly!' } });
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
export default Variations;