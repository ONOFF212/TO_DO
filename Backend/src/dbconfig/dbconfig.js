
const {DataSource} = require('typeorm');
const Product = require('../Models/productModel');
require('dotenv').config();


const db_Connection = new DataSource({
    type     :"postgres",
    port     :process.env.DB_PORT,
    host     :process.env.DB_HOST,
    username :process.env.DB_USER,
    password :process.env.DB_PASSWORD,
    database :process.env.DB_NAME,

    synchronize:false,
    logging:false,

    entities:[
        require('../Models/productModel'),
        require('../Models/CategoryModel')
    ],

    migrations:[
        __dirname + "/../migrations/*.js"
    ],
});




module.exports = db_Connection;