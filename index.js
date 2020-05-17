const { prompt } = require("inquirer");
const db = require("./db");

init();

function init() {
  console.log("hello");
  mainMenu();
}

async function mainMenu() {
  const { choice } = await prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "viewEmployees",
        },
        // {
        //   name: "View All Employees By Department",
        //   value: "viewEmployeesDepartment",
        // },
        // {
        //   name: "View All Employees By Manager",
        //   value: "viewEmployeesManager",
        // },
        {
          name: "Add Employee",
          value: "addEmployee",
        },
        // {
        //   name: "Remove Employee",
        //   value: "removeEmployee",
        // },
        {
          name: "Update Employee Role",
          value: "updateEmployeeRole",
        },
        // {
        //   name: "Update Employee Manager",
        //   value: "updateEmployeeManager",
        // },
        {
          name: "View All Roles",
          value: "viewAllRoles",
        },
        {
          name: "Add Role",
          value: "addRole",
        },
        // {
        //   name: "Remove Role",
        //   value: "removeRole",
        // },
        {
          name: "View All Departments",
          value: "viewAllDepartments",
        },
        {
          name: "Add Department",
          value: "addDepartment",
        },
        // {
        //   name: "Remove Department",
        //   value: "removeDepartment",
        // },
        {
          name: "Quit",
          value: "quit",
        },
      ],
    },
  ]);
  console.log(choice);
  switch (choice) {
    case "viewEmployees":
      return viewEmployees();
    case "addEmployee":
      return addEmployee();
    case "updateEmployeeRole":
      return updateEmployeeRole();
    case "viewAllRoles":
      return viewRoles();
    case "addRole":
      return addRoles();
    case "viewAllDepartments":
      return viewDepartments();
    case "addDepartment":
      return addDepartment();
    case "quit":
      return quit();
  }
}

async function viewEmployees() {
  const employees = await db.findAllEmployees();

  console.log("\n");
  console.table(employees);

  mainMenu();
}

async function addEmployee() {
  const roles = await db.findAllRoles();
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const employees = await db.findAllEmployees();
  const managerChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const employee = await prompt([
    {
      name: "first_name",
      message: "What is the employees first name?",
    },
    {
      name: "last_name",
      message: "What is the employees last name?",
    },
    {
      type: "list",
      name: "role_id",
      message: "What is the employee's role?",
      choices: roleChoices,
    },
    {
      type: "list",
      name: "manager_id",
      message: "Who is the employees manager if needed?",
      choices: managerChoices,
    },
  ]);

  await db.createEmployee(employee);

  console.log("The new employee has been added to the database");

  mainMenu();
}

async function updateEmployeeRole() {
  const employees = await db.findAllEmployees();
  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));
  const roles = await db.findAllRoles();
  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { id } = await prompt([
    {
      type: "list",
      name: "id",
      message: "Which employee would you like to update?",
      choices: employeeChoices,
    },
  ]);

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role would you like to give them?",
      choices: roleChoices,
    },
  ]);
  console.log(id, roleId);
  await db.updateEmployeeRole(id, roleId);

  console.log("Updated employee Role");

  mainMenu();
}

async function viewRoles() {
  const roles = await db.findAllRoles();

  console.log("\n");
  console.table(roles);

  mainMenu();
}

async function addRoles() {
  const departments = await db.findAllDepartments();

  const departmentChoices = departments.map(({ id, department }) => ({
    name: department,
    value: id,
  }));

  const role = await prompt([
    {
      name: "title",
      message: "What is the name of the Role you would like to add?",
    },
    {
      name: "salary",
      message: "What is the salary of this role going to be?",
    },
    {
      type: "list",
      name: "department_id",
      message: "Which department would you like to add this role to?",
      choices: departmentChoices,
    },
  ]);
  await db.createRole(role);

  console.log("The new role has been added to the database");

  mainMenu();
}

async function viewDepartments() {
  const departments = await db.findAllDepartments();

  console.log("\n");
  console.table(departments);

  mainMenu();
}
async function addDepartment() {
  const department = await prompt([
    {
      name: "name",
      message: "What is the name of the Department you would like to add?",
    },
  ]);
  await db.createDepartment(department);

  console.log("The new department has been added to the database");

  mainMenu();
}

function quit() {
  console.log("Goodbye!");
  process.exit();
}
