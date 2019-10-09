import React, { Component } from 'react'
import fruit from '../images/fruit.jpg';
import food from '../images/food.jpg';
import glasfood from '../images/glasfood.jpg';
import foodplates from '../images/YUM YUM.png';
import logo from '../images/Logo2.png';
import spice from '../images/Foods.png';
import world from '../images/world.png';

class HomeComponent extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div className="container-fluid homepage">
                <div class="row">
                    <div class="col-12 foodplates">
                        <img src={foodplates} className="img-responsive" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-12 field">
                        <div class="jumbotron jumbotron-fluid">
                            <h6 class="display-4 ml-1 mr-1">Meldet sich der Magen?</h6>
                            <p class="lead lead1"> Schaue dir den Mensaplan für die nächsten Wochen an, damit du  ja nicht deine Lieblingsmahlzeit verpasst.</p>
                                <a class=" btn btn-outline-light mensaButton"  href="#" role="button">Mensaplan</a>
                            
                            <hr class="my-4 white"></hr>
                            <h6 class="display-4 ml-1 mr-1">Kein Money auf der Karte?</h6>
                            
                            <p class="lead ml-1 mr-1 lead2">Kein passendes Kleingeld und lange Schlange vorm Geldautomaten? Kennen wir alles. Über YUM YUM kannst du via Paypal, ApplePay oder Überweisung deine Karte aufladen. </p>
                                <a class="btn btn-outline-light aufladenButton" href="#" role="button">Mensakarte aufladen</a>
                            
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 ananas">
                        <div class="jumbotron2 jumbotron-fluid">
                            <img src={spice} className="img-responsive" class="float-right" />

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeComponent