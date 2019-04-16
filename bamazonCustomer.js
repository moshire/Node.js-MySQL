

var mysql = require("mysql");
var inquirer = require("inquirer");

// allows for color in the terminal
var colors = require("colors");
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "bamazon"
});


//let's create a call back funtion to see if the connection is successful
connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log("connected as id" + connection.threadId);
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;


        for (var i = 0; i < res.length; i++) {
            console.log("Available for sale - ".green + (colors.yellow("Item ID: " + res[i].item_id + " , " + "product: " + res[i].product_name + " , " + " $ " + res[i].price)));
            // console.log(res[0].item_id);
        }
        start(res);
    })
});

function start(results) {
    inquirer.prompt([
        {
            type: "list",
            name: "selectItemID",
            message: "WHAT IS THE ITEM ID OF THE PRODUCT YOU WOULD LIKE TO BUY?",
            choices: function () {
                var choiceArrayItemId = [];
                for (var i = 0; i < results.length; i++) {
                    choiceArrayItemId.push(results[i].item_id.toString());
                }
                return choiceArrayItemId;
            }
        },
        {
            type: "input",
            name: "selectNumUnits",
            message: "HOW MANY WOULD YOU LIKE TO BUY?"
        }
    ])
        .then(function (answer) {
            CheckUnits(answer.selectItemID, answer.selectNumUnits);
        });


};



// code to update th number of units in the DATABASE
function updateUnits(itemID, NumUnits, stock_quantity) {
    console.log("UPDATING UNITS".yellow);
    var query = connection.query(
        `UPDATE products SET stock_quantity = ${stock_quantity - NumUnits} WHERE ${itemID} = item_id`, function (err, results) {
            if (err) {
                throw err;

            }
            console.log("YOUR ORDER HAS BEEN PLACED SUCCESSFULLY!".bgMagenta);
        });
};





function CheckUnits(ItemID, NumUnits) {



    connection.query(`SELECT stock_quantity FROM products WHERE ${ItemID} = products.item_id`, function (err, results) {

        if (err) {
            throw err;
        }
        else if (parseInt(NumUnits) > results[0].stock_quantity) {

            console.log("Insufficient quantity - cannot complete your order.")
            start();
        }


        else if (parseInt(NumUnits) <= results[0].stock_quantity) {

            // once you have the items, prompt the user for which they'd like to bid on
            updateUnits(ItemID, NumUnits, results[0].stock_quantity);
            connection.end();
        };
    })
}
