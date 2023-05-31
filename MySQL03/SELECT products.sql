
SELECT * FROM products;

-- Listar productos >= 100 y <=500 en el precio;
SELECT * FROM products 
	WHERE price >=100 AND price <=500;
-- Between    
SELECT * FROM products
	WHERE price BETWEEN 100 AND 500;
-- Que no esténm en el rango de 100 y 500
SELECT * FROM products
	WHERE price NOT BETWEEN 100 AND 500;
    
-- Cuantos items están en ese rango
SELECT COUNT(price) 
	FROM products WHERE price >=100 AND price <=500;
-- Listar los articulos que no cuesten 99.99
SELECT * FROM products
    -- WHERE NOT price = 99.99;
	-- WHERE price != 99.99;
    WHERE price <> 99.99;

-- IN, indicar valores que  estén dentro de una lista.
SELECT * FROM products
	WHERE price IN (49.99, 99.99, 149.99);
-- Indicar los artículos que NO estén dentro de una lista.
SELECT * FROM products 
	WHERE price NOT IN (49.99, 99.99, 149.99);
-- Establecer en null en category_id, los artículos entre 100 y 200    
UPDATE products SET category_id = NULL 
	WHERE price BETWEEN 100 AND 200;
SELECT * FROM products;
--  category_id = nul,  category_id IS NULL;
SELECT * FROm products WHERE category_id IS NULL;
SELECT * FROm products WHERE ISNULL(category_id);
-- category_id no sea nulo
SELECT * FROm products WHERE category_id IS NOT NULL;

-- Operaciones aritméticas
-- aplicar un 10% de descuento a todos los artículos
SELECT name, price, price*.9 AS "precio hotSale 2023"
	FROM products;
-- 12msi, mostrar columna, con el pago mensual
SELECT name, price, price/12 AS "precio 12 msi" 
	FROM products;
SELECT name, price
	, TRUNCATE(price*0.90, 2 ) AS "precio hotSale 2023"
	, TRUNCATE((price*0.90)/12, 2) AS "Mensualidades"
	FROM products;
-- ABS() valor absoluto
-- CEIL() Redondear hacía arriba
-- FLOOR() Devolver el entero más grande no mayor al número dado
-- MOD() residuo de la división
-- PI() valor de pi
-- POWER( 2, 8) 2 elevado a la potencia 8
-- RAND() Genera un número aletorio entre 0 y 1.
-- ROUND() Redondear hacía arriba si es >= 0.5
SELECT ROUND(12.4) AS "Redondeo";



	



