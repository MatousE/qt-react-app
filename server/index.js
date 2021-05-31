const express = require('express');
const app  = express();
const mysql = require('mysql');
const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip')
const path = require('path');
const fs = require('fs');
const walkPath = './Controls';
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(express.json())


const db = mysql.createPool({
    host: 'q-t-db.c8idrehbuuoy.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: '200255136',
    database: 'qtdb'
});

// function replaceErrors(key, value) {
//     if (value instanceof Error) {
//         return Object.getOwnPropertyNames(value).reduce(function(error, key) {
//             error[key] = value[key];
//             return error;
//         }, {});
//     }
//     return value;
// }

// function errorHandler(error) {
//     console.log(JSON.stringify({error: error}, replaceErrors));
//
//     if (error.properties && error.properties.errors instanceof Array) {
//         const errorMessages = error.properties.errors.map(function (error) {
//             return error.properties.explanation;
//         }).join("\n");
//         console.log('errorMessages', errorMessages);
//         // errorMessages is a humanly readable message looking like this :
//         // 'The tag beginning with "foobar" is unopened'
//     }
//     throw error;
// }

app.get('/OrgInfo', (req,res)=>{
    const orgInfoSQL = "SELECT employee_name, employee_role FROM employee WHERE org_id = (1);"
    db.query(orgInfoSQL, (err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)

    })
})
app.post('/API', (req,res)=>{

    const CompanyName = req.body.CompanyName;
    const OrganisationAddress = req.body.OrganisationAddress;

    if (CompanyName!==""){
        const updateQuery = "UPDATE organisation SET org_name = (?) WHERE user_id=(1)"
        db.query(updateQuery ,[CompanyName],(err,result)=>{
            if (err){
                console.log(err);
            }
        });
    }
    if (OrganisationAddress!==""){
        const updateQuery = "UPDATE organisation SET org_address = (?) WHERE user_id=(1)"
        db.query(updateQuery ,[CompanyName],(err,result)=>{
            if (err){
                console.log(err);
            }
        });
    }


    const JobName = ["Author",
    "Board of Directors",
    "Business Continuity Manager",
    "Change Manager",
    "Chief Information Security Officer",
    "Chief Information Architect",
    "Chief Technology Officer",
    "Company Secretary",
    "Design Manager",
    "Compliance Manager",
    "Data Protection Officer",
    "Communications Manager",
    "DPA Compliance Manager",
    "Emergency Response Teams",
    "Employees",
    "Energy Manager",
    "Environment Manager",
    "Facilities Manager",
    "Finance Director",
    "Head HR",
    "Head Internal Auditor",
    "Head IT",
    "Head Marketing",
    "Head Production",
    "Head Risk",
    "Head Sales",
    "Head Software Developer",
    "Head System Testing",
    "Health Safety Officer",
    "HR Department",
    "Internal Auditors",
    "Information Architect",
    "Information Security Committee",
    "Information Security Manager",
    "Internal Reviewers",
    "IT Reviewers",
    "IT Department",
    "IT Helpdesk",
    "Lead Auditor",
    "Management System Owner",
    "Manager",
    "Network Admin",
    "Network Manager",
    "Operations Department",
    "Operations Director",
    "Owners",
    "Premises Manager",
    "Process Manager",
    "Procurement Department",
    "Project Manager",
    "Proposer",
    "Quality Manager",
    "Risk Committee",
    "System Admin",
    "Site Manager",
    "Training Manager",
    "Users",
    "Webmaster"];
    const JobArray = [req.body.Author,
        req.body.BoardDirectors,
        req.body.BusinessContinuityManager,
        req.body.ChangeManager,
        req.body.ChiefInfoSecOfficer,
        req.body.ChiefInfoArchitect,
        req.body.ChiefTechOfficer,
        req.body.CompanySecretary,
        req.body.DesignManager,
        req.body.ComplianceManager,
        req.body.DataProtectionOfficer,
        req.body.CommManager,
        req.body.DPAComplianceManager,
        req.body.EmergencyResponseTeams,
        req.body.Employees,
        req.body.EnergyManager,
        req.body.EnvironmentManager,
        req.body.FacilitiesManager,
        req.body.FinanceDirector,
        req.body.HeadHR,
        req.body.HeadInternalAudit,
        req.body.HeadIT,
        req.body.HeadMarketing,
        req.body.HeadProduction,
        req.body.HeadRisk,
        req.body.HeadSales,
        req.body.HeadSoftwareDev,
        req.body.HeadSystemTesting,
        req.body.HealthSafetyOfficer,
        req.body.HRDept,
        req.body.InternalAuditors,
        req.body.InfoArchitect,
        req.body.InfoSecCommittee,
        req.body.InfoSecManager,
        req.body.InternalReviewers,
        req.body.ITReviewers,
        req.body.ITDept,
        req.body.ITHelpdesk,
        req.body.LeadAuditor,
        req.body.ManagementSystemOwner,
        req.body.Manager,
        req.body.NetworkAdmin,
        req.body.NetworkManager,
        req.body.OperationsDepartment,
        req.body.OperationsDirector,
        req.body.Owners,
        req.body.PremisesManager,
        req.body.ProcessManager,
        req.body.ProcurementDept,
        req.body.ProcurementManager,
        req.body.ProjectManager,
        req.body.Proposer,
        req.body.QualityManager,
        req.body.RiskCommittee,
        req.body.SystemAdmin,
        req.body.SiteManager,
        req.body.TrainingManager,
        req.body.Users,
        req.body.Webmaster,
    ];

    for (let index = 0; index < JobArray.length; index++){
        if (JobArray[index]!==""){
            const authorUpdate = "UPDATE  employee SET employee_name=(?)  WHERE employee_role=(?)";
            db.query(authorUpdate ,[JobArray[index],JobName[index]],(err,result)=>{
                if (err){
                    console.log(err);
                }
            });
        }
    }



})


// app.get('/', (req,res)=>{
//     // const sqlView = "SELECT * FROM user";

//     //
//     // db.query(sqlView,(err,result,fields)=>{
//     //     res.send(result);
//     fs.readdir(walkPath, (err, files) => {
//         if (err){
//             console.log('Could not list the dir', err)
//         }
//         files.forEach(function(file,index){
//             console.log(file.toString())
//             var content = fs
//                 .readFileSync(path.resolve(walkPath, file.toString()), 'binary');
//             var zip = new PizZip(content);
//             var doc;
//             try {
//                 doc = new Docxtemplater(zip);
//             } catch(error) {
//                 // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
//                 errorHandler(error);
//             }
//
//             doc.setData({
//                 first_name: 'John',
//                 last_name: 'Doe',
//                 phone: '0652455478',
//                 description: 'New Website'
//             });
//
//         });
//     });
// });

app.listen(3001,()=>{
   console.log('running on port 3001');
});