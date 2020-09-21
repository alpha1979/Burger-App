import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Toggle from '../SideDraw/DrawerToggle/DrawerToggle';

const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <Toggle clicked={props.toggleClicked}/>
        <Logo height="80%"/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
       
    </header>
);
export default toolbar;