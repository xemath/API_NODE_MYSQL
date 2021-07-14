const conexion = require('../../config/db.config');

var Employee = function(employee){
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

Employee.getEmployeeById = (id, result)=>{
    conexion.query('SELECT * FROM employees where id = ?', id,(err, res)=>{
        if(err){
            console.log('error while fetchin', err)
            result(null, err)
        }
        else{
            console.log('Fetching successfully ')
            result(null, res)
        }

    })
}

Employee.createEmployee = (dataEmployee, result)=>{
    conexion.query('INSERT INTO employees SET ?', dataEmployee, (err,results)=>{
        if(err){
            console.log('error creating the boy!')
            result(null, result);
        }
        else{
            console.log('user created succesfully');
            result(null, results)
        }
    });
}

Employee.updateEmployee = (id, employeeReqData, result)=>{
    conexion.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employeeReqData.first_name,employeeReqData.last_name,employeeReqData.email,employeeReqData.phone,employeeReqData.organization,employeeReqData.designation,employeeReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, result);
        }
    });
}

Employee.deleteEmployee = (id, result)=>{
    conexion.query('DELETE FROM employees WHERE id = ?', [id], (err, res)=>{
        if(err){
            console.log(err);
            result(null, err);
        }
        else{
            result(null,res)
        }
    })
}
module.exports = Employee;