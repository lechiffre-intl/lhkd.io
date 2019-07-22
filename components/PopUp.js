import React, { Component } from 'react';

class PopUp extends Component {
	constructor() {
		super();
	}

	noThankyou = e => {
		e.preventDefault();

		this.refs.newsletterPopup.remove();

		return false;
	};

	activeNewsletterPopup = () => {
		if (this.refs.newsletterPopup) {
			this.refs.newsletterPopup.classList.add('active');
		}
	};

	delayPopupValue = () => {
		setTimeout(this.activeNewsletterPopup, 2000);
	};

	render() {
		return (
			<div className={'Popup'}>
				<div
					ref={'newsletterPopup'}
					className={'section-newsletter bg-gold text-center'}
					style={{
						position: 'fixed',
						right: '0px',
						bottom: '0px',
						zIndex: 2
					}}
				>
					{this.delayPopupValue()}
					<h3>GET LHKD NOW</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec sagittis varius purus a convallis.
					</p>
					<a href="#" className={'button-cta button-cta-invert'}>
						REGISTER
					</a>
					<a
						href="#"
						onClick={this.noThankyou}
						className={'d-block button-no-thankyou mt-1 p-2'}
					>
						No, thank you
					</a>
				</div>
			</div>
		);
	}
}

export default PopUp;
