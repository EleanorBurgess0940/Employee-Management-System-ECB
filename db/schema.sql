DROP DATABASE IF EXISTS employeesDB;
CREATE DATABASE employeesDB;

USE employeesDB;

CREATE TABLE department(
    id INT,
    name VARCHAR(30) UNIQUE NOT NULL,
    PRIMARY KEY(id),
)

CREATE TABLE role(
    id INT,
    PRIMARY KEY(id),
    title VARCHAR(30) NOT NULL,
    salary DECIMAL  NOT NULL,
    department_id INT  NOT NULL,
)

CREATE TABLE employee(
    id INT,
    PRIMARY KEY(id),
    first_name VARCHAR(30)  NOT NULL,
    last_name VARCHAR(30)  NOT NULL,
    role_id INT NOT NULL,
    manager_id INT 
)