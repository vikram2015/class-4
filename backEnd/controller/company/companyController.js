let Promise = require('promise'); 
let companyOperation = require('../../database/operations/company/companyOperation')


let saveCompany = (parameter)=>{
return new Promise((resolve, reject)=>{
    console.log("parameter in controller")
    console.log(parameter)
    if(parameter){
        // parameter.
        companyOperation.saveNewCompany(parameter);
    }
})

}

module.exports = {
    saveCompany:saveCompany
}