import React, {Component} from 'react'
import FoodDataService from '../api/FoodDataService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class FoodPropComponent extends Component{

    constructor(props){
        super(props)
        this.state ={
            food: this.props.match.params.food,
            price:'',
            kind:''
        }

        this.onSubmit = this.onSubmit.bind(this)
        //this.validate = this.validate.bind(this)
    }

    componentDidMount(){
        if(this.state.food!=="newFood"){
            FoodDataService.retrieveFoodItem(this.state.food)
            .then(response => this.setState({
                price: response.data.price,
                kind: response.data.kind
            }))
        }
      console.log(this.state.food)
    }

    // validate(values) {
    //     let errors === {}
    //     if (!values.food) {
    //         errors.food = 'Geben Sie ein Essen an'}
    //     if (!values.preis) {
    //         errors.preis = 'Geben Sie ein Preis an'
    //     }
    //     if (!values.kind) {
    //         errors.kind = 'Geben Sie Fleisch, Vegan oder Vegetarisch an'
        
    //     } else if (values.food.length < 6) {
    //         errors.food = 'Geben Sie mindestends 6 Buchstaben an'
    //     }
    //     else if (values.food.length < 5) {
    //         errors.food = 'Geben Sie mindestends 5 Buchstaben an'
    //     }
    //     return errors
    //   }

    onSubmit(values){

        let foodItem = {
            food: values.food,
            price: values.price,
            kind: values.kind
        }
        if(this.state.food === foodItem.food && this.state.food !== "newFood" ){

            FoodDataService.updateFoodItem(this.state.food, foodItem)
            .then(() => this.props.history.push('/Essensangebot'))
            alert("Die vorgenommenen Änderungen für das Gericht wurden erfolgreich umgesetzt.")
            console.log("updated")
        }

         else {

            FoodDataService.createdFoodItem(foodItem)
            .then(() => this.props.history.push('/'))
             console.log("created")
             alert("Das Gericht wurde erfolgreich hinzugefügt!")
        }
    }
    

    render(){

        let { food, price, kind } = this.state
        return(
            <div>
            <h1>Essen bearbeiten</h1>
            <div className="container">
                    <Formik
                       
                        onSubmit={this.onSubmit}
                        initialValues={{

                            food: food,
                            price: price,
                            kind: kind
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
                                    <fieldset className="form-group">
                                        <label>Essen</label>
                                        <Field className="form-control" type="text" name="food" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Preis</label>
                                        <Field className="form-control" type="double" name="price" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Art</label>
                                        <Field className="form-control" type="text" name="kind" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Speichern</button>
                                </Form>
                            )
                        }
                    </Formik>
            </div>

        </div>
        )
    }
}

export default FoodPropComponent