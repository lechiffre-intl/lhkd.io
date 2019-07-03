import React, {Component} from "react";
import Link from 'next/link';

import menuList from './menuList.js';

export default class WebMenu extends Component{
    constructor() {
        super();

        this.state = {
            menuList,
            toggle: true
        };
    }

    toggle() {
        this.setState((state, props) => {
            console.log(['toggle', state.toggle]);

            return {
                toggle: !state.toggle
            }
        });
    }

    render() {
        let classNames = "horizontal-menu flex-column flex-lg-row flex-grow-1 ";

        classNames += (this.state.toggle ? "d-none d-lg-flex " : "d-flex ");

        if( this.props.className ) {
            classNames += this.props.className;
        }

        return <div id={this.props.id} style={this.props.style} className={classNames}>
            {this.state.menuList.map((menu, key) => <Link key={key.toString()} href={menu.link}>
                <a className={"color-white active-gold color-lg-gold active-lg-white"}>{menu.label}
                </a>
            </Link>)}
        </div>
    }
}