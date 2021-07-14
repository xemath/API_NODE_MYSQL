const Employee = require('../models/employee.model');
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
            res.json(employees)
        }
    })
    //res.send('hola')
}

//obtener empleado por id

exports.getEmployeeById = (req, res)=>{
    EmployeeModel.getEmployeeById(req.params.id, (err,employee)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(employee)
        }
    })
    //console.log("get employee by id ", req.params.id);
}


exports.createNewEmployee = (req, res)=>{
    //console.log('request data', req.body);
    employeeData = new EmployeeModel(req.body);


    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).res.send({success:false, message:'plis fill all the fields'})
    }
    else{
        EmployeeModel.createEmployee(employeeData, (err, employee)=>{
            if(err)
            res.send(err)
            res.json({status:true, message:"Employee Created successfully", data: employee.insertId})
        })
    }
    
}

exports.updateEmployee = (req,res)=>{
    employeeData = new EmployeeModel(req.body);


    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).res.send({success:false, message:'plis fill all the fields'})
    }
    else{
        EmployeeModel.updateEmployee(req.params.id, employeeData, (err, employee)=>{
            if(err)
            res.send(err)
            res.json({status:true, message:"Employee Updated successfully", data: employee.insertId})
        })
    }
}
//Delete Employee
exports.deleteEmployee = (req,res)=>{
    EmployeeModel.deleteEmployee(req.params.id, (err, employee)=>{
        if(err)
        res.send(err)
        res.json({status:true, message:"Employee deleted successfully"})
    })
}