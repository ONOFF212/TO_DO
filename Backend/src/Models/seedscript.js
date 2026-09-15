
const db_Connection = require("../dbconfig/dbconfig");
const product = require("./productModel");
const category = require("./CategoryModel");
// const path = require("path");


// const imgPath = path.join(__dirname, 'img');
// console.log( "image path is:" ,imgPath);

const seedDatabase = async () => {
    try {
        if (!db_Connection.isInitialized) {
            await db_Connection.initialize();
            console.log("Database connected successfully...");
        }

        const categoryRepo = db_Connection.getRepository(category);
        const productRepo = db_Connection.getRepository(product);

        const categoryData = [
            { name: "Electronics & Media" },
            { name: "Health & Beauty" },
            { name: "Fashion & Apparel" },
            { name: "Home & Lifestyle" }
        ];

        let savedCategories = await categoryRepo.find();

        if (savedCategories.length === 0) {
            const categoryEntities = categoryRepo.create(categoryData);
            savedCategories = await categoryRepo.save(categoryEntities);

            console.log("Categories created successfully.");
        } else {
            console.log("Categories already exist.");
        }

        const electronics = savedCategories.find(
            category => category.name === "Electronics & Media"
        );

        const fashion = savedCategories.find(
            category => category.name === "Fashion & Apparel"
        );

        const health = savedCategories.find(
            category => category.name === "Health & Beauty"
        );

        const home = savedCategories.find(
            category => category.name === "Home & Lifestyle"
        );

        const productData = [
                {Name:'Desktop', description:'A powerful stationary computer built for heavy multitasking, productivity, and high-performance gaming.',     price:'Rs 77,000',    stock:"100",   imgUrl:'desktop.jpg', Category:electronics },
                {Name:'Laptop',  description:'A portable and lightweight computer ideal for working, studying, or entertainment on the go.',                price:'Rs 90,000',    stock:"157",   imgUrl:'laptop.jpg',  Category:electronics },  
                {Name:'Iphone',  description:'A premium smartphone featuring a sleek design, advanced camera systems, and a seamless user interface.',      price:'Rs 1,22,000',  stock:"77",    imgUrl:'ip.jpg',      Category:electronics },
                {Name:'TV',      description:'A smart streaming media player that connects to your television to deliver apps, movies, and live channels.', price:'Rs 1,50,000',  stock:"400",   imgUrl:'tv.jpg',      Category:electronics },              
                {Name:'Camera',  description:'A high-resolution digital camera designed to capture professional-grade photos and crisp videos.',            price:'Rs 1,000,000', stock:"5",     imgUrl:'camera.jpg',  Category:electronics },
                                
                //Fashion and Apparel
                {Name:'BoxPant', description:'Versatile and comfortable trousers tailored for both casual outings and professional settings.',    price:'Rs 800',   stock:'200',   imgUrl:'boxpants.jpg', Category:fashion },
                {Name:'Shirt',   description:'A classic button-down shirt made from breathable fabric, perfect for formal or smart-casual wear.', price:'Rs 1,200', stock:'221',   imgUrl:'shirt.jpg',    Category:fashion },
                {Name:'T-shirt', description:'A soft, everyday cotton tee designed for maximum comfort and a relaxed fit.',                       price:'Rs 700',   stock:'119',   imgUrl:'tshirt.jpg',   Category:fashion },
                {Name:'Shoes',   description:'footwear excellent support for daily walking or athletic activities.',                              price:'Rs1,300',  stock:'90',    imgUrl:'shoes.jpg',    Category:fashion },
                {Name:'Shoes',   description:'Durable and stylish footwear engineered to provide for athletic activities.',                       price:'Rs 1,500', stock:'100',   imgUrl:'shoe.jpg',     Category:fashion },

                //Health & Beauty
                {Name:'Facem',          description:'A nourishing facial oil packed with vitamins to deeply hydrate and restore your skins natural glow.',       price:'Rs 400',   stock:'44',  imgUrl:'facem.jpg',        Category:health },
                {Name:'Treatment Oil',  description:'A lightweight, broad-spectrum SPF lotion that protects the skin from harmful UV rays and premature aging.', price:'Rs 800',   stock:'555', imgUrl:'TreatmentOil.jpg', Category:health },
                {Name:'Sunscreen',      description:'Lotion that protects the skin from harmful UV rays.',                                                       price:'Rs 350',   stock:'100', imgUrl:'sunscreen.jpg',    Category:health },
                {Name:'Sunscreen',      description:'A lightweight, broad-spectrum SPF lotion that protects the skin from  UV rays and premature aging.',        price:'Rs 550',   stock:'25',  imgUrl:'sunscreen1.jpg',   Category:health },
                {Name:'Facial Cleaner', description:'A gentle, foaming face wash that removes dirt, oil, and impurities without stripping away moisture.',       price:'Rs 1,100', stock:'10',  imgUrl:'health.jpg',       Category:health },

                //Home & Lifestyle
                {Name:'Sofa',          description:'A plush, multi-seater couch designed to bring ultimate comfort and modern style to your living room.',  price:'Rs 150,000', stock:'5',   imgUrl:'sofa.jpg',                Category:home },
                {Name:'Coffe Table',   description:'A sleek and sturdy central living room table perfect for holding drinks, books, and decor items.',      price:'Rs 25,000',  stock:'66',  imgUrl:'coffetable.jpg',          Category:home },
                {Name:'Woven baskets', description:'Decorative and functional storage bins handcrafted from natural fibers to keep your space organized.',  price:'Rs 500',     stock:'119', imgUrl:'Wovenstoragebaskets.jpg', Category:home },
                {Name:'Pillow',        description:'A soft, supportive cushion engineered to provide optimal neck alignment for a restful sleep',           price:'Rs 999',     stock:'99',  imgUrl:'pillow.jpg',              Category:home },
                {Name:'Blanket',       description:'A warm, cozy, and breathable throw blanket perfect for layering on your bed or lounging on the couch.', price:'Rs 1,900',   stock:'55',  imgUrl:'blanket.jpg',             Category:home }
            ]; 
 
        let savedProducts = await productRepo.find();

         if (savedProducts.length === 0) {
            const productEntities = productRepo.create(productData); 
            const savedProducts = await productRepo.save(productEntities); 

            console.log("Product created successfully.");
        } else {
            console.log("Product already exist.");
        }


        console.log("Seed data inserted successfully.");

    } catch (error) {
        console.error("Failed to seed database:");
        console.error(error);
    }
};

module.exports = seedDatabase;
