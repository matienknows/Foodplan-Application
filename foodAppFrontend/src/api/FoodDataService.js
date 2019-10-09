import Axios from 'axios'
import { JPA_API_URL } from '../Constant'


class FoodDataService{

//FoodTable ------------------------------------------------------------------------------

//???
retrieveFoodTable(){
    return Axios.get(`${JPA_API_URL}/configFoodTable`);
}


//Meatplan------------
retrieveDateRangeFoodTable(startDate, endDate){
    return Axios.get(`${JPA_API_URL}/configFoodTable/weekFilter/${startDate}/${endDate}`);
}

deleteMeatItem(id){
    //console.log(MeatItem)
    return Axios.delete(`${JPA_API_URL}/configFoodTable/weekFilter/${id}`)
}

retrieveItemMeat(id){
    return Axios.get(`${JPA_API_URL}/configFoodTable/MeattableEdit/${id}`);
}

updateMeatItem(id, meatItem){
    console.log("update executed")
    return Axios.put(`${JPA_API_URL}/configFoodTable/MeattableEdit/${id}`, meatItem );
    
}

createMeatItem(meatItem){
    console.log("create executed")
    return Axios.post(`${JPA_API_URL}/configFoodTable/MeattableEdit`, meatItem );
}

//Veggyplan------------
retrieveDateRangeVeggyTable(name,startDate, endDate){
    return Axios.get(`${JPA_API_URL}/configFoodTable/weekFilter/${name}/${startDate}/${endDate}`);
}

deleteVeggyItem(name, id){
    return Axios.delete(`${JPA_API_URL}/configFoodTable/weekFilter/${name}/${id}`)
}

retrieveItemVeggy(id){
    return Axios.get(`${JPA_API_URL}/configFoodTable/VeggytableEdit/${id}`);
}

updateVeggytItem(id, veggyItem){
    console.log("update vegy")
    return Axios.put(`${JPA_API_URL}/configFoodTable/VeggytableEdit/${id}`, veggyItem);
}

createVeggyItem(veggyItem){
    console.log("create executed")
    return Axios.post(`${JPA_API_URL}/configFoodTable/VeggytableEdit`, veggyItem );
}

//Veganplan------------
retrieveDateRangeVeganTable(vegan,startDate, endDate){
    return Axios.get(`${JPA_API_URL}/configFoodTable/weekFilter/${vegan}/${startDate}/${endDate}`);
}

retrieveItemVegan(id){
    return Axios.get(`${JPA_API_URL}/configFoodTable/VegantableEdit/${id}`);
}

deleteVeganItem(vegan, id){
    return Axios.delete(`${JPA_API_URL}/configFoodTable/weekFilter/${vegan}/${id}`)
}

updateVeganItem(id, veganItem){
    console.log("update executed")
    return Axios.put(`${JPA_API_URL}/configFoodTable/VegantableEdit/${id}`, veganItem );
    
}



createVeganItem(veganItem){
    console.log("create executed")
    return Axios.post(`${JPA_API_URL}/configFoodTable/VegantableEdit`, veganItem );
}




//Fooditems--------------------------------------------------------------------------------

    retrieveFood(){
            return Axios.get(`${JPA_API_URL}/FoodInfo/all`);
    }

    retrieveFoodItem(food){

        return Axios.get(`${JPA_API_URL}/change/${food}`);

}

updateFoodItem(food, foodItem){
    console.log("update executed")
    return Axios.put(`${JPA_API_URL}/FoodInfo/change/update/${food}`, foodItem );
    
}


createdFoodItem(foodItem){
    console.log("create executed")
    return Axios.post(`${JPA_API_URL}/FoodInfo/change/create/`, foodItem );
}

deleteFoodItem(food){
    console.log(food)
    return Axios.delete(`${JPA_API_URL}/FoodInfo/delete/${food}`)
}



}
export default  new FoodDataService()
