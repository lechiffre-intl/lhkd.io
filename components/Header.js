import React, {Component} from "react";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LangMenu from "./LangMenu.js";
import WebMenu from "./WebMenu.js";


export default class Header extends Component{
    constructor() {
        super();

        this.toggleTopWebMenu = this.toggleTopWebMenu.bind(this);
    }

    toggleTopWebMenu() {
        this.refs.mainMenu.toggle();
    }

    render() {
        return <div className="container-fluid Header">
            <div className="container d-flex d-lg-none flex-column">
                <div className="brand d-flex flex-row">
                    <Link href={"/"}>
                        <a className={"d-flex flex-grow-1"}>
                            <img className={"align-self-center"} src="/static/imgs/LHKD_Logo_01@2x.png" alt="site logo"/>
                        </a>
                    </Link>
                    <div onClick={this.toggleTopWebMenu} className={"d-flex d-lg-none flex-column justify-content-center"}>
                        <FontAwesomeIcon icon={"bars"} size={"2x"} color={"#fff"} className={"align-self-center"}/>
                    </div>
                </div>
                <div className="d-none d-lg-flex">
                    <LangMenu/>
                </div>
                <WebMenu id={"mainMenu"} ref={"mainMenu"} className={"justify-content-end"}/>
            </div>
            <div className="container d-none d-lg-flex flex-column" style={{marginTop: "-20px"}}>
                <div className="d-flex flex-row align-self-center" style={{width: "915px"}}>
                    <Link href={"/"}>
                        <a style={{width: '0%'}} className={"d-flex flex-row justify-content-center p-3"}>
                            <img className={"align-self-center"} src="/static/imgs/LHKD_Icon_01.png" width="70px" alt="site logo"/>
                            <img className={"align-self-center"} src="/static/imgs/LHKD_text_logo_white.png" width="150px" />
                        </a>
                    </Link>
                    <div style={{width: '100%'}} className="flex-column d-flex justify-content-center">
                        <LangMenu className={"justify-content-end"}/>
                    </div>
                </div>
                <div className="d-flex flex-column flex-lg-row" style={{marginTop: "-20px"}}>
                    <WebMenu className={"divider-gold-2 divider-space-60 justify-content-center"}/>
                </div>
            </div>
        </div>
    }
}