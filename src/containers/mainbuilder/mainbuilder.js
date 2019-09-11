import React , { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import HomeSix from '../MainContent/Pages/HomeSix';
import Start from '../MainContent/Pages/Start';

class mainbuilder extends Component{
    render(){
        return(
                <Switch>  
                    
                    <Route exact path="/" component={HomeSix} />
                    <Route exact path="/start" component={Start} />

                </Switch>
        );
    }
}

export default mainbuilder;
