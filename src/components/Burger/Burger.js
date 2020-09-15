import React from 'react';
import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const Burger = (props) => {
    let transformIngridients = Object.keys(props.ingredients).map(igKey =>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngridient key ={igKey + i} type ={igKey} /> ;
        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformIngridients.length === 0){
        transformIngridients = <p>Please start adding the ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top" />
            {transformIngridients}
            <BurgerIngridient type="bread-bottom" />
        </div>
    );
}

export default Burger;             