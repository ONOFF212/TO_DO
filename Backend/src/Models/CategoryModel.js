
const {EntitySchema, nullable, primary, generated, unique, joinColumn} = require('typeorm');

const Category = new EntitySchema({
    name:'Category',

    columns:{
        cid:{type:'int', generated:true, nullable:false, unique:true, primary:true, },
        name:{type:'varchar', unique:true,},
    },

    relations:{
        Products: {
            type:'one-to-many',
            target:'Product', //entity name on the other side
            inverseSide:'Category',//property name referencing Category in the product schema
            joinColumn:true,
        },
    },
    tableName:'category',
});

module.exports = Category;