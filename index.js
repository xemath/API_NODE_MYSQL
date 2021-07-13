const express = require('express');
//const employeeController=require('./src/controllers/employee.controller');
const app = express();

//app.get('/', employeeController);
const employeeRoutes = require('./src/routes/employee.route')
//crear ruta
app.use('/api/v1/employee', employeeRoutes);
app.listen(3000, ()=>{
    console.log('running');
})