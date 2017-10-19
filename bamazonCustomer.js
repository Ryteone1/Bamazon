var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});
// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  //console.log("connected as id " + connection.threadId);  
}); 
// ==============================================================

// DISPLAY ALL ITEMS FOR SALE ===================================
function displayItems() {
  var query = 'SELECT * FROM bamazon.products';
  connection.query(query, function(err, data) {
    if(err) throw err;

    console.log("ITEMS FOR SALE: ");
    console.log("--------------------------------------------------------------------------------\n");
  
    for (var i = 0; i < data.length; i++) {
      console.log('Item_Id: ' + data[i].item_id + '  //  Product_Name: ' + data[i].product_name + '  //  Price: $' + data[i].price + '\n');
    }

    console.log("---------------------------------------------------------------------------------\n");
   
  })
}; 
displayItems();
// =================================================================
