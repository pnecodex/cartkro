import models from '../models';
const { Category } = models;
const { SubCategory } = models;
const { ChildCategory } = models;
const { Categories } = models;
const { Catalogue } = models;
const { CatalogueProduct } = models;
const { CatalogProduct } = models;
const { CategorSellerProduct } = models;
const category = {

    async create(req, res, next) {
        try {
            const { title, description } = req.body;
            console.log(req.body, title, description);
            const category = await Category.create({ title, description })
            return res.status(201).send({ category, message: { success: "category has been created by successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },
    async SubCategoryCreate(req, res, next) {
        try {
            const { brandName, categoryId } = req.body;
            console.log(req.body);
            const Subcategory = await SubCategory.create({ brandName, categoryId })
            return res.status(201).send({ data: Subcategory, message: { success: "Subcategory has been created by successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },
    async ChildCategoryCreate(req, res, next) {
        try {
            const { name, subcategoryId, categoryId } = req.body;
            const Childcategory = await ChildCategory.create({ name, subcategoryId, categoryId })
            return res.status(201).send({ Childcategory, message: { success: "Childcategory has been created by successfully!" } })
        } catch (error) {
            return next(new Error(error))
        }
    },
    async MainCategoryfetchAll(req, res, next) {
        try {
            const category = await Category.findAll();

            return res.status(200).send({ category, message: { success: 'all categories show successfuly!' } });
        } catch (error) {
            return next(new Error(error))
        }
    },
    async SubCategoryfetchAll(req, res, next) {
        try {
            // return console.log(res,'subcategory');
            const subcategories = await SubCategory.findAll({

                include: [
                    {
                        model: Category,
                        as: 'categories',
                        // attributes:['title']

                    }
                ]
            });
            return res.status(200).send({ subcategories, message: { success: 'all Subcategories show successfuly!' } });
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
                ]
            })

            return res.status(200).send({ Childcategory, message: { success: 'all Childcategories show successfuly!' } });
        } catch (error) {
            return next(new Error(error))
        }
    },
    // hooks function
    categoriesSellerProduct(categoreisSeller, parentId = null) {
        const categoriesList = [];
        let categorySeller;
        if (parentId == null) {
            categorySeller = categoreisSeller.filter(categorySeller => categorySeller.parentId == undefined)
        } else {
            categorySeller = categoreisSeller.filter(categorySeller => categorySeller.parentId == parentId)

        }
        for (let cate of categorySeller) {
            categoriesList.push({
                id: cate.id,
                cataloguename: cate.cataloguename,
                catalogueslug: cate.catalogueslug,
                parentId: cate.parentId,
                children: category.categoriesSellerProduct(categoreisSeller, cate.id)
            });
        }
        return categoriesList;
    },
    async createCategories(req, res, next) {
        try {

            const { cataloguename, catalogueslug, parentId } = req.body;
            // const image = req.file.filename;
            // if(!image){
            // return 'not image'
            const createcategories = await Catalogue.create({ cataloguename, catalogueslug, parentId })
            return res.status(201).send({ createcategories, message: { success: "category has been created by successfully!" } })
            // }
            //   return  console.log(req.body);
        } catch (error) {
            return next(new Error(error))
        }
    },
    async findAllCategories(req, res, next) {
        try {
            // const { catalogue, parentId } = req.body;
            const findAllcategoriesSeller = await Catalogue.findAll();
            if (findAllcategoriesSeller) {
                const categoryList = category.categoriesSellerProduct(findAllcategoriesSeller)
                return res.status(201).send({ categoryList, message: { success: "fetch all category successfully!" } })
            }
        } catch (error) {
            return next(new Error(error))
        }

    },
    async subCatelogues(req, res, next) {
        try {
            const sub_catelogues = await Catalogue.findAll({
                where:{
                    parentId:req.params.id
                }
            });
            return res.status(201).send({sub_catelogues,message:{success:"subcategories"}})
        } catch (error) {
            return next(new Error(error));  
        }
        
        Catalogue.findByPk(
                req.params.id
            
        ).then(async(data) => {
            if (!data) {
                 return res.status(401).send({ error: 'SubCatelogues does not exist' })

            }
            const sub_catelogues = await Catalogue.findAll({
                where:{
                    parentId:data.id
                }
            })
            return res.status(200).send({sub_catelogues, success: 'sub_catelogues success' });
            next();
        })
    }

}
export default category;