import React from "react"
import { Link } from "gatsby"
import {FaGithub, FaFacebook, FaLinkedin, FaSteam} from 'react-icons/fa';

require('../scss/main.scss');
//<Link to="/contact/">Contact</Link>

export default () => <div className="_main_wrapper">

    <div className="_center_box">
        <div className="_avatar" />
        <h1 className="_main_title">Joe Gandy <span>Web Developer</span></h1>
        <ul className="_icons">
            <li>
                <a href="https://www.facebook.com/ijoegandy" target="_blank">
                    <FaFacebook size={"2em"}/>
                </a>
            </li>
            <li>
                <a href="https://github.com/JoeGandy" target="_blank">
                    <FaGithub size={"2em"}/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/joegandy" target="_blank">
                    <FaLinkedin size={"2em"}/>
                </a>
            </li>
            <li>
                <a href="https://steamcommunity.com/id/joegandy1" target="_blank">
                    <FaSteam size={"2em"}/>
                </a>
            </li>
        </ul>
    </div>
</div>
