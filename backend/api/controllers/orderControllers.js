const Order = require('./../config/sequelize.config').Order;
const Checkout = require('./../config/sequelize.config').Checkout;





async function createOrderAddress(req, res, transaction) {
    const name = req.body.name;
    const city = req.body.city;
    const address = req.body.address;
    const phone = req.body.phone;
    
    const addr = new Checkout({
        city,name,address,phone
    });

    

    await addr.save({transaction}).then(async address => {
        await _createOrderFromAddress(req, res, address, transaction);
    }).catch(err => {
        throw err;
    });
}
