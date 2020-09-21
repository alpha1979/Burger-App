import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSumarry=(props)=>{
    const ingredientSumarry = Object.keys(props.ingredients).map(
        (igKey =>{
            return (<li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>)
        })
    );
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A deliciour burger with the following ingredients:</p>
            <ul>
               {ingredientSumarry}
            </ul>
            <p>Continuee to checkout</p>
            <p><srong>Total price:{props.price.toFixed(2)}</srong></p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>
                CONTINUE
            </Button>
        </Aux>
    )
};

export default orderSumarry;