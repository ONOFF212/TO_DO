
const product=require('../Models/productModel');
const db_Connection = require("../dbconfig/dbconfig");

const getData = async ctx =>{
    const productRepo = db_Connection.getRepository(product);
    const lists = await productRepo.find();
    ctx.body = lists;
};

const getDataById = async(ctx)=> {
    const productRepo = db_Connection.getRepository(product);
    const result = await productRepo.findOneBy({
       pid  : ctx.params.id
    });

    ctx.body = result;
};

module.exports = {getData, getDataById};