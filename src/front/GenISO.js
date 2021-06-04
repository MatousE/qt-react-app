import React from 'react';
import Axios from 'axios';
import './HomePage.css';
import logo from './logo.png';

import docs from './OutputDocs'

// Function for the GenISO web page
function GenISO() {
    //Function that gets the updated documents from the backend
    function ISO(){
        Axios.get("http://localhost:3001/GenISO").then((response)=>{
            var temporaryDownloadLink = document.createElement("a");
            const files = [docs.doc0,
                docs.doc1,
                docs.doc2,
                docs.doc3,
                docs.doc4,
                docs.doc5,
                docs.doc6,
                docs.doc7,
                docs.doc8,
                docs.doc9,
                docs.doc10,
                docs.doc11,
                docs.doc12,
                docs.doc13,
                docs.doc14,
                docs.doc15,
                docs.doc16,
                docs.doc17,
                docs.doc18,
                docs.doc19,
                docs.doc20,
                docs.doc21,
                docs.doc22,
                docs.doc23
            ]

            let i;
            // Loops through the documents and downloads them
            for (i = 0; i < 24; i++) {
                temporaryDownloadLink.setAttribute('href', files[i] )
                temporaryDownloadLink.setAttribute( 'download', 'file'+(i)+'.docx' )
                temporaryDownloadLink.click();
            }

        })

    }
    // The javascript for the web page
    return(
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
                <button onClick={ISO}>Generate ISO</button>
            </div>
            </body>
        </div>
    )
}
export default GenISO;