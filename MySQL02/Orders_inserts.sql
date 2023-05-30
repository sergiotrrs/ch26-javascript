-- Orders Table 

-- Inserts for customer_id = 1
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (1, 1, '2023-05-01', '2023-05-08');

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (2, 1, '2023-05-02', '2023-05-09');

-- Inserts for customer_id = 2
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (3, 2, '2023-05-03', '2023-05-10');

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (4, 2, '2023-05-04', '2023-05-11');

-- Inserts for customer_id = 3
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (5, 3, '2023-05-05', '2023-05-12');

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (6, 3, '2023-05-06', '2023-05-13');

-- Inserts for customer_id = 4
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (7, 4, '2023-05-07', '2023-05-14');

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (8, 4, '2023-05-08', '2023-05-15');

-- Inserts for customer_id = 5
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (9, 5, '2023-05-09', '2023-05-16');

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (10, 5, '2023-05-10', '2023-05-17');

-- Inserts for customer_id = 6
INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (11, 6, '2023-05-11', '2023-05-18');

INSERT INTO orders (order_id, customer_id, purchase_date, delivery_date)
VALUES (12, 6, '2023-05-12', '2023-05-19');

SELECT * FROM orders;