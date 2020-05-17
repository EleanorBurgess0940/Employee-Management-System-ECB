const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  findAllEmployees() {
    return this.connection.query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
    );
  }

  updateEmployeeRole(id, roleId) {
    return this.connection.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [roleId, id]
    );
  }

  //create employee function
  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  //delete employee function
  deleteEmployee(employeeId) {
    return this.connection.query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

  //find all roles
  findAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id"
    );
  }

  //create function for role
  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  //delete function for role
  deleteRole(roleId) {
    return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
  }
  //finds all departments
  findAllDepartments() {
    return this.connection.query(
      "SELECT department.id, department.name AS department FROM department"
    );
  }
  //create function for department
  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
  //delete function for department
  deleteDepartment(departmentId) {
    return this.connection.query(
      "DELETE FROM department WHERE id = ?",
      departmentId
    );
  }
}
module.exports = new DB(connection);
