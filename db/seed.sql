use employeesDB;

INSERT INTO department
    (name)
VALUES
    ('Engineering'),
    ('Administrive'),
    ('Finance'),
    ('Sales'),
    ('Legal');

INSERT INTO role
    (title,salary, department_id)
VALUES
    ('Mechanical Engineer', 120000, 1),
    ('Software Engineer', 100000, 1),
    ('Secretary', 46000, 2),
    ('Personal Assistant', 58000, 2),
    ('Sales Account Manager', 60000, 3),
    ('Accountant', 125000, 3),
    ('Sales Manager', 80000, 4),
    ('Salesperson', 50000, 4),
    ('Legal Team Lead', 250000, 5),
    ('Lawyer', 160000, 5);

INSERT INTO employeesDB
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Stan', 'Smith', 1, NULL),
    ('Bob', 'Belcher', 2, 1),
    ('Sterling', 'Archer', 3, NULL),
    ('Kent', 'Brockman', 4, 3),
    ('Ned', 'Flanders', 5, NULL),
    ('Philip', 'Fry', 6, 5),
    ('Bart', 'Simpson', 7, NULL),
    ('Homer', 'Simpson', 8, 7);
