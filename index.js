const express = require('express');
const bodyParser = require('body-parser');
//const employeeController=require('./src/controllers/employee.controller');
const app = express();
//parse body data!
//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//app.get('/', employeeController);
const employeeRoutes = require('./src/routes/employee.route')
//crear ruta
app.use('/api/v1/employee', employeeRoutes);
app.listen(3000, ()=>{
    console.log('running');
})