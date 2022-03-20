import React, {Component} from "react";
import cloud from "./css/cloud.module.css"
import {faCloud} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export default class Cloud extends Component {
    render() {
        return (
            <section className={cloud.section_cloud}>
                <div className={cloud.container_cloud}>
                    <div className={cloud.item_cloud}>
                        <div><span><FontAwesomeIcon icon={faCloud} fixedWidth /></span><Link to="/download">Node.js</Link></div>
                        <div>File size</div>
                        <div>Date public</div>
                    </div>
                    <div className={cloud.item_cloud}>
                        <div><span><FontAwesomeIcon icon={faCloud} fixedWidth /></span><Link to="/download">Node.js</Link></div>
                        <div>File size</div>
                        <div>Date public</div>
                    </div>
                    <div className={cloud.item_cloud}>
                        <div><span><FontAwesomeIcon icon={faCloud} fixedWidth /></span><Link to="/download">Node.js</Link></div>
                        <div>File size</div>
                        <div>Date public</div>
                    </div>
                    <div className={cloud.item_cloud}>
                        <div><span><FontAwesomeIcon icon={faCloud} fixedWidth /></span><Link to="/download">Node.js</Link></div>
                        <div>File size</div>
                        <div>Date public</div>
                    </div>
                    <div className={cloud.item_cloud}>
                        <div><span><FontAwesomeIcon icon={faCloud} fixedWidth /></span><Link to="/download">Node.js</Link></div>
                        <div>File size</div>
                        <div>Date public</div>
                    </div>

                </div>
            </section>

        )
    }
}