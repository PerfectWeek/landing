import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import TopBar from '../Topbar/Topbar';
import Header from '../Header/Header';
import HeaderLight from '../Header/HeaderLight';
import TopbarLight from '../Header/TopbarLight';

class Layout extends Component{

    render(){
        return(
            <AUX>
                <main>
                    <Header/>
                    {this.props.children}
                </main>
            </AUX>
        );
    }
}

export default Layout;   
