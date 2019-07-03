import React, {Component} from "react";
import Link from 'next/link';

export default class LangMenu extends Component{
    constructor() {
        super();
    }

    render() {
        return <div className={"lang-menu d-flex flex-row " + this.props.className}>
            <Link href={"/"}>
                <a className={"color-gold align-self-center"}>ENG
                </a>
            </Link>
            <div className={"color-idle align-self-center"}>|</div>
            <Link href={"/"}>
                <a className={"active-gold align-self-center"}>中文
                </a>
            </Link>
        </div>
    }
}