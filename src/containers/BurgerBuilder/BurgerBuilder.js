import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSumarry from '../../components/Burger/OrderSumarry/OrderSumarry';

const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon:0.8,
    cheese : 0.7,
    meat:1.5
}
class BurgerBuilder extends Component{
    
    state = {
        ingredients :{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice : 4.99,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState(ingredients){
       
        const sum = Object.keys(ingredients).map(igKey =>{
            return ingredients[igKey];
        }).reduce(
            (sum,el)=>{
                return sum+el;
            }, 0);
            this.setState({purchaseable: sum >0})
    }
    purchaseHandler=()=>{
        this.setState({purchasing : true})
    }


    purcahseCancelHandler =()=>{
        this.setState({purchasing:false})
    }
    purchaseConitnueHandler =()=>{
        alert("You can continuee");
    }
    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        // console.log(oldCount);
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients : updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler =(type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        // console.log(oldCount);
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients : updatedIngredients})
        this.updatePurchaseState(updatedIngredients);
    }
    render(){
        const disabledInfo ={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purcahseCancelHandler}>
                    <OrderSumarry 
                            ingredients={this.state.ingredients}
                            price={this.state.totalPrice}
                            purchaseCancelled={this.purcahseCancelHandler}
                            purchaseContinue ={this.purchaseConitnueHandler}
                        />
                </Modal>
                <Burger ingredients ={this.state.ingredients} />
                <BuildControls 
                                ingredientAdded ={this.addIngredientHandler}
                                ingredientRemove ={this.removeIngredientHandler}
                                disabled ={disabledInfo}
                                currentPrice = {this.state.totalPrice}
                                purchaseable={this.state.purchaseable}
                                ordered ={this.purchaseHandler}
                                />
            </Aux>
        );
    }
}

export default BurgerBuilder;