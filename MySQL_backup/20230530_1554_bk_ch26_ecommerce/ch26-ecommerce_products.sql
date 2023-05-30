-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: ch26-ecommerce
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_product_has_category_idx` (`category_id`),
  CONSTRAINT `fk_product_has_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Producto Tecnológico 1','Descripción del producto tecnológico 1',99.99,1),(2,'Producto Deportivo 1','Descripción del producto deportivo 1',49.99,2),(3,'Producto de Moda 1','Descripción del producto de moda 1',79.99,3),(4,'Producto de Alimentación 1','Descripción del producto de alimentación 1',19.99,4),(5,'Producto de Viaje 1','Descripción del producto de viaje 1',199.99,5),(6,'Producto Educativo 1','Descripción del producto educativo 1',29.99,6),(7,'Producto de Arte y Cultura 1','Descripción del producto de arte y cultura 1',59.99,7),(8,'Producto de Salud y Bienestar 1','Descripción del producto de salud y bienestar 1',39.99,8),(9,'Producto de Negocios y Finanzas 1','Descripción del producto de negocios y finanzas 1',89.99,9),(10,'Producto de Entretenimiento 1','Descripción del producto de entretenimiento 1',69.99,10),(11,'Producto Tecnológico 2','Descripción del producto tecnológico 2',149.99,1),(12,'Producto Deportivo 2','Descripción del producto deportivo 2',79.99,2),(13,'Producto de Moda 2','Descripción del producto de moda 2',119.99,3),(14,'Producto de Alimentación 2','Descripción del producto de alimentación 2',29.99,4),(15,'Producto de Viaje 2','Descripción del producto de viaje 2',249.99,5),(16,'Producto Educativo 2','Descripción del producto educativo 2',49.99,6),(17,'Producto de Arte y Cultura 2','Descripción del producto de arte y cultura 2',99.99,7);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-30 15:55:34
