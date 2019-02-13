import React from "react"
import { Link } from "gatsby"
import {FaGithub, FaFacebook, FaLinkedin, FaSteam} from 'react-icons/fa';
import {Helmet} from "react-helmet";

require('../scss/main.scss');
//<Link to="/contact/">Contact</Link>

export default () => <div className="_main_wrapper">
    <Helmet      
        title="Joe Gandy - Web Developer"
      >
        <meta charSet="utf-8" />
        <meta name="description" content="Joe Gandy a web developer from derby specialising in backend apis, drupal with front end work with react and gatsby" />
        <meta name="keywords" content="drupal, react, developer, web, php, derby" />
        <html lang="en" />
    </Helmet>
    <div className="_center_box">
        <div className="_avatar" />
        <h1 className="_main_title">Joe Gandy <span>Web Developer</span></h1>
        <ul className="_icons">
            <li>
                <a href="https://www.facebook.com/ijoegandy" target="_blank" title="facebook" rel="noopener">
                    <FaFacebook size={"2em"}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/JoeGandy" target="_blank" title="github" rel="noopener">
                    <FaGithub size={"2em"}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/joegandy" target="_blank" title="linkedin" rel="noopener">
                    <FaLinkedin size={"2em"}/>
                </a>
            </li>
            <li>
                <a href="https://steamcommunity.com/id/joegandy1" target="_blank" title="steam" rel="noopener">
                    <FaSteam size={"2em"}/>
                </a>
            </li>
        </ul>
    </div>
</div>
