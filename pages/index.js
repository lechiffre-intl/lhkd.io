import React, {Component} from "react";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Link from 'next/link';

export default class Index extends Component {
    constructor() {
        super();
        this.state = {};
        this.load();
    }

    load() {
        /**
         * INFO CARDS
         * @type {Array<{ title: string, excerpt: string }>}
         */
        const infoCards = [];

        [0, 1, 2, 3, 4, 5].forEach((number) => {
           infoCards.push({
               title: "INVEST IN LHKD",
               excerpt: "Lorem ipsum dolor sit amet, amit consectetur adipiscing elit. Lorem ipsum dolor sit amet, amit lorem consectetur adipiscing elit."
           });
        });

        this.state.infoCards = infoCards;


        /**
         * INFO SLIDES
         * @type {Array<{ title: string, subtitle: string }>}
         */
        const infoSlides = [];

        [0, 1].forEach((number) => {
            infoSlides.push({
                title: 'REVOLUTIONIZING<br/>DIGITAL CURRENCIES',
                subtitle: 'MORE THAN A STABLE COIN'
            })
        });

        this.state.infoSlides = infoSlides;


        /**
         * WHY LHKD
         * @type {Array<{ thumbnailUrl: string, excerpt: string }>}
         */
        const whyInfos = [];

        [0, 1, 2].forEach(() => {
            whyInfos.push({
               thumbnailUrl: '/static/imgs/Icon_Filler_02.png',
               excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis varius purus a convallis. Suspendisse vulputate viverra posuere.'
            });
        });

        this.state.whyInfos = whyInfos;
    }

    render() {
        const settings = {
            dots: (this.state.infoSlides.length > 1),
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        };

        return <Layout>
            <div className={"Index bg-black"}>
                <div className="section-cta">
                    <div className="container d-flex flex-column justify-content-end">
                        <div className={"text-center flex-grow-1 d-flex flex-column justify-content-end section-cta--text-container"}>
                            <h1>REVOLUTIONIZING<br/>DIGITAL CURRENCIES
                            </h1>
                            <h5>MORE THAN A STABLE COIN
                            </h5>
                        </div>
                        <div className={"text-center section-cta--button-container"}>
                            <Link href="/create-account">
                                <a href="#" className={"button-cta shadow"}>GET&nbsp;LHKD</a>
                            </Link>
                        </div>
                        <div className={"text-center flex-grow-1 d-flex flex-column section-cta--button-cta-skip-container justify-content-end"}>
                            <a href="#" className={"button-cta-skip"}>
                                <img src="/static/imgs/Arrow_01.png" alt="skip icon button"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-2">
                    <div className="section-info">
                        <div className="container d-flex flex-column flex-lg-row">
                            <div className="d-flex flex-column justify-content-center">
                                <div>
                                    <h3>WHY<br/>LHKD</h3>
                                </div>
                            </div>
                            {this.state.whyInfos.map((info, key) => <div key={key.toString()} className={"info-media"}>
                                <div>
                                    <img src={info.thumbnailUrl} alt="info icon"/>
                                    <p>{info.excerpt}</p>
                                </div>
                            </div>)}
                        </div>
                    </div>

                    <div className="section-cta-2">
                        <div className="container d-flex flex-column">
                            <div>
                                <img src="/static/imgs/Logo_02.png" alt="logo"/>
                            </div>
                            <div>
                                <h4>SEAMLESS LHKD LIFECYCLE
                                </h4>
                            </div>
                            <div className={"d-flex flex-column justify-content-center"}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sagittis varius purus a convallis. Suspendisse vulputate viverra posuere. Nullam ultrices, mauris non aliquam tempus, orci erat dictum dui, quis suscipit ante lorem at tellus. Duis luctus orci vel purus rutrum, id interdum tellus vulputate.</p>
                                <div>
                                    <Link href="/create-account">
                                        <a href={"#"} className="button-cta d-none d-lg-inline-block">CREATE&nbsp;ACCOUNT
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column section-info-2">
                        <div className={"container"}>
                            <Slider {...settings}>
                                {this.state.infoSlides.map((slide, key) => <div key={key.toString()} className={"slider-item d-flex flex-column justify-content-center text-center"}>
                                    <h3 dangerouslySetInnerHTML={{ __html: slide.title }}></h3>
                                    <h4>{slide.subtitle}</h4>
                                </div>)}
                            </Slider>
                        </div>
                    </div>
                </div>

                <div className={"d-flex flex-column section-cta-3"}>
                    <div className={"container d-flex flex-column flex-md-row justify-content-around flex-wrap info-card-container"}>
                        {this.state.infoCards.map((card, key) => <Link key={key.toString()} href={"#"}>
                            <div className={"info-card"}>
                                <h5 dangerouslySetInnerHTML={{ __html: card.title }}></h5>
                                <p>{card.excerpt}</p>
                            </div>
                        </Link>)}
                    </div>
                    <div className="d-flex flex-column">
                        <div className="container d-flex flex-row justify-content-center">
                            <a href="#" className="button-cta d-inline-block">WHITEPAPER
                            </a>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column section-newsletter">
                    <div className="container d-flex flex-column flex-lg-row justify-content-center p-5">
                        <div className="d-flex flex-column mb-5 mb-lg-0 mr-lg-5">
                            <h3 className={"color-gold"}>STAY UP TO DATE!</h3>
                            <p className="color-white m-0">Subscribe to our newsletter to stay updated on the latest news and developments
                            </p>
                        </div>
                        <form className="d-flex flex-column flex-lg-row use-form">
                            <div className="d-flex flex-column justify-content-center mb-4 mb-lg-0 ml-lg-5 mr-lg-5">
                                <input className={"border-gold align-self-center m-0"} type="text" placeholder={"Your Email"}/>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <input className={"use-form--sign-in button-cta align-self-center m-0"} type="submit" value={"SUBSCRIBE"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    }
}