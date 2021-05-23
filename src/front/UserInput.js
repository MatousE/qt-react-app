import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import './HomePage.css';
import logo from './logo.png';


function UserInput(){
    const submitForm = () => {

    }
    const [CompanyName, setCompanyName] = useState("");
    const [OrganisationAddress, setOrganisationAddress] = useState("");
    const [Author, setAuthor] = useState("");
    const [BoardDirectors, setBoardDirectors] = useState("");
    const [BusinessContinuityManager, setBusinessContinuityManager] = useState("");
    const [ChangeManager, setChangeManager]= useState("");
    const [ChiefInfoSecOfficer, setChiefInfoSecOfficer] = useState("");
    const [ChiefInfoArchitect, setChiefInfoArchitect] = useState("");
    const [ChiefTechOfficer, setChiefTechOfficer] = useState("");
    const [CompanySecretary, setCompanySecretary]= useState("");
    const [DesignManager, setDesignManager] = useState("");
    const [ComplianceManager, setComplianceManager] = useState("");
    const [DataProtectionOfficer, setDataProtectionOfficer] = useState("");
    const [CommManager, setCommManager] = useState("");
    const [DPAComplianceManager, setDPAComplianceManager] = useState("");
    const [EmergencyResponseTeams, setEmergencyResponseTeams] = useState("");
    const [Employees, setEmployees] = useState("");
    const [EnergyManager, setEnergyManager] = useState("");
    const [EnvironmentManager, setEnvironmentManager] = useState("");
    const [FacilitiesManager, setFacilitiesManager] = useState("");
    const [FinanceDirector, setFinanceDirector] = useState("");
    const [HeadHR, setHeadHR] = useState("");
    const [HeadInternalAudit, setHeadInternalAudit] = useState("");
    const [HeadIT, setHeadIT] = useState("");
    const [HeadMarketing, setHeadMarketing] = useState("");
    const [HeadProduction, setHeadProduction] = useState("");
    const [HeadRisk, setHeadRisk] = useState("");
    const [HeadSales, setHeadSales] = useState("");
    const [HeadSoftwareDev, setHeadSoftwareDev] = useState("");
    const [HeadSystemTesting, setHeadSystemTesting] = useState("");
    const [HealthSafetyOfficer, setHealthSafetyOfficer] = useState("");
    const [HRDept, setHRDept] = useState("");
    const [InternalAuditors, setInternalAuditors] = useState("");
    const [InfoArchitect, setInfoArchitect] = useState("");
    const [InfoSecCommittee, setInfoSecCommittee] = useState("");
    const [InfoSecManager, setInfoSecManager] = useState("");
    const [InternalReviewers, setInternalReviewers] = useState("");
    const [ITReviewers, setITReviewers] = useState("");
    const [ITDept, setITDept] = useState("");
    const [ITHelpdesk, setITHelpdesk] = useState("");
    const [LeadAuditor, setLeadAuditor] = useState("");
    const [ManagementSystemOwner, setManagementSystemOwner] = useState("");
    const [Manager, setManager] = useState("");
    const [NetworkAdmin, setNetworkAdmin] = useState("");
    const [NetworkManager, setNetworkManager] = useState("");
    const [OperationsDepartment, setOperationsDepartment] = useState("");
    const [OperationsDirector, setOperationsDirector] = useState("");
    const [Owners, setOwners] = useState("");
    const [PremisesManager, setPremisesManager] = useState("");
    const [ProcessManager, setProcessManager] = useState("");
    const [ProcurementDept, setProcurementDept ] = useState("");
    const [ProcurementManager, setProcurementManager] = useState("");
    const [ProjectManager, setProjectManager] = useState("");
    const [Proposer, setProposer] = useState("");
    const [QualityManager, setQualityManager] = useState("");
    const [RiskCommittee, setRiskCommittee]= useState("");
    const [SystemAdmin, setSystemAdmin] = useState("");
    const [SiteManager, setSiteManager] = useState("");
    const [TrainingManager, setTrainingManager] = useState("");
    const [Users, setUsers] =  useState("");
    const [Webmaster, setWebmaster] = useState("");


    return (
        <body>
            <section id="header">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"/>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
                      crossOrigin="anonymous"/>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" media="screen" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"/>
                <div className="menu-bar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={logo} /></a>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-lg-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/"><i className="fa fa-home" aria-hidden="true" />HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/"><i className="fa fa-sign-out" aria-hidden="true" />LOGOUT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <div className="form">
                <div>
                    <label> Organisation Name:  </label>
                    <input type="text" className="CompanyName" onChange={(e) => {
                        setCompanyName(e.target.value);
                    }}/>
                    <button onClick={submitForm()}>  Submit </button>
                </div>
                <div>
                    <label> Organisation Address: </label>
                    <input type="text" className="OrganisationAddress" onChange={(e) => {
                        setOrganisationAddress(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Author:  </label>
                    <input type="text" className="Author" onChange={(e) => {
                        setAuthor(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Board of Directors: </label>
                    <input type="text" className="BoardDirectors" onChange={(e) => {
                        setBoardDirectors(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Business Continuity Manager: </label>
                    <input type="text" className="BusinessContinuityManager" onChange={(e) => {
                        setBusinessContinuityManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Change Manager: </label>
                    <input type="text" className="ChangeManager" onChange={(e) => {
                        setChangeManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Chief Information Security Officer (CISO): </label>
                    <input type="text" className="ChiefInfoSecOfficer" onChange={(e) => {
                        setChiefInfoSecOfficer(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Chief Information Architect: </label>
                    <input type="text" className="ChiefInfoArchitect" onChange={(e) => {
                        setChiefInfoArchitect(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Chief Technology Officer: </label>
                    <input type="text" className="ChiefTechOfficer" onChange={(e) => {
                        setChiefTechOfficer(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Company Secretary: </label>
                    <input type="text" className="CompanySecretary" onChange={(e) => {
                        setCompanySecretary(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Design Manager: </label>
                    <input type="text" className="DesignManager" onChange={(e) => {
                        setDesignManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> DPA Compliance Manager: </label>
                    <input type="text" className="ComplianceManager" onChange={(e) => {
                        setComplianceManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Communications Manager: </label>
                    <input type="text" className="CommManager" onChange={(e) => {
                        setCommManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Data Protection Officer: </label>
                    <input type="text" className="DataProtectionOfficer" onChange={(e) => {
                        setDataProtectionOfficer(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> DPA Compliance Manager: </label>
                    <input type="text" className="DPAComplianceManager" onChange={(e) => {
                        setDPAComplianceManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Emergency Response Teams: </label>
                    <input type="text" className="EmergencyResponseTeams" onChange={(e) => {
                        setEmergencyResponseTeams(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Employees/Staff: </label>
                    <input type="text" className="Employees" onChange={(e) => {
                        setEmployees(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Energy Manager: </label>
                    <input type="text" className="EnergyManager" onChange={(e) => {
                        setEnergyManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Environment Manager: </label>
                    <input type="text" className="EnvironmentManager" onChange={(e) => {
                        setEnvironmentManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Facilities Manager: </label>
                    <input type="text" className="FacilitiesManager" onChange={(e) => {
                        setFacilitiesManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Finance Director (CFO): </label>
                    <input type="text" className="FinanceDirector" onChange={(e) => {
                        setFinanceDirector(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of HR: </label>
                    <input type="text" className="HeadHR" onChange={(e) => {
                        setHeadHR(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of Internal Audit: </label>
                    <input type="text" className="HeadInternalAudit" onChange={(e) => {
                        setHeadInternalAudit(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of IT (CIO): </label>
                    <input type="text" className="HeadIT" onChange={(e) => {
                        setHeadIT(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of Marketing: </label>
                    <input type="text" className="HeadMarketing" onChange={(e) => {
                        setHeadMarketing(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of Production: </label>
                    <input type="text" className="HeadProduction" onChange={(e) => {
                        setHeadProduction(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of Risk: </label>
                    <input type="text" className="HeadRisk" onChange={(e) => {
                        setHeadRisk(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of Sales: </label>
                    <input type="text" className="HeadSales" onChange={(e) => {
                        setHeadSales(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of Software Development: </label>
                    <input type="text" className="HeadSoftwareDev" onChange={(e) => {
                        setHeadSoftwareDev(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Head of System Testing: </label>
                    <input type="text" className="HeadSystemTesting" onChange={(e) => {
                        setHeadSystemTesting(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Health and Safety Officer: </label>
                    <input type="text" className="HealthSafetyOfficer" onChange={(e) => {
                        setHealthSafetyOfficer(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> HR Department: </label>
                    <input type="text" className="HRDept" onChange={(e) => {
                        setHRDept(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Internal Auditors: </label>
                    <input type="text" className="InternalAuditors" onChange={(e) => {
                        setInternalAuditors(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Information Architect: </label>
                    <input type="text" className="InfoArchitect" onChange={(e) => {
                        setInfoArchitect(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Info Security Committee: </label>
                    <input type="text" className="InfoSecCommittee" onChange={(e) => {
                        setCompanyName(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Information Security Manager: </label>
                    <input type="text" className="InfoSecManager" onChange={(e) => {
                        setInfoSecManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Internal Reviewers: </label>
                    <input type="text" className="InternalReviewers" onChange={(e) => {
                        setInternalReviewers(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> It Reviewers: </label>
                    <input type="text" className="ITReviewers"  onChange={(e) => {
                        setITReviewers(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> IT Department: </label>
                    <input type="text" className="ITDept"  onChange={(e) => {
                        setITDept(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> IT Helpdesk: </label>
                    <input type="text" className="ITHelpdesk" onChange={(e) => {
                        setITHelpdesk(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Lead Auditor: </label>
                    <input type="text" className="LeadAuditor" onChange={(e) => {
                        setLeadAuditor(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Management System Owner (MSO): </label>
                    <input type="text" className="ManagementSystemOwner" onChange={(e) => {
                        setManagementSystemOwner(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Manager/Executive (generic/line): </label>
                    <input type="text" className="Manager"  onChange={(e) => {
                        setManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Network Admin: </label>
                    <input type="text" className="NetworkAdmin" onChange={(e) => {
                        setNetworkAdmin(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Network Manager: </label>
                    <input type="text" className="NetworkManager" onChange={(e) => {
                        setNetworkManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Operations Department: </label>
                    <input type="text" className="OperationsDepartment"  onChange={(e) => {
                        setOperationsDepartment(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Operations Director (COO): </label>
                    <input type="text" className="OperationsDirector" onChange={(e) => {
                        setOperationsDirector(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Owners: </label>
                    <input type="text" className="Owners" onChange={(e) => {
                        setOwners(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Premises Manager: </label>
                    <input type="text" className="PremisesManager"  onChange={(e) => {
                        setPremisesManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Process Manager: </label>
                    <input type="text" className="ProcessManager"  onChange={(e) => {
                        setProcessManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Procurement Department: </label>
                    <input type="text" className="ProcurementDept"  onChange={(e) => {
                        setProcurementDept(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Procurement Manager: </label>
                    <input type="text" className="ProcurementManager"  onChange={(e) => {
                        setProcurementManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Project Manager: </label>
                    <input type="text" className="ProjectManager" onChange={(e) => {
                        setProjectManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Proposer: </label>
                    <input type="text" className="Proposer" onChange={(e) => {
                        setProposer(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Quality Manager: </label>
                    <input type="text" className="QualityManager" onChange={(e) => {
                        setQualityManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Risk Committee: </label>
                    <input type="text" className="RiskCommittee" onChange={(e) => {
                        setRiskCommittee(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> System Administrator: </label>
                    <input type="text" className="SystemAdmin"  onChange={(e) => {
                        setSystemAdmin(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Site Manager: </label>
                    <input type="text" className="SiteManager" onChange={(e) => {
                        setSiteManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Training Manager: </label>
                    <input type="text" className="TrainingManager" onChange={(e) => {
                        setTrainingManager(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Users </label>
                    <input type="text" className="Users"  onChange={(e) => {
                        setUsers(e.target.value);
                    }}/>
                </div>
                <div>
                    <label> Webmaster </label>
                    <input type="text" className="Webmaster" onChange={(e) => {
                        setWebmaster(e.target.value);
                    }}/>
                </div>
                <button onClick={submitForm()}> Submit </button>
            </div>
        </body>

    )

}
export default UserInput;