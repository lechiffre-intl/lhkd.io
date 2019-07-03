import Layout from "../../components/Layout";
import Link from 'next/link';

export default class IndividualForm extends React.Component{
    constructor() {
        super();
    }

    render() {
        return <Layout Footer={false} forceFullsize={true}>
            <div className="IndividualForm bg-black use-form flex-grow-1">
                <div className="container d-flex flex-column align-items-center">
                    <div className={"mb-4"}>
                        <h1 className={"use-form--title text-center color-gold"}>CREATE ACCOUNT</h1>
                        <hr className={"use-form--separator"}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center pt-lg-0 pb-5"}>
                        <p className={"use-form-instruction text-center color-white instruction mb-5"}>Fill in your details</p>
                        <form className={"d-flex flex-column"}>
                            <div className={"row d-inline-block d-lg-flex"}>
                                <div className="col-lg-4 pr-2">
                                    <input className={"border-gold align-self-center"} type="text" placeholder={"*First Name"}/>
                                </div>
                                <div className="col-lg-4 pr-2">
                                    <input className={"border-gold align-self-center"} type="text" placeholder={"Middle Name"}/>
                                </div>
                                <div className="col-lg-4">
                                    <input className={"border-gold align-self-center"} type="text" placeholder={"*Last Name"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input className={"border-gold align-self-center"} type="email" placeholder={"*Email Address"}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <input className={"border-gold align-self-center"} type="password" placeholder={"*Password (at least 10 characters)"}/>
                                </div>
                            </div>
                            <div className={"d-flex flex-column-reverse flex-lg-row justify-content-center"}>
                                <Link href={"/create-account/check-country"}>
                                    <a  className={"use-form--previous button-cta button-cta--secondary d-block align-self-center text-center mr-lg-2"} href="/create-account/check-country">PREVIOUS
                                    </a>
                                </Link>
                                <Link href={"/create-account/thank-you"}>
                                    <input className={"use-form--next button-cta align-self-center"} type="submit" value={"NEXT"}/>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    }
}