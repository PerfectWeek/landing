import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Faq extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="faq">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <div className="title-icon">
                                        <i className="mdi mdi-comment-question-outline"></i>
                                    </div>
                                    <h3 className="section-title pt-5">FAQ</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-6 faq-side">
                                <div className="faq pt-5">
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Pourquoi Perfect Week?</h3>
                                        <p className="faq-sub-title text-muted pt-2">Notre objectif principal est de vous créer l'emploi du temps parfait, pour que vous passiez une semaine parfaite.</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Comment mettre en avant mon événement ?</h3>
                                        <p className="faq-sub-title text-muted pt-2">Il sera bientot possible de devenir partenaire pour pouvoir promouvoir votre événement et recevoir plus d'informations sur son activité sur la plateforme</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 faq-side "> 
                                <div className="faq pt-5">
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Quelle difference entre Flash et Perfect Week ?</h3>
                                        <p className="faq-sub-title text-muted pt-2">Flash vous permet de tester rapidement notre moteur de recommendation, et si vous le souhaitez, vous pouvez passer à l'étape supérieure en utilisant Perfect Week</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <div className="faq-ans">
                                        <h3 className="faq-title"><i className="mdi mdi-help-circle"></i> Pourquoi devrais-je passer sur Perfect Week ?</h3>
                                        <p className="faq-sub-title text-muted pt-2">Vous pouvez toujours utiliser vos calendriers comme Google Calendar, Perfect Week se chargera de tout synchroniser !</p>
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

export default Faq;   
