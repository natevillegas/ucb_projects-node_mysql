CREATE DATABASE bamazon;
USE bamazon;
CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price FLOAT(6),
  stock_quantity INT(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name,department_name,price,stock_quantity)
VALUES ("Hat", "Clothing", 25.99, 100),("Gloves", "Clothing", 5.99, 50),("Tie", "Clothing", 2.99, 10),("Shoes", "Clothing", 59.89, 50),("Jeans", "Clothing", 46.99, 20),("Longsleeve Shirt", "Clothing", 12.99, 100),("Shortsleeve Shirt", "Clothing", 10.99, 100),("Socks", "Clothing", 0.99, 150),("Watch", "Accessories", 10.99, 100),("Earring", "Accessories", 925.99, 5);

