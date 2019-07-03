import React, {Component} from "react";
import Layout from "../../components/Layout";

export default class ThankYou extends Component{
    constructor() {
        super();
    }

    render() {
        return <Layout Footer={false} forceFullsize={true}>
            <div className="ThankYou bg-black flex-grow-1 d-flex flex-column justify-content-center">
                <div className="container d-flex flex-column align-items-center">
                    <div className={"mb-4"}>
                        <h1 className={"use-form--title color-gold text-center"}>THANK YOU!</h1>
                        <h2 className={"use-form--subtitle color-white text-center"}>Please Check<br/>Your Inbox</h2>
                    </div>
                    <div className={"d-flex flex-column align-items-center pt-lg-0 pt-5"}>
                        <p className={"color-white text-center"}>We sent a verification email to your registered address.<br/>
                            <br/>
                            Didn’t receive the email? Check your spam folder or click the button below if you still have not received after 10 minutes.</p>

                        <a href="#" className={"mt-5 button-cta"}>RESEND
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    }
}