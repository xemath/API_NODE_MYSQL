const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller')
//GEt all employess
router.get('/', employeeController.getEmployeeList)
// get employee by id
router.get('/:id', employeeController.getEmployeeById)
// create new employee
router.post('/', employeeController.createNewEmployee)
//update employee
router.put('/:id', employeeController.updateEmployee)
//delete
router.delete('/:id', employeeController.deleteEmployee)
module.exports = router;