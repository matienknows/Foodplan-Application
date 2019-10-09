import React, { Component } from 'react'
import FoodDataService from '../api/FoodDataService.js'


class FoodInfoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            foods: [],
            message: null

        }

        this.refreshFoods = this.refreshFoods.bind(this)
        this.changeFoodItem = this.changeFoodItem.bind(this)
        this.removeFoodItem = this.removeFoodItem.bind(this)
        this.addFoodItem = this.addFoodItem.bind(this)
    }

    componentDidMount() {
        this.refreshFoods();
    }

    refreshFoods() {
        FoodDataService.retrieveFood()
            .then(
                response => {
                    this.setState({ foods: response.data })
                }
            )
            .catch(err => console.log(err))
    }

    removeFoodItem(food) {
        console.log(food)
        FoodDataService.deleteFoodItem(food)
            .then(
                response => {
                    this.setState({ message: `Das Gericht ${food} wurde erfolgreich gelöscht` })
                    this.refreshFoods()
                    alert(this.state.message)
                }
            )
    }

    changeFoodItem(food) {
        //console.log("click", food)
        this.props.history.push(`/change/${food}`)
    }

    addFoodItem() {
        console.log("add")
        this.props.history.push(`/change/newFood`)
    }

    render() {
        return (
            <div>
                <div class="table-responsive table-hover mt-5 mb-5">
                        <h1 class="text-center"></h1>
                        <h1 class="text-center mt-5">Sortiment</h1>
                        <div class="typewriter">
                    <div class="typewriter-text">We serve passion</div>
                </div>
                    <table class="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Essen</th>
                                <th>Preis €</th>
                                <th>Art</th>
                                <th></th>
                                <th><button className="btn btn-danger" onClick={this.addFoodItem}>Essen hinzufügen</button></th>
                    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.foods.map(
                                    foodinfo =>
                                        <tr key={foodinfo.food}>
                                            <td class="text-left">{foodinfo.food}</td>
                                            <td>{foodinfo.price}</td>
                                            <td>{foodinfo.kind}</td>
                                            <td><button className="btn btn-outline-secondary" onClick={() => this.changeFoodItem(foodinfo.food)} >Ändern</button></td>
                                            <td><button className="btn btn-outline-warning" onClick={() => this.removeFoodItem(foodinfo.food)}>Löschen</button></td>
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
export default FoodInfoComponent