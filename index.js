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
        // {
        //   name: "Add Employee",
        //   value: "addEmployee",
        // },
        // {
        //   name: "Remove Employee",
        //   value: "removeEmployee",
        // },
        // {
        //   name: "Update Employee Role",
        //   value: "updateEmployeeRole",
        // },
        // {
        //   name: "Update Employee Manager",
        //   value: "updateEmployeeManager",
        // },
        // {
        //   name: "View All Roles",
        //   value: "viewAllRoles",
        // },
        // {
        //   name: "Add Role",
        //   value: "addRole",
        // },
        // {
        //   name: "Remove Role",
        //   value: "removeRole",
        // },
        {
          name: "View All Departments",
          value: "viewAllDepartments",
        },
        // {
        //   name: "Add Department",
        //   value: "addDepartment",
        // },
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
    case "viewAllDepartments":
      return viewDepartments();
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

async function viewDepartments() {
  const departments = await db.findAllDepartments();

  console.log("\n");
  console.table(departments);

  mainMenu();
}
function quit() {
  console.log("Goodbye!");
  process.exit();
}
