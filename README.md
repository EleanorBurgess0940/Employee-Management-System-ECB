# Unit 12 MySQL Homework: Employee Management

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems. In this homework assignment, your challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL.

## Table of Contents

1. [Instructions](#instructions)
2. [Description](#description)
3. [Use](#use)
4. [Installation](#installation)
5. [Contributing](#contributing)
6. [Questions](#questions)

## Instructions

Design the following database schema containing three tables:

- **department**:

  - **id** - INT PRIMARY KEY
  - **name** - VARCHAR(30) to hold department name

- **role**:

  - **id** - INT PRIMARY KEY
  - **title** - VARCHAR(30) to hold role title
  - **salary** - DECIMAL to hold role salary
  - **department_id** - INT to hold reference to department role belongs to

- **employee**:

  - **id** - INT PRIMARY KEY
  - **first_name** - VARCHAR(30) to hold employee first name
  - **last_name** - VARCHAR(30) to hold employee last name
  - **role_id** - INT to hold reference to role employee has
  - **manager_id** - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

Build a command-line application that at a minimum allows the user to:

- Add departments, roles, employees

- View departments, roles, employees

- Update employee roles

Bonus points if you're able to:

- Update employee managers

- View employees by manager

- Delete departments, roles, and employees

- View the total utilized budget of a department -- ie the combined salaries of all employees in that department

### Description

The application will be invoked with the following command:

```sh
node index.js
```

The user will be given a set of questions and can do multiple things to organize employees and their business

### Use

As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business

### Installation

Please run npm install to handle dependencies.

### Contributing

Contributions to this project are welcome.

### Questions

If you have an questions about the repo, open an issue or contact Elly Burgess directly at Eleanor.C.Burgess@gmail.com.
