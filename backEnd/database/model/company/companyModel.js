let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let newCompanySchema = Schema({

    company_id:{
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    company_adress:{
        type:String,
        required:false
    },
    company_type:{
        type:String,
        required:true
    }
    
});

let Company = module.exports = mongoose.model('Company',newCompanySchema);