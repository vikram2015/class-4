let companyModel = require('../../model/company/companyModel');
let Promise = require('promise');

/*
*This is the operation file for saving the Company details
 */
let saveNewCompany = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            let savecompany = companyModel(parameter);
            savecompany.save()
                .then(function (data) {
                    console.log("data in operation")
                    console.log(data)
                });
        }
    });
};


module.exports = {
    saveNewCompany: saveNewCompany
}
