const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller')
//GEt all employess
router.get('/', employeeController.getEmployeeList)

module.exports = router;