import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features" style={{backgroundColor: '#f8f9fa'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="title-icon">
                                <i className="mdi mdi-note-multiple-outline"></i>
                            </div>
                            <h3 className="section-title pt-5">Nos Fonctionnalités</h3>
                            <p className="section-subtitle text-dark pt-3">Nous repensons l'utilisation de l'agenda</p>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-2.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-contacts text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Un calendrier par groupe</h5>
                                    <p className="pt-2">Organisez les événements de votre groupe d'amis grâce au calendrier dedié à chaque groupe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-chart-bubble text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Synchronisation</h5>
                                    <p className="pt-2">Connectez votre calendrier Google ou votre compte Facebook pour facilement prendre en compte les événements de ces plateformes. Perfect Week se chargera ensuite de vous proposer des événements qui ne chevauchent pas votre emploi du temps existant !</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4">
                            <img src="images/service-3.png" alt="" className="img-fluid rounded" />
                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/service-1.png" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                <div className="features-icon">
                                    <i className="mdi mdi-select-all text-custom"></i>
                                </div>
                                <div className="features-desc">
                                    <h5>Recommendations</h5>
                                    <p className="pt-2">Grâce à nos algorithmes de recommendations, nous pouvons vous conseiller plus efficacement pour vos futures experiences. Vous n'avez plus à rejoindre des centaines de newsletter pour trouver les meilleures soirées.</p>
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

export default Features;   
