let express = require('express');
let router = express.Router();
let companyController = require('../../controller/company/companyController')


/**
 * This is the Route for saving the company details
 */
router.post('/saveNewCompany', function (req, res) {
    let companyName = req.body.companyName;
    let companyId = req.body.companyId;
    let companyAdress = req.body.companyAdress;
    let companyType = req.body.companyType;

    if (companyName && companyId) {
        let record = {
            company_id: companyId,
            company_name: companyName,
            company_adress: companyAdress,
            company_type: companyType,
        }
        companyController.saveCompany(record);
    }
})





module.exports = router;