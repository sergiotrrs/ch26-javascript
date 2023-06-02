SELECT * FROM products;
SELECT * FROM categories;

-- uso de inner join
SELECT * 
	FROM products
	INNER JOIN categories
    ON products.category_id = categories.category_id;
    
-- Mostrar todos los productos con su categoría
SELECT 
	products.name AS product_name,
    products.description,
    price,
    categories.name AS category,
    categories.description category_description
	FROM products
	INNER JOIN categories
    ON products.category_id = categories.category_id;
    
-- Mostrar todos los productos con su categoría
-- Solo los que tiene precio mayor a 100
-- Ordena por price, DESC.
SELECT 
	products.name AS product_name,
    products.description,
    price,
    categories.name AS category,
    categories.description category_description
	FROM products
	INNER JOIN categories
    ON products.category_id = categories.category_id
    WHERE price > 90
    ORDER BY price DESC;
-- Inner joins aninados
SELECT *
	FROM customers
    INNER JOIN orders
    ON customers.customer_id = orders.customer_id
    INNER JOIN orders_has_products
    ON orders.order_id = orders_has_products.order_id
    INNER JOIN products
    ON orders_has_products.product_id = products.product_id;
    
SELECT 
		firstname, lastname,
        purchase_date, delivery_date,
        amount,
        products.name as product_name,
        price
	FROM customers
    INNER JOIN orders
    ON customers.customer_id = orders.customer_id
    INNER JOIN orders_has_products
    ON orders.order_id = orders_has_products.order_id
    INNER JOIN products
    ON orders_has_products.product_id = products.product_id;
    

SELECT 
		firstname, lastname,
		purchase_date, delivery_date,
        amount,
        products.name AS product_name,
        categories.name AS category,
		price       
	FROM customers
    INNER JOIN orders
    ON customers.customer_id = orders.customer_id
    INNER JOIN orders_has_products
    ON orders.order_id = orders_has_products.order_id
    INNER JOIN products
    ON orders_has_products.product_id = products.product_id
    LEFT JOIN categories
    USING (category_id);

-- Ver los elementos que no están dentro del INNER JOIN
SELECT *
	FROM products 
	WHERE product_id
	NOT IN (
		SELECT product_id
		FROM products 
		INNER JOIN categories
		USING (category_id)
		ORDER BY product_id ASC);

-- Versión usando LEFT JOIN
SELECT products.*
		FROM products 
		LEFT JOIN categories
		USING (category_id)
        WHERE categories.category_id IS NULL        
		ORDER BY product_id ASC