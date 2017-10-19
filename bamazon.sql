DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INTEGER NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("wireless keyboard", "electronics", 29.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP laptop", "electronics", 429.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("HP printer", "electronics", 39.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Air Jordan's", "apparel", 359.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Versace Socks", "apparel", 149.99, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript Book", "books", 19.99, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("carved pumpkin", "halloween", 12.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mario Costume", "halloween", 14.99, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Batman Costume", "halloween", 14.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Superman Costume", "halloween", 14.99, 3);