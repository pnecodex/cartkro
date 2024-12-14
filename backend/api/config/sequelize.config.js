const fs = require('fs');

const Sequelize = require('sequelize');
const sequelizeConfig = JSON.parse(fs.readFileSync(__dirname + '/config.js', 'utf8'));

const mode = process.env.MODE || 'development';
const dialect = process.env.DB_DIALECT || sequelizeConfig[mode] || 'mysql';
const database = process.env.DB_DATABSE || sequelizeConfig[mode] || 'babelnodejs-copy';
const username = process.env.DB_USERNAME || sequelizeConfig[mode] || 'root';
const password = process.env.DB_PASSWORD || sequelizeConfig[mode]|| '';

const connectionObject = {
    host: process.env.DB_HOST || sequelizeConfig[mode].host || 'localhost',
    // dialect:process.env.DB_DIALECT || sequelizeConfig[mode].dialect || 'sqlite'
     // 'mysql'|'sqlite'|'postgres'|'mssql',
    // operatorsAliases: false,
    // retry: {max: 10},
    pool: {
        max: process.env.DB_POOL_MAX | 5,
        min: process.env.DB_POOL_MIN | 1,
        acquire: process.env.DB_POOL_ACQUIRE | 30000,
        idle: process.env.DB_POOL_IDLE | 10000
    },
};

// if (dialect === 'sqlite')
//     connectionObject.storage = sequelizeConfig[mode].storage || './app.db';

// const sequelize = new Sequelize(database, username, password, connectionObject);
const sequelize = new Sequelize()
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.User = require('../models/user.model')(sequelize, Sequelize);
db.UserRole = require('../models/user_role.model')(sequelize, Sequelize);
db.Role = require('../models/role.model')(sequelize, Sequelize);

db.Checkout = require('../models/checkout')(sequelize, Sequelize);
db.Product = require('../models/product.model')(sequelize, Sequelize);
db.Comment = require('../models/comment.model')(sequelize, Sequelize);


db.Order = require('../models/order.model')(sequelize, Sequelize);
db.OrderItem = require('../models/order_item.model')(sequelize, Sequelize);

db.FileUpload = require('../models/file_upload.model')(sequelize, Sequelize);
db.ProductImage = require('../models/product_image.model')(sequelize, Sequelize);

db.Tag = require('../models/tag.model')(sequelize, Sequelize);
db.ProductTag = require('../models/product_tag.model')(sequelize, Sequelize);
db.TagImage = require('../models/tag_image.model')(sequelize, Sequelize);

db.Category = require('../models/category.model')(sequelize, Sequelize);
db.ProductCategory = require('../models/product_category.model')(sequelize, Sequelize);
db.CategoryImage = require('../models/category_image.model')(sequelize, Sequelize);

db.User.associate(db);
db.Role.associate(db);
db.UserRole.associate(db);

db.Address.associate(db);

db.Tag.associate(db);
db.Category.associate(db);

db.FileUpload.associate(db);
db.CategoryImage.associate(db);
db.TagImage.associate(db);
db.ProductImage.associate(db);

db.Product.associate(db);
db.Comment.associate(db);

db.Order.associate(db);
db.OrderItem.associate(db);

module.exports = db;