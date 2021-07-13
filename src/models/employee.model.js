const conexion = require('../../config/db.config');

var Employee = (employee)=>{
    this.first_name = employee.first_name;
    this.last_name = employee.last_name;
    this.email = employee.email;
    this.phone = employee.phone;
    this.organization = employee.organization;
    this.designation = employee.designation;
    this.salary = employee.salary;
    this.status = employee.status ? employee.status : 0;
    this.created_at = new Date();
    this.updated_at = new Date();
}

Employee.getAllEmployees = (result)=>{
    conexion.query('SELECT * FROM employees', (err,results)=>{
        if(err){
            console.log('error while fetching employees', err);
            result(null, err);
        }
        else{
            console.log('employees fetched successfully');
            result(null, results)
        }
    });
}

module.exports = Employee;