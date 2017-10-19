var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
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
  connection.query(query, function(err, res) {
    if(err) throw err;

    console.log("ITEMS FOR SALE: ");
    console.log("\n------------------------------------------------------------------------------------------------------------\n");
  
    for (var i = 0; i < res.length; i++) {
      console.log('Item_Id: ' + res[i].item_id + '  //  Product_Name: ' + res[i].product_name + '  //  Stock_Quantity: ' + res[i].stock_quantity + '  //  Price: $' + res[i].price + "\n");
    }

    console.log("-------------------------------------------------------------------------------------------------------------\n");

    promptUserToBuy();

  })
}; 
// =================================================================

function promptUserToBuy() {
// Prompt user to choose item and quantity
inquirer.prompt([
  {
    name: 'item_id',
    type: 'input',    
    message: 'Enter the Item_ID of the product that you would like to buy.\n',
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
    
  },
    {
      name: 'quantity',
      type: 'input',
      message: 'How many would you like to buy?',
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
     
    }

]).then(function (answer) {
    
    var item = answer.item_id;
    var quantity = answer.quantity;
    // Check to see if chosen item and quantity are available
    var query = 'SELECT * FROM bamazon.products WHERE ?';
    connection.query(query, {item_id: item}, function(err, res) {
     
      if(err) throw err;

      if(res.length === 0) {
        console.log("Invalid Item Id entered. Please enter valid Item ID.");
        displayInventory();

      } else {
        var inventoryData = res[0];
        // If quantity chosen is available
        if(quantity <= res[0].stock_quantity) {
          console.log("Item is in stock.");

          // Create query string to update remaining quantities in stock
          var updateQuery = 'UPDATE bamazon.products SET stock_quantity = ' + (res[0].stock_quantity - quantity) + ' WHERE item_id = ' + item;

          //Update inventory
          connection.query(updateQuery, function(err, res) {
            if(err) throw err;
            console.log("Your order has been processed and will be shipped right away! Your total is $" + inventoryData.price * quantity);
            console.log("Thank you!");
            console.log("\n----------------------------------------------------------------\n");
            connection.end();

          })

        } else {
                // If quantity chosen is not available
          console.log("Oops! It looks like we only have "+ res[0].stock_quantity+" left in stock.  Please select a different quantity.");
          console.log("\n--------------------------------------\n");

          displayItems();
        }
      }
    })

   })
}
// ===================================================================


// ===================================================================
// function runBamazon() {
  displayItems();
// }

// runBamazon();
// END ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

