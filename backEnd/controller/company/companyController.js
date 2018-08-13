let Promise = require('promise');
let companyOperation = require('../../database/operations/company/companyOperation')

/*
*This is the controller save function,This we use for saving the company record
*/
let saveCompany = (parameter) => {
    return new Promise((resolve, reject) => {
        if (parameter) {
            companyOperation.saveNewCompany(parameter);
        }
    })

}

module.exports = {
    saveCompany: saveCompany
}