const express = require('express');
const bodyParser = require('body-parser');
//const employeeController=require('./src/controllers/employee.controller');
const app = express();
//parse body data!
//app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
PORT = process.env.PORT || 3000;
//app.get('/', employeeController);
//motor de vistas para main page
app.set('view engine', 'ejs');
const employeeRoutes = require('./src/routes/employee.route')
//crear ruta
app.use('/api/v1/employee', employeeRoutes);
app.use(express.static('public'))
app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(PORT, ()=>{
    console.log('running');
})