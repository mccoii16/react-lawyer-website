import "./footer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/logo-light.png"

const Footer = () =>{
    return(
        <div className="footer">
            <div className="left">
                <img src={logo} alt="" />
                <div className="left-lists">
                    <p><FontAwesomeIcon icon={faLocationDot}/> 08 W 36th St, New York, NY 10001</p>
                    <p><FontAwesomeIcon icon={faPhone}/> +1 333 9296</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> contact@example.com</p>
                    <p><FontAwesomeIcon icon={faFileInvoice}/> Download Brochure</p>
                </div>
            </div>
            <div className="center">
                <h6>Practice Areas</h6>
                <ul>
                    <li><a href="/#"><FontAwesomeIcon icon={faCheck}/>&nbsp; Corporate and M&A</a></li>
                    <li><a href="/#"><FontAwesomeIcon icon={faCheck}/>&nbsp; Construction and Real Estate</a></li>
                    <li><a href="/#"><FontAwesomeIcon icon={faCheck}/>&nbsp; Commercial Duspute Resolution</a></li>
                    <li><a href="/#"><FontAwesomeIcon icon={faCheck}/>&nbsp; Employment</a></li>
                    <li><a href="/#"><FontAwesomeIcon icon={faCheck}/>&nbsp; Banking and Finance</a></li>
                </ul>
            </div>
            <div className="right">
                <h6>Newsletters</h6>
                <p>Signup for our newsletter to get the latest news, updates and special offers in your inbox.</p>
                <div className="input">
                    <input type="text" placeholder="enter your email" />
                    <button>Send</button>
                </div>
                <p id="description">Your email is safe with us. We don't spam.</p>
            </div>
        </div>
    )
};

export default Footer;