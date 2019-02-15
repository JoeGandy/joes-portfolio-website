import React from "react"
import {FaGithub, FaFacebook, FaLinkedin, FaSteam, FaFileAlt} from 'react-icons/fa';
import {Helmet} from "react-helmet";
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';

require('../scss/main.scss');

// Allows us to map strings from prismic to react components
const FaComponent = {
    "FaFacebook": FaFacebook,
    "FaGithub": FaGithub,
    "FaLinkedin": FaLinkedin,
    "FaSteam": FaSteam,
    "FaFileAlt": FaFileAlt
};

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            homePageData: null
        };

        //Query prismic and pull our homepage data.
        this.buildContext().then((prismicCtx) => {
            prismicCtx.api.query(
                Prismic.Predicates.at('document.type', 'homepage'),
                {orderings: '[my.homepage.date desc]'}
            ).then(response => {
                this.setState({homePageData: response.results[0]})
            });
        }).catch((e) => {
            console.error(`Cannot contact the API, check your prismic configuration:\n${e}`);
        });
    }

    render() {
        //Setup our data for a nice render
        let data = this.state.homePageData ? this.state.homePageData.data : null;
        let prismic_title = data ? data.main_header[0].text : "Joe Gandy";
        let prismic_tagline = data ? data.tag_line[0].text : "Web Developer";
        let prismic_links = data ? data.main_links : [];

        return <div className="_main_wrapper">
            <Helmet title={prismic_title + " - " + prismic_tagline}>
                <meta charSet="utf-8"/>
                <meta name="description"
                      content="Joe Gandy a web developer from derby specialising in backend apis, drupal with front end work with react and gatsby"/>
                <meta name="keywords" content="drupal, react, developer, web, php, derby"/>
                <html lang="en"/>
            </Helmet>
            <div className="_center_box">
                <div className="_avatar"/>
                <h1 className="_main_title">{prismic_title} <span>{prismic_tagline}</span></h1>
                <ul className="_icons">
                    {prismic_links.map(function (link, i) {
                        let Tag = FaComponent[link.item_icon];
                        return <li key={i}>
                            <a href={link.item_link.url} target={"_blank"} title={link.item_text[0].text}
                               rel={"noopener"}>
                                <Tag size={"2em"}/>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    }

    buildContext() {
        const accessToken = PrismicConfig.accessToken;
        return Prismic.api(PrismicConfig.apiEndpoint, {accessToken}).then(api => ({
            api,
            endpoint: PrismicConfig.apiEndpoint,
            accessToken,
            linkResolver: PrismicConfig.linkResolver
        }));
    }
}