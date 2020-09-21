import React ,{Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDraw';

class Layout extends Component{

    state ={
        showSideDraw : true
    }
    sideDrawerCloseHandler=()=>{
        this.setState({showSideDraw : false})
    }
    sideDrawerToggleHandler=()=>{
        this.setState((prevState)=>{
            return { showSideDraw : !prevState.showSideDraw };
            });
        
    }
    render(){
        return (
            <Aux>
                <Toolbar toggleClicked={this.sideDrawerToggleHandler}/>
                <SideDraw 
                    open={this.state.showSideDraw} 
                    closed ={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
            
        );
    }
} 

export default Layout;