import models from '../models';
const {TodoItem,Todo} = models;

const todoItems = {
    async create(req,res,next){
        try {
            const {text, todoId} = req.body;
            const items = await TodoItem.create({text,todoId});
            return res.status(201).send(items);
        } catch (e) {
            return next(new Error(e));
        }
    },
    async fetchAll(req,res,next){
        try {
            const {todoId} = req.params;
            const items = await TodoItem.findAll({
                where: {todoId},
                include: [{
                    model: Todo,
                    as: 'todo'
                }],
            });
            return res.status(200).send(items);
        } catch (e) {
            return next(new Error(e));
        } 
    },
    async fetchOne(req,res,next){
        try {
            const {todoItemId} = req.params;
            const items = await TodoItem.findOne({
                where: { id: todoItemId },
                include: [{
                    model: Todo,
                    as: 'todo'
                }],
            });
            return res.status(200).send(items);
        } catch (e) {
            return next(new Error(e));
        }
    },
    async update(req,res,next){
        try {
            const {text} = req.body;
            const item = await TodoItem.findOne({
                where: {id: req.params.todoItemId},
                
            });
            if (!item) {
                return res.status(404).send({error:"item does not exist"})
            }else{
                const updateItem = await TodoItem.update(
                    {text},
                    {
                        where:{
                            id: req.params.todoItemId
                        },
                        returning: true,
                        plain: true,
                    }
                    );
                    return res.status(200).send(updateItem);
                }
            } catch (e) {
            return next(new Error(e));
            }
    },
    async delete(req,res,next){
        try {
            const item = await TodoItem.findOne({
                where: {id: req.params.todoItemId},
                
            });
            if (!item) {
                return res.status(404).send({error:"item does not exist"})
            }else{
                    await item.destroy();
                    return res.status(200).send({message:"recode deleted successfuly!"});
                }
            } catch (e) {
            return next(new Error(e));
            }
    },
}
export default todoItems;