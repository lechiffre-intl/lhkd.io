import React, {Component} from "react";
import Layout from "../../components/Layout";
import Router from 'next/router';
import Link from "next/link";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateAccount extends Component{
    ACCOUNT_TYPE_INDIVIDUAL = 'individual';
    ACCOUNT_TYPE_COMPANY = 'company';

    constructor() {
        super();

        this.state = {
            accountType: false,
            modal: false
        };

        this.next = this.next.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleActive(e) {
        for(let i = 0; i < e.currentTarget.parentElement.children.length; i++) {
            e.currentTarget.parentElement.children[i].classList.remove('active')
        }

        e.currentTarget.classList.toggle('active');

        this.setState({
           accountType: e.currentTarget.querySelector('input').value
        });
    }

    next(e) {
        e.preventDefault();

        if( this.state.accountType === this.ACCOUNT_TYPE_COMPANY ) {
            this.toggleModal()
        } else {
            Router.push('/create-account/check-country');
        }

    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return <Layout Footer={false} forceFullsize={true}>
            <div className="CreateAccount bg-black use-form flex-grow-1 d-lg-flex flex-lg-column justify-content-lg-center">
                <div className="container d-flex flex-column align-items-center">
                    <div className={"mb-4"}>
                        <h1 className={"use-form--title text-center color-gold"}>CREATE ACCOUNT</h1>
                        <hr className={"use-form--separator border-white"}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center pt-lg-0 pb-5"}>
                        <p className={"color-white text-center use-form--instruction mb-5 mb-lg-4"}>Would you like to open an individual account<br/>or an account for a company?</p>
                        <div className="account-options d-flex flex-column flex-lg-row">
                            <div onClick={this.toggleActive}
                                 className="p-4 b-2 mb-5 border-gold bg-black active-bg-gold d-flex flex-column align-items-center">
                                <div className={"mb-4"}>
                                    <img src="/static/imgs/Individual%20Icon_01.png" alt="icon individual"/>
                                    <img src="/static/imgs/Individual%20Icon_02.png" alt="icon individual"/>
                                </div>
                                <div className={"color-gold"}>Individual
                                </div>
                                <input type="hidden" name={"account_type"} value={this.ACCOUNT_TYPE_INDIVIDUAL}/>
                            </div>
                            <div onClick={this.toggleActive}
                                 className="p-4 b-2 mb-5 border-gold bg-black active-bg-gold d-flex flex-column align-items-center">
                                <div className={"mb-4"}>
                                    <img src="/static/imgs/Company%20Icon_01.png" alt="icon company"/>
                                    <img src="/static/imgs/Company%20Icon_02.png" alt="icon company"/>
                                </div>
                                <div className={"color-gold"}>Company
                                </div>
                                <input type="hidden" name={"account_type"} value={this.ACCOUNT_TYPE_COMPANY}/>
                            </div>
                        </div>
                        <button className="use-form--next button-cta border-gold align-self-center" onClick={this.next}>NEXT
                        </button>
                        <div className="d-flex flex-column p-3 pt-5">
                            <div>
                                <Link href={"/sign-in"}>
                                    <a className={"use-form--link d-block color-white align-self-center text-center pb-4"} href="#">Already have an account? Sign in here
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} wrapClassName={"theme-1"} modalClassName={"CreateAccount d-flex flex-column justify-content-center"} className={"b-2 border-gold align-self-center"}>
                <ModalBody className={"text-center pb-0"}>
                    <p>If you are interested in signing up on behalf of an organization, please email our support team at <a
                        href="mailto:support@lhkd.com" className={"color-white"}><strong>support@lhkd.com</strong></a></p>
                </ModalBody>
                <ModalFooter className={"d-flex flex-row justify-content-center pt-0"}>
                    <Button className={"button-cta"} color="secondary" onClick={this.toggleModal}>CLOSE</Button>
                </ModalFooter>
            </Modal>
        </Layout>
    }
}
