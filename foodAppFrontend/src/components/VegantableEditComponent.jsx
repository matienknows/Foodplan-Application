import React, { Component } from 'react'
import FoodDataService from '../api/FoodDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class VegantableEditComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: parseInt(this.props.match.params.id),
            food: '',
            day: '',
            price: ''

        }
        this.onSubmit = this.onSubmit.bind(this)

    }

    componentDidMount() {
        console.log(this.state.id)
        if (this.state.id === -1) {
            return
        }
        FoodDataService.retrieveItemVegan(this.state.id)
            .then(
                response => this.setState({
                    food: response.data.food,
                    day: response.data.day,
                    price: response.data.price
                }))

    }


    onSubmit(values) {
        let veganItem = {
            id: this.state.id,
            food: values.food,
            day: values.day,
            price: values.price

        }

        if (this.state.id === -1) {

            FoodDataService.createVeganItem(veganItem)
                .then(() => this.props.history.push("/configFoodTable"))
            alert("Das vegane Gericht wurde erstellt")
            return
        } else {

            FoodDataService.updateVeganItem(this.state.id, veganItem)
                .then(() => this.props.history.push("/configFoodTable"))
            alert("Die vorgenommenen Änderungen für das Gericht wurden erfolgreich umgesetzt.")
            console.log("updated")
        }

    }


    render() {

        let { food, day, price } = this.state
        return (
            <div>
                <h1>Essen bearbeiten</h1>
                <div className="container">
                    <Formik

                        onSubmit={this.onSubmit}
                        initialValues={{

                            food: food,
                            day: day,
                            price: price
                        }
                        }
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div"
                                        className="alert alert-warning" />

                                    <div class="container mt-5 mb-5">
                                        <div class="row mt-2 justify-content-center align-items-center">
                                            <div class="col-sm-5 mt-5 pt-5 mb-2">
                                                <h1>Vegan</h1>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-sm-5 mt-4 mb-2">
                                                <fieldset className="form-group">
                                                    <Field className="form-control" placeholder="Essen" type="text" name="food" />
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-3 mb-2">
                                                <fieldset className="form-group">
                                                    <Field className="form-control" placeholder="YYYY-MM-DD" type="String" name="day" />
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-2 mb-2">
                                                <fieldset className="form-group">
                                                    <Field className="form-control" placeholder="Preis" type="double" name="price" />
                                                </fieldset>

                                            </div>
                                        </div>
                                        <div class="row safe">
                                            <div class="col">
                                                <button className="btn btn-outline-danger safelog" type="submit">Speichern</button>
                                            </div>
                                        </div>

                                    </div>
                                </Form>
                            )
                        }
                    </Formik>
                </div>

            </div>
        )
    }
}

export default VegantableEditComponent