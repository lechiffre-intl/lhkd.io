import React, { Component } from 'react';
import LangMenu from './LangMenu.js';
import WebMenu from './WebMenu.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="Footer" onMouseEnter={this.activeNewsletterPopup}>
				<div className="container d-flex flex-column">
					<WebMenu className={'divider-gold-2'} />
					<div className="d-block d-lg-none">
						<LangMenu className={'justify-content-center'} />
					</div>
					<div className="d-flex flex-column flex-lg-row bt-md-1-white pt-5">
						<div className="d-flex flex-column pb-5">
							<div className="contact-info d-flex flex-column flex-lg-row flex-wrap">
								<div
									className={
										'pr-0 pr-lg-5 d-flex flex-column'
									}
								>
									<h6 className="color-gold">LEGAL</h6>
									<p className={'mt-2 mt-lg-0'}>
										<a className={'color-white'} href="#">
											Privacy Policy
										</a>
									</p>
									<p>
										<a className={'color-white'} href="#">
											Privacy Terms of Use
										</a>
									</p>
									<p>
										<a className={'color-white'} href="#">
											Regulatory Compliance
										</a>
									</p>
									<p>
										<a className={'color-white'} href="#">
											Media Contact
										</a>
									</p>
								</div>
								<div className={'pr-0 pr-lg-5'}>
									<h6 className="color-gold">ADDRESS</h6>
									<p className={'color-white'}>
										Unit 3309, 33/F, The Center,
										<br />
										99 Queen's Road Central,
										<br />
										Hong Kong
									</p>
								</div>
								<div className={'pr-0 pr-lg-5'}>
									<h6 className="color-gold">FOLLOW US!</h6>
									<div
										className={
											'd-flex flex-row justify-content-center justify-content-lg-start p-md-0 pr-5 pl-5'
										}
									>
										<a
											href="#"
											className={
												'mr-3 mr-lg-3 active-white'
											}
										>
											<FontAwesomeIcon
												size="1x"
												icon={[
													'fab',
													'facebook-square'
												]}
											/>
										</a>
										<a
											href="#"
											className={
												'mr-3 mr-lg-3 active-white'
											}
										>
											<FontAwesomeIcon
												size="1x"
												icon={['fab', 'medium']}
											/>
										</a>
										<a
											href="#"
											className={
												'mr-3 mr-lg-3 active-white'
											}
										>
											<FontAwesomeIcon
												size="1x"
												icon={['fab', 'twitter-square']}
											/>
										</a>
										<a
											href="#"
											className={
												'mr-3 mr-lg-3 active-white'
											}
										>
											<FontAwesomeIcon
												size="1x"
												icon={['fab', 'github-alt']}
											/>
										</a>
										<a
											href="#"
											className={
												'mr-3 mr-lg-3 active-white'
											}
										>
											<FontAwesomeIcon
												size="1x"
												icon={['fab', 'weixin']}
											/>
										</a>
										<a
											href="#"
											className={
												'mr-3 mr-lg-3 active-white'
											}
										>
											<FontAwesomeIcon
												size="1x"
												icon={['fab', 'telegram']}
											/>
										</a>
										<a href="#" className={'active-white'}>
											<FontAwesomeIcon
												size="1x"
												icon={['fab', 'instagram']}
											/>
										</a>
									</div>
								</div>
								<div className={'pr-0 pr-lg-5'}>
									<h6 className="color-gold">SUPPORT</h6>
									<p className={'color-white'}>
										support@lhkd.io
									</p>
								</div>
							</div>
						</div>
						<div className="d-none d-lg-block flex-grow-1" />
					</div>
				</div>
			</div>
		);
	}
}
