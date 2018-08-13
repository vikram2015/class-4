let express = require('express');
let router = express.Router();
let companyController = require('../../controller/company/companyController')


router.post('/saveNewCompany', function(req, res){
    console.log(req.body);
    let companyName = req.body.companyName;
    let companyId = req.body.companyId;
    let companyAdress = req.body.companyAdress;
    let companyType = req.body.companyType;
if(companyName && companyId){
    let record = {
        company_id:companyId,
        company_name:companyName,
        company_adress:companyAdress,
        company_type:companyType,
    }
    console.log("record in routes")
    console.log(record)

companyController.saveCompany(record);


}else{

}
    


})





module.exports = router;