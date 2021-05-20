import React, { Component, useState, useEffect} from 'react';
import './HomePage.css';
import './t.jpg';
import logo from './logo.png';
import Axios from 'axios';

function HomePage() {
    return (
        <div className = "body">
            <section id="header">
                <div className="menu-bar">
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"/>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
                          rel="stylesheet"
                          integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
                          crossOrigin="anonymous"/>
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" media="screen" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"/>

                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src={logo}/></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-lg-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="/"><i className="fa fa-home" aria-hidden="true" />HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="./index.html"><i className="fa fa-sign-out" aria-hidden="true" />LOGOUT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="content">
                    <h1>WELCOME TO PONTEM SECURITY</h1>
                    <button type="button" className="button button1" id="ISOButton"><span /><i className="fa fa-file-text-o" aria-hidden="true" />GENERATE ISO DOCUMENTS</button>
                    <button type="button" className="button button2" id="UpOrButton"><span /><i className="fa fa-pencil" aria-hidden="true" />UPDATE ORGANISATION DETAILS</button>
                    <button type="button" className="button button3" id="ViewButton"><span /><i className="fa fa-eye" aria-hidden="true" />VIEW ORGANISATION DETAILS</button>
                    <button type="button" className="button button4" id="ProfilButton"><span /><i className="fa fa-user" aria-hidden="true" />PROFILE SETTINGS</button>
                    <button type="button" className="button button5" id="ContactButton"><span /><i className="fa fa-question" aria-hidden="true" />CONTACT US</button>
                </div>
            </section>

        </div>
    )
}

export default HomePage;