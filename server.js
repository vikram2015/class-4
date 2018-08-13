let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let config = require('./config/config');
let http = require('http');
let path = require('path');
let Company = require('./backEnd/routes/company/companyRoutes');

let app = express();
// let Login = require('./backend/routes/login');
// let Student = require('./backend/routes/studentRoutes');
// let NewForm = require('./backend/routes/newFormRoutes');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser());

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/company',Company);
// app.use('/student',Student);
// app.use('/newForm',NewForm);


app.get('*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

//server start
app.listen(config.port,function(err){
    if(err){
        console.log('error found in server start' +err);
    }else{
        console.log("connected to server at port " +config.port);
    }
});



//databse connectivity
mongoose.connect(config.database);
mongoose.connection.on("connected",function(err){
    if(err){
        console.log("error in database connectivity" +err);
    }else{
        console.log('connected to database at port 27017');
    }
});

// app.post('/saveNewCompany', function(req, res){
//     console.log(req.body);
//     let companyName = req.body.companyName;
//     let companyId = req.body.companyId;
//     let companyAdress = req.body.companyAdress;
//     let companyType = req.body.companyType;
// if(companyName && companyId){
//     let record = {
//         company_id:companyId,
//         company_name:companyName,
//         company_adress:companyAdress,
//         company_type:companyType,
//     }

// companyController.saveCompany(record);


// }  


// })

