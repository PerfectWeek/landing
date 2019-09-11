import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-all-inclusive text-custom"></i>
                                    </div>
                                    <h3 className="section-title pt-5">Nos Services</h3>
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
                                        <h5>Application Web</h5>
                                        <p className="pt-2 text-muted">Profitez pleinement des fonctionnalités de la plateforme grâce à l'application Web</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cellphone-iphone text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Application Mobile</h5>
                                        <p className="pt-2 text-muted">Retrouvez nos services dans tous vos deplacements grâce à notre application mobile, disponible sur iPhone et Android</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-weather-lightning text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4">
                                        <h5>Flash</h5>
                                        <p className="pt-2 text-muted">Recevez une recommendation rapidement et sans compte grâce à Flash by Perfect Week</p>
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

export default Services;   
