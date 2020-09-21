import React from 'react';
import classes from './NavigationItems.module.css';
import Nav from './NavigationItem/NavigationItem';

const navigationItems =()=>(
   <ul className={classes.NavigationItems}>
        <Nav link="/" active>
            Burger Builder
        </Nav>
        <Nav link="/">
            CheckOut
        </Nav>
   </ul> 
    );
export default navigationItems;