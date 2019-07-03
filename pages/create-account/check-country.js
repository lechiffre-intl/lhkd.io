import React, {Component} from "react";
import Layout from "../../components/Layout";
import Link from 'next/link';
import countries from "../../data/countries";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class CheckCountry extends Component{
    constructor() {
        super();

        this.state = {
            countries
        };
    }

    render() {
        return <Layout Footer={false} forceFullsize={true}>
            <div className="CheckCountry bg-black use-form flex-grow-1 d-lg-flex flex-lg-column justify-content-lg-center">
                <div className="container d-flex flex-column align-items-center">
                    <div className={"mb-4"}>
                        <h1 className={"use-form--title text-center color-gold"}>CREATE ACCOUNT</h1>
                        <hr className={"use-form--separator"}/>
                    </div>
                    <div className={"d-flex flex-column align-items-center pt-lg-0 pb-5"}>
                        <p className={"use-form--instruction text-center color-white"}>Is Le Chiffre Token available in your area?</p>
                        <form className={"d-flex flex-column align-items-center"}>
                            <div>
                                <select className={"border-gold align-self-center"}>
                                    <option value="">Your Country</option>
                                    {this.state.countries.data.map((c, i) => <option key={i} value={c.name}>{c.name}
                                    </option>)}
                                </select>
                                <FontAwesomeIcon icon={"sort-down"} color={"#939598"} className={"no-event align-self-center"} style={{marginLeft: "-20px"}}/>
                            </div>
                            <div className={"d-flex flex-column-reverse flex-lg-row justify-content-center"}>
                                <Link href={"/create-account"}>
                                    <a  className={"use-form--previous button-cta button-cta--secondary d-block align-self-center text-center mr-lg-2"} href="#">PREVIOUS
                                    </a>
                                </Link>
                                <Link href={"/create-account/individual-form"}>
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