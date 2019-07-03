import React, {Component} from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { loadReCaptcha, ReCaptcha } from "react-recaptcha-google"
import {EMAIL_SUPPORT, RECAPTCHA_SITE_KEY} from "../environment";
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default class SignIn extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            modal: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }

    toggleModal(e) {
        e.preventDefault();

        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    verifyCallback(recaptchaToken) {
        // Here you will get the final recaptchaToken!!!
        console.log(recaptchaToken, "<= your recaptcha token")
    }

    componentDidMount() {
        loadReCaptcha();
    }

    render() {
        return <Layout Footer={false} forceFullsize={true}>
            <div className={"Signin bg-black use-form flex-grow-1 d-flex flex-column justify-content-center pb-5"}>
                <div className="container d-flex flex-column">
                    <div>
                        <h1 className={"use-form--title text-center color-gold"}>SIGN IN</h1>
                        <hr />
                    </div>
                    <div>
                        <p className={"text-center color-white use-form-instruction"}>Your username/password is incorrect.<br/>Please try again.</p>
                        <form action="/multi-factor-auth" className={"d-flex flex-column pb-4"}>
                            <input className={"border-gold align-self-center"} type="text" placeholder={"Username/email"}/>
                            <input className={"border-gold align-self-center"} type="password" placeholder={"Password"}/>
                            <div className="align-self-center">
                                <ReCaptcha
                                    size="visible"
                                    render="explicit"
                                    sitekey={ RECAPTCHA_SITE_KEY }
                                />
                            </div>
                            <input className={"use-form--sign-in button-cta align-self-center"} type="submit" value={"SIGN IN"}/>
                        </form>
                        <a  className={"use-form--link d-block color-white align-self-center text-center pb-4"} href="#" onClick={this.toggleModal}>Forgot your password?
                        </a>
                        <Link href={"/create-account"}>
                            <a  className={"use-form--link d-block color-white align-self-center text-center"} href="#">Don’t have an account? Sign Up here
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} wrapClassName={"theme-1"} modalClassName={"Signin d-flex flex-column justify-content-center"} className={"b-2 border-gold align-self-center"}>
                <ModalBody className={"text-center pb-0"}>
                    <p>To recover your password, please contact our support team at <a
                        href={"mailto:" + EMAIL_SUPPORT} className={"color-white"}><strong>{EMAIL_SUPPORT}</strong></a></p>
                </ModalBody>
                <ModalFooter className={"d-flex flex-row justify-content-center pt-0"}>
                    <Button className={"button-cta"} color="secondary" onClick={this.toggleModal}>CLOSE</Button>
                </ModalFooter>
            </Modal>
        </Layout>
    }
}