
const {EntitySchema, joinColumn, userRepository} = require('typeorm');
const {db_Connection} = require('../dbconfig/dbconfig');

const Product = new EntitySchema({
    name:'Product',

    columns:{
        pid:{primary:true, type:'int', generated:true, unique:true, nullable:false, },
        Name:{type:'varchar'},
        description:{type:'varchar'},
        price:{type:'varchar',},
        stock:{type:'varchar'},
        imgUrl:{type:'varchar',},
    },

    relations:{
        Category :{
            target:'Category',
            type:'many-to-one',
            joinColumn:true,
        },
    },

    tableName:'Product',
});


module.exports = Product;

