USE generation;
SELECT * FROM countries;
SELECT * FROM students;
SELECT * FROM modules;
SELECT * FROM courses;
SELECT * FROM courses_has_students;
SELECT * FROM idtypes; -- tipo de ID
-- Run the following SQL Query to complete your first JOIN to see more information about the Students:
SELECT Students.*, Countries.name country FROM Students INNER JOIN Countries ON Students.nationality = Countries.idCountries;

-- Modify the previous SQL statment so it joins the Students table with the IDTypes table to know each students' type of ID.
SELECT Students.*, idtypes.name Types_name 
	FROM Students 
    INNER JOIN idtypes
    ON Students.idtype_id = idtypes.id_idtypes;

-- Write a SQL query to join the CourseHasStudent table with the Courses table to get the name of the course 
-- information with the student ID of students enrolled in the course.
SELECT * FROM students;
SELECT * FROM courses_has_students;
SELECT Students.*,  courses_has_students.course_code
	FROM Students 
    INNER JOIN courses_has_students
    ON Students.idstudent = courses_has_students.students_id_student;

-- Write a SQL query to join the CourseHasStudent table with the Courses table 
-- to get the name of the course information with the student ID of students enrolled in the course.
SELECT courses_has_students.*, courses.* 
	FROM courses_has_students
    INNER JOIN courses
    ON courses_has_students.course_code = courses.`code`;

-- Now that you have the two queries, use an INNER JOIN to combine the results of the queries
--  (this is called nested queries, and will allow you to combine SQL queries to order the data the way you like).
SELECT Students.idStudent, students.`name`, students.email,  courses_has_students.course_code, courses.`name`
	FROM Students 
    INNER JOIN courses_has_students
    ON Students.idstudent = courses_has_students.students_id_student
    INNER JOIN courses
    ON courses_has_students.course_code = courses.`code`
    ORDER BY students.idstudent;

-- 
CALL userHascourses;

-- Write a SQL query that allows you to find all the students in a given country.
SELECT * FROM countries;
SELECT * FROM students;
SELECT students.*, countries.name
	FROM students
    INNER JOIN countries
    ON students.nationality = countries.idcountries;

-- Write a SQL query that allows you to find all the Countries which name starts with 'Ca'.
SELECT students.*, countries.name
	FROM students
    INNER JOIN countries
    ON students.nationality = countries.idcountries
    WHERE countries.`name` LIKE "ca%";

-- Count all the students that are enrolled in the course 'JAVA-1'.
SELECT * FROM countries;
SELECT * FROM courses_has_students WHERE course_code="JAVA-1";
SELECT COUNT(students_id_student) FROM courses_has_students WHERE course_code="JAVA-1";

-- Calculate the SUM of the credits of all the courses that have the word 'JAVA' in the name.
SELECT * FROM courses;
SELECT * FROM courses WHERE `name` LIKE "%java%";
SELECT "Contiene JAVA" AS course, sum(credits) FROM courses WHERE `name` LIKE "%java%";

SELECT * FROM courses;
SELECT * FROM courses_has_students;

SELECT course_code, COUNT(course_code) FROM courses_has_students GROUP BY course_code;

-- Write a Query that allows you to count all the students that are enrolled in a given module. 
-- Hint: You need to count all the students enrolled in all the courses of the module.
-- 21 MYSQL, 25 Java, 8 JS
SELECT COUNT(courses_has_students.course_code) AS Students , courses.module_code
	FROM courses_has_students
    INNER JOIN courses
    ON courses_has_students.course_code = courses.`code`
    GROUP BY courses.module_code;

    