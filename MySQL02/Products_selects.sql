SELECT * FROM products;
-- Productos de las categoría 1, tecnología.
SELECT * FROM products WHERE category_id = 1;

-- Productos de las categoría  deportes.
SELECT * FROM products WHERE category_id = 2;

-- Productos de las categoría  moda.
SELECT * FROM products WHERE category_id = 3;

-- Productos que en su categoria sean nulos
SELECT * FROM products WHERE category_id is null;

-- Productos que en su nombre contenga moda
SELECT * FROM products WHERE `name` LIKE "%moda%";
