// main execution file

const product = require("./product"); //import from product, depend on product

const express = require("express");

const cors = require("cors");

//const body_parser = require("body-parser");

server = express(); //package
server.use(cors());
//server.use(body_parser.json()); // body parser use before router
server.use(express.json());

/* router = express.Router(); // define router

//API
router.get("/welcome", (request, response) => {
    response.status(200).send("Welcome to DevToolKit#2"); //response.send("Welcome to DevToolKit#2");
}); //get method, a table to get mapping to a function. "" - URI, () => {} - function - request from client, reponse from server to return what was requested

server.use(router); // tell server to use this router */

server.use(product.router); //router in product.js and use this

server.listen(3000, () => {
    console.log("Server is running!");
}); // calling the server with port number, 3000 is for backend

// product.get_all_products();

// product.get_product_by_id(1);

// product.create_new_product("ipad", "1500");

// product.update_price_by_id(10, 1500);
// product.get_all_products();

// product.delete_product_by_id(9);

