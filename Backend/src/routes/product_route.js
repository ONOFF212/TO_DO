
const Router = require('@koa/router');
const product_Controller = require("../controllers/product_controller");



const router =new Router();


router.get('/products', product_Controller.getData);
router.get('/products/:id', product_Controller.getDataById);


module.exports = {router};