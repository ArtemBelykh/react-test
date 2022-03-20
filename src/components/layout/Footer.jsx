import React from "react"
import styles from "./css/Footer.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.footer_items}>
                    <div>
                        <ul className={styles.footer_list}>
                            <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Consectetur,
                                consequatur dolore esse exercitationem fugiat, id, <br/> in laboriosam maiores nulla
                                obcaecati omnis quidem quisquam quos. <br/> Aliquam deserunt eum molestias mollitia rem.
                            </p></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footer_list}>
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Feedback</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={styles.footer_list}>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy </a></li>
                        </ul>
                    </div>
                </div>

                <hr className={styles.hr_footer}/>
                <div c lassName={styles.footer_social}>
                    <div className={styles.footer_social_header}>Follow Us</div>
                    <div className={styles.footer_social_icons}>
                        <ul className={styles.footer_social_list}>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} fixedWidth/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} fixedWidth/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faYoutube} fixedWidth/></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} fixedWidth/></a></li>
                        </ul>
                    </div>
                </div>
                <hr className={styles.hr_footer}/>
            </div>
        </footer>
    )
}

export default Footer