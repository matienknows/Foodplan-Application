import React, { Component } from 'react'
import FoodDataService from '../api/FoodDataService.js'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";



class FoodTableRawComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foodTableCell: [],
            veggyTableCell: [],
            veganTableCell: [],
            message: '',
            startDate: '2019-10-14',
            endDate: '2019-10-18',
            name: 'Veggy',
            vegan: 'Vegan'

        }

        this.handlerChange = this.handlerChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.removeMeatItem = this.removeMeatItem.bind(this)
        this.removeVeganItem = this.removeVeganItem.bind(this)
        this.removeVeggyItem = this.removeVeggyItem.bind(this)
        this.veganItemEdit = this.veganItemEdit.bind(this)
        this.meatItemEdit = this.meatItemEdit.bind(this)
        this.veggyItemEdit = this.veggyItemEdit.bind(this)
        this.addVeganItem = this.addVeganItem.bind(this)
        this.addMeatItem = this.addMeatItem.bind(this)
        this.addVeggyItem = this.addVeggyItem.bind(this)


    }

    componentDidMount() {
        this.refreshFoodTableCells();
    }

    //Daten aus dem Backend für die einzelnen Tabellen

    refreshFoodTableCells() {
        FoodDataService.retrieveDateRangeFoodTable(this.state.startDate, this.state.endDate)
            .then(
                response => {
                    this.setState({ foodTableCell: response.data })
                },

                FoodDataService.retrieveDateRangeVeggyTable(this.state.name, this.state.startDate, this.state.endDate)
                    .then(
                        responseVeggy => {
                            this.setState({ veggyTableCell: responseVeggy.data })
                        },
                        FoodDataService.retrieveDateRangeVeganTable(this.state.vegan, this.state.startDate, this.state.endDate)
                            .then(
                                responseVegan => {
                                    this.setState({ veganTableCell: responseVegan.data })
                                }
                            )
                    )
            )
            .catch(err => console.log(err))
    }

    //Einzelne Gerichte löschen

    removeMeatItem(id) {
        console.log(id)
        FoodDataService.deleteMeatItem(id)
            .then(
                response => {
                    this.setState({ message: "Das Gericht wurde erfolgreich aus dem Essensplan gelöscht" })
                    this.componentDidMount()
                    alert(this.state.message)
                }
            )


    }


    removeVeggyItem(id) {
        console.log(id)
        FoodDataService.deleteVeggyItem(this.state.name, id)
            .then(
                response => {
                    this.setState({ message: "Das vegetarische Gericht wurde aus dem Essensplan entfernt" })
                    this.componentDidMount()
                    alert(this.state.message)
                }
            )
    }

    removeVeganItem(id) {
        console.log(id)
        FoodDataService.deleteVeganItem(this.state.vegan, id)
            .then(
                response => {
                    this.setState({ message: "Das vegane Gericht wurde aus dem Essenplan entfernt" })
                    this.componentDidMount()
                    alert(this.state.message)
                }
            )
    }

    //---Gerichtdetails ändern 

    veganItemEdit(id) {
        this.props.history.push(`/configFoodTable/VegantableEdit/${id}`)
    }

    meatItemEdit(id) {
        this.props.history.push(`/configFoodTable/MeattableEdit/${id}`)
    }

    veggyItemEdit(id) {
        this.props.history.push(`/configFoodTable/VeggytableEdit/${id}`)
    }


    //----- Gericht hinzufügen 
    addVeganItem() {
        console.log("add")
        this.props.history.push("/configFoodTable/VegantableEdit/-1")
    }

    addMeatItem() {
        console.log("add")
        this.props.history.push("/configFoodTable/MeattableEdit/-1")
    }

    addVeggyItem() {
        console.log("add")
        this.props.history.push("/configFoodTable/VeggytableEdit/-1")
    }


    //---
    handlerChange(event) {
        this.setState({
            [event.target.name]
                : event.target.value
        })

    }

    handleSubmit() {
        this.componentDidMount()
    }


    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    <div className="form-row searchBar">
                        <div className="col-xs-2 startDate">
                            <input type="text" name="startDate" className="form-control" placeholder="Von: YYYY-MM-DD"
                                value={this.setState.startDate} onChange={this.handlerChange}></input>
                        </div>
                        <div className="col-xs-2 endDate">
                            <input type="text" name="endDate" className="form-control" value={this.setState.endDate} placeholder="Bis: YYYY-MM-DD"
                                value={this.setState.endDate} onChange={this.handlerChange} ></input>
                        </div>
                        <div className="col-xs-2 date-button">
                            <button type="button" className="btn btn-outline-danger" onClick={this.handleSubmit}>Auswählen</button>
                        </div>
                    </div>

                </form>

                <h1>Meat</h1>
                <div class="typewriter">
                    <div class="typewriter-text">Beyond the boundaries of taste</div>
                </div>
                <div class="table-responsive table-hover">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Gericht</th>
                                <th scope="col">Preis €</th>
                                <th scope="col">Tag</th>
                                <th></th>
                                <th><button className="btn btn-danger" onClick={this.addMeatItem}>Essen hinzufügen</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.foodTableCell.map(
                                    foodweek =>
                                        <tr key={foodweek.id}>
                                            <td>{foodweek.id}</td>
                                            <td>{foodweek.food}</td>
                                            <td>{foodweek.price}€</td>
                                            <td>{moment(foodweek.day).format('dddd, DD.MM.YY')}</td>
                                            <td><button className="btn btn-outline-secondary" onClick={() => this.meatItemEdit(foodweek.id)}>Ändern</button></td>
                                            <td><button className="btn btn-outline-warning" onClick={() => this.removeMeatItem(foodweek.id)}>Löschen</button></td>
                                        </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>

                <h1>Veggy</h1>
                <div class="typewriter">
                    <div class="typewriter-text">Where food speaks with your palate</div>
                </div>
                
                <div class="table-responsive table-hover">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Gericht</th>
                                <th scope="col">Preis €</th>
                                <th scope="col">Tag</th>
                                <th></th>
                                <th><button className="btn btn-danger" onClick={this.addVeggyItem}>Essen hinzufügen</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.veggyTableCell.map(
                                    veggyweek =>
                                        <tr key={veggyweek.id}>
                                            <td>{veggyweek.id}</td>
                                            <td>{veggyweek.food}</td>
                                            <td>{veggyweek.price}€</td>
                                            <td>{moment(veggyweek.day).format('dddd, DD.MM.YY')}</td>
                                            <td><button className="btn btn-outline-secondary" onClick={() => this.veggyItemEdit(veggyweek.id)}>Ändern</button></td>
                                            <td><button className="btn btn-outline-warning" onClick={() => this.removeVeggyItem(veggyweek.id)}>Löschen</button></td>
                                        </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
                <h1>Vegan</h1>
                <div class="typewriter">
                    <div class="typewriter-text">The food that lengthens life</div>
                </div>
    
                <div class="table-responsive table-hover">
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Gericht</th>
                                <th scope="col">Preis €</th>
                                <th scope="col">Tag</th>
                                <th></th>
                                <th><button className="btn btn-danger" onClick={this.addVeganItem}>Essen hinzufügen</button></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.veganTableCell.map(
                                    veganweek =>
                                        <tr key={veganweek.id}>
                                            <td>{veganweek.id}</td>
                                            <td>{veganweek.food}</td>
                                            <td>{veganweek.price}€</td>
                                            <td>{moment(veganweek.day).format('dddd, DD.MM.YY')}</td>
                                            <td><button className="btn btn-outline-secondary" onClick={() => this.veganItemEdit(veganweek.id)}>Ändern</button></td>
                                            <td><button className="btn btn-outline-warning" onClick={() => this.removeVeganItem(veganweek.id)}>Löschen</button></td>
                                        </tr>
                                )
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}
export default FoodTableRawComponent