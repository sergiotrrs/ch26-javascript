
SELECT *
  FROM products
  INNER JOIN categories
  -- ON products.product_id = categories.category_id;
  USING (category_id);
  
  SELECT COUNT(DISTINCT(category_id))
  FROM products
  INNER JOIN categories
  -- ON products.product_id = categories.category_id;
  USING (category_id);
  
  SELECT products.*, categories.*
   FROM products
   LEFT JOIN categories
   USING (category_id);
   
  SELECT products.*, categories.*
   FROM products
   RIGHT JOIN categories
   USING (category_id);
   
  -- SELECT products.*, categories.*
  SELECT COUNT(*)
   FROM products
   CROSS JOIN categories;
SELECT * FROM products;
-- Elementos que no están en la unión
SELECT product_id
	FROM products
    INNER JOIN categories
    USING (category_id)
    ORDER BY product_id ASC;
    
SELECT *
 FROM products
 WHERE product_id 
 -- NOT IN (1,2,3,4, 6,7,8,9,10, 12, 14,15,16,17 );
 NOT IN (
	SELECT product_id
	FROM products
    INNER JOIN categories
    USING (category_id)
    ORDER BY product_id ASC
 );
 
 
   