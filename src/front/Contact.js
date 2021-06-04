import React  from 'react';
import logo from './logo.png';
import './afterlogin.css';

// Function that represents the Contact page
function Contact (){
    var status = document.getElementById("status");

    // Function to indicate a successful submission
    function success() {
        status.classList.add('success');
        status.innerHTML = "Thanks!";
    }

    // Function to indicate an error has occurred
    function error() {
        status.innerHTML = "There was a problem, please try again.";
        status.classList.add('error');
    }

    // Javascript to design the Contact page
    return (

        <body>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pontem Security Login Form</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,500;1,400&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,500;1,400&display=swap" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossOrigin="anonymous" />
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" media="screen" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css" integrity="sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni" crossOrigin="anonymous" />
            <meta name="description" content="Cyber Security" />
            <section id="header">
                <div className="menu-bar">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={logo} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
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
            <section className="contact">
                <div className="container">
                    <div className="contactInfo">
                        <div className="box">
                            <div className="icon"><i className="fa fa-phone" aria-hidden="true" /></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p>+44 20 7097 3957</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true" /></div>
                            <div className="text">
                                <h3>E-mail</h3>
                                <p>cyberinfo@pontemsecurity.co.uk</p>
                            </div>
                        </div>
                    </div>
                    <div className="contactForm">
                        <form>
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" cols={35} rows={8} defaultValue={""} />
                                <span>Type Your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" name defaultValue="Send" />
                            </div>
                        </form>
                    </div>
                </div>
                <div id="status" />
            </section>
        </body>
    )
}

export default Contact;