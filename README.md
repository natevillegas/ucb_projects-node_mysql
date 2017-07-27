# ucb_projects-node_mysql

Thia CLI app is an Amazon-like storefront that uses MySQL skills in this week's lesson. The app will take in orders from customers and deplete stock from the store's inventory.

1. The app first displays all the items available for sale.
1. Two messages are prompted to the user:
	1. The first should ask them the ID of the product they would like to buy.
	1. The second message should ask how many units of the product they would like to buy.
1. Once the customer has placed the order, the application checks if your store (MySQL database) has enough of the product to meet the customer's request.
	1. If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
1. If the store does have enough of the product, the app fulfills the customer's order.
	1. This means updating the SQL database to reflect the remaining quantity.
1. Once the update goes through, show the customer the total cost of their purchase.

Link to video demo (download):
https://github.com/natevillegas/ucb_projects-node_mysql/raw/master/video-demo.mov
