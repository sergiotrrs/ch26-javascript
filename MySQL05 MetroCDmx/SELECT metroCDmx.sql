USE metrocdmx;

DESCRIBE `lines`;
SELECT * FROM `lines`;

-- Listas las estaciones de la línea Roja(6)
SELECT 
	DISTINCT station_id
    ,stations.name 
	FROM lines_stations
	INNER JOIN stations
    ON lines_stations.station_id = stations.id 
	WHERE line_id = 6;

SELECT * FROM locations;
-- Para insertar las coordenadas de una estación
INSERT INTO `locations` (station_id, location) VALUES
	(1, POINT(-99.14433718, 19.40702104));

-- Obtener el ID de la estación
SELECT id, name FROM stations WHERE name LIKE "%carrera%"; -- 131

-- Obtener la latitud y longitud de la Basílica
SELECT 
		ST_X(location) AS latitud,
        ST_Y(location) AS longitud
	FROM locations
    WHERE station_id = 5;
-- Calcular la distancias en Km entre Basílica(131) y Martín Carrera(5)
SELECT 
	ST_Distance_Sphere(  
		POINT(-99.14912224, 19.42729875),
		POINT(-99.13303971, 19.42543703) 
        )/1000 AS Distance;
        
SELECT 
	ST_Distance_Sphere(  
		( SELECT location FROM locations
            WHERE station_id = 131 ), -- Punto Básilica
		( SELECT location FROM locations
            WHERE station_id = 5 ) -- Punto MArtín Carrera
        )/1000 AS Distance;
-- Listar las líneas con el número de estaciones que tienen
-- 6 Roja 11
-- 2 Azul 23 