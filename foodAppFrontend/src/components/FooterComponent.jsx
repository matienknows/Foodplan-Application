import React, { Component } from 'react'
import logoWhite from '../images/LogoWhite.png';

class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer">
                <div class="pt-5 pb-5 footer">
                    <div class="container-fluid pt-2">
                        <div class="row">
                            
                            <div class="col-lg-3 col-xs-12 links text-left">
                                <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                                <ul class="m-0 p-0">
                                    <li>> <a href="/Home">Home</a></li>
                                    <li>> <a href="/Login">Login</a></li>
                                    <li>> <a href="/Essensplan">Essensplan</a></li>
                                    
                                   
                                </ul>
                            </div>
                            <div class="col-lg-4 col-xs-12 location text-left">
                                <h4 class="mt-lg-0 mt-sm-4">Infos</h4>
                                <p>Sadat</p>
                                <p>Barkhausestraße 23, 21335 Lüneburg</p>
                                <p>(541) 754-3010</p>
                                <p>info@yumyum.com</p>
                            </div>
                        </div>
                        <div class="row mt-5">
                            <div class="col copyright">
                                <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="text-muted">Alle Angaben ohne Gewähr. Es gilt die Auszeichnung vor Ort. Preise für Studierende.</span>
            </footer>
        )
    }
}

export default FooterComponent