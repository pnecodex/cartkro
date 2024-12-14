import { async } from 'regenerator-runtime';
import sequelize, { ARRAY, NUMBER } from 'sequelize';
const Stripe = require('stripe')("sk_test_51Kf1MjBFBTl526QUbO8TQWAuwrDX48eCgrhfS60TnEXhWqlTWHk8992hYX38jq2GadKENbTt9OS4abzK2Z23fNgH00WR6RzxP0");
import { production } from '../config/config';
const Op = sequelize.Op;
// const Transaction = sequelize.Transaction
import models from '../models';
// import Productsellerdetails from '../models';
const { Products, Order, Checkout, User } = models;
const order = {
    async createTransection(work) {
        const t = await client.transaction();

        try {
            await work(t);
            return t.commit();
        } catch (err) {
            t.rollback();
            throw err;
        }
    },
    async createCheckout(req, res, next) {
        try {

            // const {users, ...data} = req.body;
            // let transaction = await db.sequelize.transaction({autocommit:false});

            const { name, address, phone, city } = req.body;
            const checkout = await Checkout.create({ name, address, phone, city }, { transaction: order.t });
            // await transaction.commit();
            console.log(req.body);

            return res.status(201).send({ checkout, message: { success: 'checkout create successfully' } })
            //}


        } catch (error) {
            // await transaction.rollback();
            return next(new Error(error))

            // console.log(e);
        }

    },

    async createfun(req, res) {
        let data = {
            "messages": [{
                "msgFrom": "13223821242",
                "msgBody": "Hi there"
            }, {
                "msgFrom": "Bill",
                "msgBody": "Hello!"
            },
                // { name: 'as', address: 'as', phone: 'as', city: 'as' }
            ],


        }

        for (var key in data) {
            var obj = data[key];
            console.log(obj);
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    console.log(prop + " = " + obj[prop]);
                }

            }

        }

        return console.log('function called');
    },
    async createOrder(req, res, next) {
        // const t = await sequelize.transaction();
        let t = await models.sequelize.transaction({ autocommit: true });

        try {
            return console.log(req.body);
            const { name, address, phone, city } = req.body.ship;
            const checkouts = await Checkout.create({ name, address, phone, city })
            const createorder = req.body.order;
            return Promise.all(createorder.map(async (item) => {
                const orderItem = await Order.create({
                    // productId: item.productId,
                    userId: item.userId,
                    price: item.price,
                    qty: item.qty,
                    checkoutId: checkouts.id
                },
                    { transaction: t }
                );
                await t.commit();
                return order.Order(orderItem)
            }));
            // const chek = await checkouts;
            //   var checkouts =  order.createCheckout();
            //  console.log(checkouts.id,'checkout id');
            //    console.log(req.body,'order data 1');




            //    orderdata.forEach(async (element) => {

            //    const order = await orderdata.bulkCreate([orderdata]);
            //    return console.log(, 'order data');
            // }); 
            // const createorder = { 
            //  qty : req.body.qty,
            //  userId : req.body.userId,
            //  productId : req.body.userId,
            //  price : req.body.price,
            //  checkoutId : req.body.checkoutId = checkouts.id,
            // }  
            // var orderSuccess = []

            var createorders = req.body;
            // const {qty,userId,productId,price,checkoutId=checkouts.id}= req.body
            for (var key in createorders) {
                var obj = createorders[key];
                // let obj = key;
                console.log(obj, 'obj called');


            }

            // const orderss = await Order.create({obj});
            // return console.log(orderss,'order created successfuly');
            // console.log(obj,'order create');
            // console.log(obj,'obj called');
            let newOrder = [];
            obj.map(data => {
                newOrder.push({
                    productId: data.productId,
                    userId: data.userId,
                    price: data.price,
                    qty: data.qty,
                    checkoutId: data.checkoutId = checkouts.id
                });
            })
            //  console.log(data,'created order');
            const order = await Order.bulkCreate(newOrder, { transaction: transaction });
            if (checkouts && order) {
                await transaction.commit();
            }
            return console.log(typeof order, 'dont error');
            // const {qty,userId,productId,price,checkoutId =checkouts.id} = req.body;
            //  console.log(req.body);
            //     req.body.forEach(async (element) => {
            //      console.log(element,'element value');
            //      const orders = await Order.bulkCreate(element);
            //      console.log(orders);

            //     // return res.status(201).send({data:orders,message:{success:'order created'}})
            //     });





        } catch (error) {
            await t.rollback();
            return next(new Error(error))
        }
    },   
    async fetchOrders({ decoded }, res, next) {
    try {
      
        const allOrders = await Order.findAll({
            where: {
                userId: decoded.userId
            },
            include: [
                {
                    model: Checkout,
                    as: 'checkouts'
                }
            ]
        });

        return res.status(200).send({ allOrders, message: { success: 'all orders' } })
    } catch (error) {
        // statements
        return next(new Error(error))
        console.log(error);
    }

},
    async Payment(req, res, next) {
    try {
        const { cartItems, token } = req.body;
        const customer = await Stripe.customers.create({
            email: token.email,
            source: token.id
        })

        const charger = await Stripe.charges.create({
            amount: cartItems[0].price * 100,
            currency: "PKR",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchased the ${cartItems[0].image}`
        });
        return res.status(200).send(charger)
    } catch (error) {
        return next(new Error(error))
    }
}

}
export default order;