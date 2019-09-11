import React , {Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import Modal from "react-responsive-modal";

class Start extends Component{
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    componentDidMount() {
        if(this.props.islight === true)
        {
            this.props.UpdateLight();
        }
    }

    render(){
        const { open } = this.state;

        var mystyle1 = {
            opacity : "0.8"
        }
        var modal_style = {
            backgroundColor: "black"
        }


        return(
            <AUX>
                <section className="section" id="beta" style={{marginTop: '5%'}}>
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-test-tube text-custom"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Nous sommes en Beta !</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-desktop-mac text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Tester l'Application Web</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cellphone-iphone text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Tester l'Application Mobile</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-weather-lightning text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Tester Flash</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </AUX>
        );
    }
}



const mapStatetoProps = state => {
    return {
        islight: state.ui_red.islight
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLight: () => dispatch({ type: actionTypes.ISLIGHT, value: true })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Start);

