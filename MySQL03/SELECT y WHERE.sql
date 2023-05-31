-- Se realizan operaciones matemáticas
SELECT 5 * 2;
-- Realizar consulta a la tabla products
 SELECT `name`, `description`, `price` FROM `products`;
-- Ver todos los campos de la tabla products
SELECT * FROM products;
-- Ver el campo name, description y renombrarlo
SELECT `name` AS "Nombre producto",
       `description` AS "Descripción del artículo" 
 FROM products;
-- Seleccionar solo los datos que no son repetidos
SELECT DISTINCT category_id FROM products;

SELECT * FROM orders_has_products;
-- Listado de productos que se han vendido
SELECT DISTINCT product_id FROM orders_has_products;
-- Coontabilizar los productos que se han vendido
SELECT COUNT(DISTINCT product_id) AS "N. items vendidos"
 FROM orders_has_products;

SELECT * FROM customers;

       