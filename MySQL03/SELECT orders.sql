SELECT * FROM orders;
-- now() Entrega la fecha y hora
SELECT now();
-- curdate() Entrega la fecha
SELECT curdate();
-- Entrega la fecha y la hora local
SELECT localtimestamp();
-- cast a tipo DATE
SELECT DATE( now() ) AS FECHA;
-- Convertir texto a fecha
SELECT str_to_date("31 May, 2023", '%d %M, %Y');
SELECT str_to_date("05/31/2023", '%m/%d/%Y');

SELECT * FROM orders;
-- Conocer el tiempo transcurrido
SELECT *
 , datediff( delivery_date , purchase_date ) AS "delivery_time"
 FROM orders;

SELECT DATE_ADD( now(), INTERVAL 10 DAY ) AS futuro;
-- Todos los que tienen customer_id = 5
 -- cambiar delivery_time a purchase_date + 2.
 
 


