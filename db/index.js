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

  createEmployee(employee) {
    return this.connection.query("INSERT INTO employee SET ?", employee);
  }

  deleteEmployee(employeeId) {
    return this.connection.query(
      "DELETE FROM employee WHERE id = ?",
      employeeId
    );
  }

  findAllRoles() {
    return this.connection.query(
      "SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id"
    );
  }

  createRole(role) {
    return this.connection.query("INSERT INTO role SET ?", role);
  }

  deleteRole(roleId) {
    return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
  }
  findAllDepartments() {
    return this.connection.query(
      "SELECT department.id, department.name AS department FROM department"
    );
  }
  createDepartment(department) {
    return this.connection.query("INSERT INTO department SET ?", department);
  }
}
module.exports = new DB(connection);
