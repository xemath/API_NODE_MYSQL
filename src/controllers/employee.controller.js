const EmployeeModel = require('../models/employee.model');
//obtener todos los empleados
exports.getEmployeeList = (req,res)=>{
    //console.log(new Date())
    EmployeeModel.getAllEmployees((err, employees)=>{
        console.log('estamos aqui')
        if(err){
            res.send(err);
        }
        else{
            console.log(employees)
            res.send(employees)
        }
    })
    //res.send('hola')
}

//obtener empleado por id

exports.getEmployeeById = (req, res)=>{
    res.send('we are here');
}