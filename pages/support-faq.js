import React, {Component} from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class SupportFaq extends Component{
    constructor() {
        super();

        this.state = {
            list: this.getContentList()
        };

        this.toggleContent = this.toggleContent.bind(this);
    }

    toggleContent(e) {
        e.currentTarget.classList.toggle('active');
    }

    render() {
        return <Layout>
            <div className="SupportFaq bg-black d-flex flex-column">
                <div className={"container d-flex flex-column pb-5"}>
                    <div>
                        <h1 className={"page--title text-center color-gold"}>SUPPORT
                        </h1>
                        <hr className={"page--title-separator"}/>
                    </div>
                    <div className={"pr-5 pl-5"}>
                        {this.state.list.map((group, groupKey) => <div key={groupKey} className={"color-white mt-5 mb-5"}>
                            <h2 className={"color-gold d-inline-block pt-2 pt-lg-4 pb-2 mb-4"}>{group.title}</h2>

                            {group.contents.map((content, contentKey) => <div key={contentKey} className={"group-content mt-2 mb-4 pb-2"}>
                                <div className={"d-flex flex-row"} onClick={this.toggleContent}>
                                    <h3 className={"color-white flex-grow-1 pr-2"}>{content.title}
                                    </h3>
                                    <div>
                                        <FontAwesomeIcon icon={"chevron-down"}/>
                                        <FontAwesomeIcon icon={"chevron-up"}/>
                                    </div>
                                </div>

                                <div>{content.body}
                                </div>
                            </div>)}
                        </div>)}
                    </div>
                </div>
            </div>
        </Layout>
    }

    /**
     *
     * @returns {Array} Array<{ groupTitle: string, contents: Array<{groupTitle: string, contents: Array<{ title: string, content: string }>}> }>
     */
    getContentList() {
        return [
            this.getGroup('ABOUT LHKD', [0, 1, 2]),
            this.getGroup('GENERAL FAQs', [0, 1, 2]),
            this.getGroup('LEGAL', [0, 1, 2])
        ];
    }

    /**
     * @param {string} groupTitle
     * @param {Array} dummyList
     * @returns {Object} {groupTitle: string, contents: Array<{ title: string, content: string }>}
     */
    getGroup(groupTitle, dummyList) {
        return {
            title: groupTitle,
            contents: dummyList.map(() => {
                return this.getContent()
            })
        };
    }

    /**
     * @returns {Object} { title: string, content: string }
     */
    getContent() {
        return {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            body: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mi eget odio porttitor feugiat. Etiam maximus ac lectus et lobortis. In hac habitasse platea dictumst. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla sit amet fringilla ipsum.</p>
        };
    }
}