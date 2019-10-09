import React, {Component} from 'react'
import FoodInfoComponent from './FoodInfoComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FoodPropComponent from './FoodPropComponent'
import HomeComponent from './HomeComponent'
import FoodTableRawComponent from './FoodTableRawComponent'
import VegantableEditComponent from './VegantableEditComponent'
import MeattableEditComponent from './MeattableEditComponent'
import VeggytableEditComponent from './VeggytableEditComponent'
import FoodTableWellDoneComponent from './FoodTableWellDoneComponent'
import LoginAdminComponent from './LoginAdminComponent'
import WelcomeAdminComponent from './WelcomeAdminComponent'
import AuthenticatedRouteComponent from './AuthenticatedRouteComponent.jsx'


class FoodApp extends Component{
    render(){
        return(
            <div className="FoodApp">
            <Router>
            <>
            <HeaderComponent/>
            <Switch>
                <AuthenticatedRouteComponent path ="/configFoodTable/VeggytableEdit/:id" component={VeggytableEditComponent}/>
                <AuthenticatedRouteComponent path ="/configFoodTable/MeattableEdit/:id" component={MeattableEditComponent}/>
                <AuthenticatedRouteComponent path ="/configFoodTable/VegantableEdit/:id" component={VegantableEditComponent}/>
                <AuthenticatedRouteComponent path ="/configFoodTable" component={FoodTableRawComponent}/>
                <Route path="/Home" component={HomeComponent}/>
                <AuthenticatedRouteComponent path="/change/:food" component={FoodPropComponent}/>
                <AuthenticatedRouteComponent path="/Essensangebot" component={FoodInfoComponent}/>
                <Route path="/Essensplan" component={FoodTableWellDoneComponent}/>
                <AuthenticatedRouteComponent path="/Welcome" component={WelcomeAdminComponent}/>
                <Route path="/Login" component={LoginAdminComponent}/>
            </Switch>
            <FooterComponent></FooterComponent>
            </>
            </Router>
            </div>

           
           
        )
    }

}
export default FoodApp