import React, { Component } from 'react';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faBars,
	faChevronUp,
	faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import {
	faInstagram,
	faFacebookSquare,
	faTelegram,
	faMedium,
	faTwitterSquare,
	faGithubAlt,
	faWeixin
} from '@fortawesome/free-brands-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons/faSortDown';

library.add(faBars);
library.add(faChevronUp);
library.add(faChevronDown);
library.add(faInstagram);
library.add(faFacebookSquare);
library.add(faTelegram);
library.add(faMedium);
library.add(faTwitterSquare);
library.add(faGithubAlt);
library.add(faWeixin);
library.add(faSortDown);

import Header from './Header';
import Footer from './Footer';
import Popup from './PopUp';
import { SITE_TITLE } from '../environment';

export default class Layout extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className={'d-flex flex-column flex-grow-1 theme-1'}>
				<Head>
					<meta charSet="utf-8" />
					<title>{SITE_TITLE}</title>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					{this.props.forceFullsize ? (
						<link
							rel="stylesheet"
							href="/static/styles/force-fullsize.css"
						/>
					) : (
						''
					)}
					<link rel="stylesheet" href="/static/styles/app.css" />
				</Head>
				<Popup />
				{this.props.Header === false ? this.props.Header : <Header />}
				{this.props.children}
				{this.props.Footer === false ? this.props.Footer : <Footer />}
			</div>
		);
	}
}
