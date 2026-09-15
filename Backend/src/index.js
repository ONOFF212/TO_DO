
const Koa = require("koa");
require("dotenv").config();

const path = require('path');
const cors = require("@koa/cors");
const serve = require("koa-static");
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');

const db_Connection = require("./dbconfig/dbconfig");
const { router } = require("./routes/product_route");

const seedDatabase = require("./Models/seedscript");

const app = new Koa();


app.use(cors({
    origin:"http://localhost:3000"
}));

app.use(bodyParser());

const imageFolderPath = path.join(__dirname, "..", 'img'); 
app.use(mount('/img', serve(imageFolderPath)));
//app.use(serve(imageFolderPath));


app.use(router.routes());

const startServer = async () => {
    try {
        await db_Connection.initialize();
        console.log(imageFolderPath);
        console.log("DB Connection Successful.....");

        await seedDatabase();

        app.listen(process.env.PORT, () => {
            console.log(
                `Server is running at port: ${process.env.PORT}`
            );
        });

    } catch (error) {

        console.error("Server startup failed:");
        console.error(error);

    }
};

startServer();
