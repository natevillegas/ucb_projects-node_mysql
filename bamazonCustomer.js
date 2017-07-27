// Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// The app should then prompt users with two messages.
// The first should ask them the ID of the product they would like to buy.
// The second message should ask how many units of the product they would like to buy.
// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

var mysql = require("mysql");
var inquirer = require("inquirer");
var chosenItem;
var updatedQuantity;
var totalCost;
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  displayItems();
});

displayItems = function() {
	connection.query("SELECT item_id, product_name, price FROM products", function(err,res){
		//console.log(res);
	    for (var i = 0; i < res.length; i++) {
	      console.log(res[i].item_id + "  |  " + res[i].product_name + "  |  " + res[i].price);
	    }
	    console.log("-----------------------------------");
	    buyItems();
   	})

};

buyItems = function() {
	inquirer.prompt(
	[{
		name: "selectItem",
		type: "input",
		message: "What item would you like to buy?"
	},
	{
		name: "numUnits",
		type: "input",
		message: "How many units would you like to buy?"
	}]).then(function(answer){
		connection.query("SELECT * FROM products WHERE item_id =?", [parseInt(answer.selectItem)], function(err, results) {
		  if (err) throw err;
		  if (results[0].stock_quantity < parseInt(answer.numUnits)) {
		  	console.log("-----------------------------------");
		  	console.log("-----------------------------------");
		  	console.log("Insufficient quantity!");
		  	console.log("-----------------------------------");
		  	console.log("-----------------------------------");
		  	displayItems();
		  } else {
		  	updatedQuantity = results[0].stock_quantity - parseInt(answer.numUnits);
		  	totalCost = results[0].price * parseInt(answer.numUnits);
		  		connection.query(
		  		"UPDATE products SET ? WHERE ?",
		  		[
		  		  {
		  		    stock_quantity: updatedQuantity
		  		  },
		  		  {
		  		    item_id: parseInt(answer.selectItem)
		  		  }
		  		], function(error) {
					if (error) throw err;
					console.log("-----------------------------------");
					console.log("-----------------------------------");
					console.log("Thanks, you have paid $" + totalCost);
					console.log("-----------------------------------");
					console.log("-----------------------------------");
					displayItems();
            	}
		  		);
		  }
		})
	});
}