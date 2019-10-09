import React, { Component } from 'react'
import { withRouter } from 'react-router'
import AuthenticationService from '../service/AuthenticationService.js'
import logo from '../images/Logo2.png';
import "../../node_modules/jquery/dist/jquery.min.js"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (

            <header>

                 <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="/Home">
                            <div class="logo-image"><img src={logo} alt="logo" class="img-fluid" /></div>
                        </a>
                    </div>
                    <div class="collapse navbar-collapse " id="navCollapse" aria-controls="navCollapse"
                        aria-expanded="false" aria-label="Toggle navigation">

                        <a className="nav-link" href="/Home">Home</a>
                        <a className="nav-link active" href="/Essensplan">Mensaplan</a>
                        {isUserLoggedIn && <a className="nav-link active" href="/configFoodTable">Mensa Verwalten</a>}
                        {isUserLoggedIn && <a className="nav-link" href="Essensangebot">Essensangebot Verwalten</a>}
                        <ul className="navbar-nav navbar-collapse navbar-dark justify-content-end">
                            {!isUserLoggedIn && <a className="nav-link" class="btn btn-outline-danger" href="/Login">Login</a>}
                            {isUserLoggedIn && <a className="nav-link" href="/Home" onClick={AuthenticationService.logout}>Logout</a>}
                        </ul>
                    </div>
                </nav> 

            </header>
        )
    }

}
export default withRouter(HeaderComponent)
