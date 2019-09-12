import React , {Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Faq from '../Sections/Faq';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import Footer from '../../../components/Footer/Footer';

class HomeSix extends Component{
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
                <section className="home-fullscreen" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 text-center text-white">
                                        <h1 className="mt-5 pt-5 home-title" style={{color: '#2c2c2c'}}>Votre assistant d'agenda intelligent</h1>
                                        <p className="home-subtitle mx-auto pt-2" style={{color: '#2c2c2c'}}>Perfect Week vous fera gagner du temps sur l'organisation de vos événements</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Services />
                <Features />
                <section className="section" id="beta">
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
                                <a href='https://app.perfect-week.pw'>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <i className="mdi mdi-desktop-mac text-custom"></i>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Tester l'Application Web</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href='https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40pierresaid/perfectweek-4971735e162e4a649e0a8e2c579e35b2-signed.apk'>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <i className="mdi mdi-cellphone-iphone text-custom"></i>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Tester l'Application Mobile</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href='https://flash.perfect-week.pw'>
                                    <div className="service-box text-center p-4 mt-3">
                                        <div className="service-icon">
                                            <i className="mdi mdi-weather-lightning text-custom"></i>
                                        </div>
                                        <div className="service-desc pt-4">
                                            <h5>Tester Flash</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Faq />
                <Footer />
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

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeSix);

