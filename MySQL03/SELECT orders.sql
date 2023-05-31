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
UPDATE orders SET 
 delivery_date = DATE_ADD(purchase_date, INTERVAL 1 DAY)
 WHERE customer_id = 4;

-- Conocer el tiempo transcurrido
SELECT *
 , datediff( delivery_date , purchase_date ) AS "delivery time"
  -- FROM orders ORDER BY `delivery time` ASC;
 FROM orders ORDER BY `delivery time` DESC;

 -- Solo las ordenes (descendente) que han tenido 
 -- tiempos de entrega mayor o igual a 5 días.
 SELECT *, 
  datediff(delivery_date, purchase_date) AS "delivery_time" 
  FROM orders 
  -- WHERE DATEDIFF(delivery_date, purchase_date) >= 5 
  ORDER BY `delivery_time` DESC, delivery_date DESC;

CREATE VIEW orders_delivery AS
 SELECT *, 
  datediff(delivery_date, purchase_date) AS "delivery_time" 
  FROM orders 
  ORDER BY `delivery_time` DESC, delivery_date DESC;
  
 SELECT * FROM orders_delivery
  WHERE delivery_time >= 5;

 WITH DATA AS(
	SELECT *, datediff(delivery_date, purchase_date)
		AS shipping_time FROM orders
		ORDER BY shipping_time DESC)
	SELECT * FROM DATA
	WHERE shipping_time >= 5;

-- Procedimiento almacenado
CALL show_delivery_time(7);

DELIMITER $$
CREATE PROCEDURE show_delivey_time_manual (IN days INT)
BEGIN
  SELECT *, 
  datediff(delivery_date, purchase_date) AS "delivery_time" 
  FROM orders 
  WHERE DATEDIFF(delivery_date, purchase_date) >= days 
  ORDER BY `delivery_time` DESC, delivery_date DESC;
END $$
DELIMITER ;

CALL show_delivey_time_manual(5);


