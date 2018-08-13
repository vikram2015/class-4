let companyModel = require('../../model/company/companyModel');
let Promise = require('promise');


let saveNewCompany = (parameter)=>{
    return new Promise((resolve, reject)=>{
        console.log("Parameter in operation")
        console.log(parameter)
        if(parameter){
            let savecompany = companyModel(parameter);
            savecompany.save()
            .then(function(data){
                console.log("data in operation")
                console.log(data)
            })
        }
    })
};


module.exports = {
    saveNewCompany:saveNewCompany
}
