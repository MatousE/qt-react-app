const express = require('express');
const app  = express();
const mysql = require('mysql');
const Docxtemplater = require('docxtemplater');
const PizZip = require('pizzip')
const path = require('path');
const fs = require('fs');
const copydir = require('copy-dir');
const walkPath = './Controls';
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json())

// Variable creating connection to the database
const db = mysql.createPool({
    host: 'q-t-db.c8idrehbuuoy.eu-west-2.rds.amazonaws.com',
    user: 'admin',
    password: '200255136',
    database: 'qtdb'
});

// Function to replace errors
function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key) {
            error[key] = value[key];
            return error;
        }, {});
    }
    return value;
}

// Function to handle errors when generating the documents
function errorHandler(error) {
    console.log(JSON.stringify({error: error}, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error) {
            return error.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

// Function to generate the organisation details
app.get('/GenISO', (req,res)=>{
    var author;
    var boardDirectors;
    var businessContinuityManager;
    var changeManager;
    var chiefInfoSecOfficer;
    var owner;
    var companySecretary;
    var dataProtectionOfficer;
    var emergencyResponseTeams;
    var employees;
    var financeDirector;
    var headHR;
    var headIT;
    var hrDept;
    var infoSecCommittee;
    var infoSecManager;
    var itDept;
    var manager;
    var networkManager;
    var organisationName;
    var premisesManager;
    var webmaster;
    var headSoftwareDevel;
    var headSystemTest;
    var procurementManager;
    var siteManager;
    var qualityManager;
    var projectManager;

    // Query to get the organisation name and address
    const orgNameSQL = "SELECT org_name, org_address from organisation WHERE user_id=(1)";
    db.query(orgNameSQL, (err,rows)=>{
        if (err){
            console.log(err)
        }
        else{
            organisationName = rows[0].org_name
        }
    })
    // Query to get the employee names and details
    const orgInfoSQL = "SELECT employee_name, employee_role FROM employee WHERE org_id = (1)";
    db.query(orgInfoSQL, (err,rows)=>{
        if (err){
            console.log(err);
        }
        else {

            // Checking if the item is any of the following roles and if so setting it the variable
            rows.forEach(function (item) {
                if (item.employee_role === "Premises Manager"){
                    premisesManager = item.employee_name;
                }
                else if (item.employee_role === "Project Manager"){
                    projectManager = item.employee_name;
                }
                else if (item.employee_role === "Quality Manager"){
                    qualityManager = item.employee_name;
                }
                else if (item.employee_role === "Site Manager"){
                    siteManager = item.employee_name;
                }
                else if (item.employee_role === "Procurement Manager"){
                    procurementManager = item.employee_name;
                }
                else if (item.employee_role === "Head System Testing"){
                    headSystemTest = item.employee_name;
                }
                else if (item.employee_role === "Head Software Developer"){
                    headSoftwareDevel = item.employee_name;
                }
                else if (item.employee_role === "Owners"){
                    owner = item.employee_name;
                }
                else if (item.employee_role === "Board of Directors"){
                    boardDirectors = item.employee_name;
                }
                else if (item.employee_role === "Author"){
                    author = item.employee_name;
                }
                else if (item.employee_role === "Finance Director"){
                    financeDirector = item.employee_name;
                }
                else if (item.employee_role === "Information Security Manager"){
                    infoSecManager = item.employee_name;
                }
                else if (item.employee_role=== "Chief Information Security Officer"){
                    chiefInfoSecOfficer = item.employee_name;
                }
                else if (item.employee_role === "Employees" ){
                    employees = item.employee_name;
                }
                else if (item.employee_role === "Head IT"){
                    headIT = item.employee_name;
                }
                else if (item.employee_role === "Manager"){
                    manager = item.employee_name;
                }
                else if (item.employee_role === "Change Manager"){
                    changeManager = item.employee_name;
                }
                else if (item.employee_role === "IT Department"){
                    itDept = item.employee_name;
                }
                else if (item.employee_role === "Network Manager"){
                    networkManager = item.employee_name;
                }
                else if (item.employee_role === "Webmaster"){
                    webmaster = item.employee_name;
                }
                else if (item.employee_role === "Information Security Committee"){
                    infoSecCommittee = item.employee_name;
                }
                else if (item.employee_role === "Company Secretary"){
                    companySecretary = item.employee_name;
                }
                else if (item.employee_role === "Emergency Response Teams"){
                    emergencyResponseTeams = item.employee_name;
                }
                else if (item.employee_role === "Business Continuity Manager"){
                    businessContinuityManager = item.employee_name;
                }
                else if (item.employee_role === "Data Protection Officer"){
                    dataProtectionOfficer = item.employee_name;
                }
                else if (item.employee_role === "Head HR"){
                    headHR = item.employee_name;
                }
                else if (item.employee_role === "HR Department"){
                    hrDept = item.employee_name;
                }

            });

            // Accessing the directory
            fs.readdir(walkPath, (err, files) => {
                if (err){
                    console.log('Could not list the dir', err)
                }
                // Looping through the files withing the directory
                files.forEach(function(file,index){
                    const content = fs
                        .readFileSync(path.resolve(walkPath, file.toString()), 'binary');

                    const zip = new PizZip(content);
                    let doc;
                    try {
                        doc = new Docxtemplater(zip);
                    } catch(error) {
                        errorHandler(error);
                    }

                    // Setting the document to have the relevant data
                    doc.setData({
                        ProjectManager : projectManager,
                        QualityManager : qualityManager,
                        SiteManager: siteManager,
                        HeadSystemTest : headSystemTest,
                        ProcurementManager : procurementManager,
                        HeadSoftwareDeveloper: headSoftwareDevel,
                        Owners : owner,
                        BoardDirectors:boardDirectors,
                        Author: author,
                        OrganisationName: organisationName,
                        PremisesManager : premisesManager,
                        FinanceDirector : financeDirector,
                        InfoSecManager: infoSecManager,
                        ChiefInfoSecOfficer: chiefInfoSecOfficer,
                        'Employees/Staff':employees,
                        HeadIT: headIT,
                        Manager: manager,
                        ChangeManager: changeManager,
                        ITDept:itDept,
                        NetworkManager: networkManager,
                        Webmaster: webmaster,
                        InfoSecCommittee: infoSecCommittee,
                        CompanySecretary: companySecretary,
                        EmergencyResponseTeams: emergencyResponseTeams,
                        BusinessContinuityManager: businessContinuityManager,
                        DataProtectionOfficer: dataProtectionOfficer,
                        HeadHR: headHR,
                        HRDept: hrDept
                     });

                    // Rendering the document with the relevant info
                    try {
                        doc.render()
                    }
                    catch (error) {
                        errorHandler(error);

                    }

                    // Saving the documents in /Output
                    const buf = doc.getZip().generate({type: 'nodebuffer'});
                    fs.writeFileSync(path.resolve('./Output', (index)+'.docx'), buf);

                });
            });
        }
        let filesArr = [];

        // Copying the files from server to front-end
        copydir.sync('../server/Output','../src/front/Output')

        // Confirming successful generation
        res.send("Done");
    })
})

// Function to get the organisation employee details
app.get('/OrgInfo', (req,res)=>{
    const orgInfoSQL = "SELECT employee_name, employee_role FROM employee WHERE org_id = (1);"
    db.query(orgInfoSQL, (err,result)=>{
        if (err){
            console.log(err);
        }
        res.send(result)

    })
})

// Function to update the details of the organisation
app.post('/API', (req,res)=>{

    const CompanyName = req.body.CompanyName;
    const OrganisationAddress = req.body.OrganisationAddress;

    // Updating company name
    if (CompanyName!==""){
        const updateQuery = "UPDATE organisation SET org_name = (?) WHERE user_id=(1)"
        db.query(updateQuery ,[CompanyName],(err,result)=>{
            if (err){
                console.log(err);
            }
        });
    }
    // Updating company address
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
    "Procurement Manager",
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

    // Looping through all the employee roles to see if they need to be updated
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

// Checking if back-end is running
app.listen(3001,()=>{
   console.log('running on port 3001');
});