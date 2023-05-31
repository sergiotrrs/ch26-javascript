SELECT * FROM customers;
-- Concatenamos el nombre y apellido
SELECT customer_id AS id,
		CONCAT(firstname, ' ' , lastname) AS name,
        email
	FROM customers;
    
SELECT customer_id AS id,
		REPLACE(firstname, "Alejandro", "Alex" ) AS firstname,
        email
	FROM customers
    WHERE firstname = "Alejandro";

SELECT firstname, REPLACE(address, "Av.", "Avenida" ) AS address
	FROM customers;
    
-- Invertir una plabra
SELECT firstname, REVERSE(firstname) AS reverse_name
 FROM customers ORDER by reverse_name DESC;

-- Convertir a mayúsculas y minúsculas
SELECT 
	LOWER(firstname) AS firstname,
	UPPER(firstname) AS firstnameMayus
  FROM customers;
-- Mostrar el nombre completo( en una solo columna) en mayúsculas.
SELECT 
	upper(concat(firstname, " ", lastname)) AS name 
	FROM customers;
