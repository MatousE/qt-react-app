import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import './HomePage.css';
import logo from './logo.png';

function View(){
    const [employeeList, setEmployeeList] = useState([]);

    function getOrgInfo(){
            Axios.get("http://localhost:3001/OrgInfo").then((response)=>{
                setEmployeeList(response.data);
                console.log(response);
            });
    }
    return (
        <div className="app">
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
                <button onClick={getOrgInfo}> Get Info</button>
                {employeeList.map((val)=>{
                    return ( <input className={"employeeText"}
                                    type={"textarea"}
                                    value={("Role: ")+(val.employee_role)+("  |  ") +("Employee name: ") + (val.employee_name)}/>)
                })}

            </div>
            </body>
        </div>    )
}
export default View;
