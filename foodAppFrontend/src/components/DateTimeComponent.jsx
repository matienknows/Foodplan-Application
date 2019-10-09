import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from 'moment'


 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class DateTimeComponent extends Component {
  constructor(props){
      super(props)
      this.state = {
        startDate:'',
        endDate: ''
      }
    this.changeDateRange = this.changeDateRange.bind(this)
  }

  componentDidMount(){

  }

  
  changeDateRange(startDate, endDate){

      startDate= moment(this.state.startDate, 'MM/DD/YYYY').format('YYYY-MM-DD');
      endDate= moment(this.state.endDate, 'MM/DD/YYYY').format('YYYY-MM-DD');
     
      this.setState.startDate= startDate
      this.setState.endDate= endDate 
      console.log(startDate, endDate)
  }
    
 
  startDatehandleChange = date => {
    this.setState({
      startDate: date
    })
  }

  endDatehandleChange = date => {
    this.setState({
      endDate: date
    })
  }

  render() {
    
    return (
    <>
    <header></header>
        <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={this.state.startDate}
        onChange={this.startDatehandleChange}
      />
      <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={this.state.endDate}
          onChange={this.endDatehandleChange}

      />
      <button className="btn btn-success" onClick={this.changeDateRange(this.state.startDate, this.state.endDate)}>Auswählen</button>

    </>
    )
  }
} 
export default DateTimeComponent
