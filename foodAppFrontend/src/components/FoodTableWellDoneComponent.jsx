import React, { Component } from 'react'
import FoodDataService from '../api/FoodDataService.js'
import moment from 'moment'
import "react-datepicker/dist/react-datepicker.css";

class FoodTableWellDone extends Component {

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
            vegan: 'Vegan',
            search: ''

        }

        this.handlerChange = this.handlerChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


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
            <div className="md-form">
                {/* <input class="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.handleInputChange}></input> */}

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
                                <th scope="col-3">ID</th>
                                <th scope="col-3">Gericht</th>
                                <th scope="col-3">Preis</th>
                                <th scope="col-3">Tag</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.foodTableCell.map(
                                    foodweek =>
                                        <tr key={foodweek.id}>
                                            <td >{foodweek.id}</td>
                                            <td>{foodweek.food}</td>
                                            <td>{foodweek.price}€</td>
                                            <td>{moment(foodweek.day).format('dddd, DD.MM.YY')}</td>
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
                                <th scope="col-3">ID</th>
                                <th scope="col-3">Gericht</th>
                                <th scope="col-3">Preis €</th>
                                <th scope="col-3">Tag</th>
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
                                <th scope="col-3">ID</th>
                                <th scope="col-3">Gericht</th>
                                <th scope="col-3">Preis</th>
                                <th scope="col-3">Tag</th>
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
export default FoodTableWellDone