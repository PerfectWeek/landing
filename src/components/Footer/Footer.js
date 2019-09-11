import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Footer extends Component{

    constructor(){
        super();
        this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);

    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value === '')
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value))
          this.setState({email_err: ''});
        else
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '')
            this.setState({name_err: 'Required Field'});
          else
            this.setState({name_err: ''});
      }
      handleChangeSubject(e){
        this.setState({subject:  e.target.value});
          if(e.target.value === '')
            this.setState({subject_err: 'Required Field'});
          else
            this.setState({subject_err: ''});
      }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '')
            this.setState({message_err: 'Required Field'});
          else
            this.setState({message_err: ''});
      }

      handleSubmit1()
      {
          if(this.state.name === '')
              this.setState({name_err: 'Required Field'});
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
                this.setState({return_msg: 'Success.', flag: true});
             }
      }

    render(){
        return(
            <AUX>
                <section className="pt-5 bg-dark" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-white footer-alt">
                                <div className="float-left">
                                    <p className="copyright-desc pb-0">2019 © Perfect Week. All Rights Reserved</p>
                                </div>
                                <div className="float-right">
                                    <ul className="list-inline social pb-0">
                                        <li className="list-inline-item pl-2"><a href="https://www.facebook.com/PrfctWeek/" className="text-white"><i className="mdi mdi-facebook"></i></a></li>
                                        <li className="list-inline-item pl-2"><a href="https://twitter.com/WeekPerfect" className="text-white"><i className="mdi mdi-twitter"></i></a></li>
                                    </ul>
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

export default Footer;
