import "./third-section.css";
import image1 from "./assets/services/1.jpg";
import image2 from "./assets/services/2.jpg";
import image3 from "./assets/services/3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

const ThirdSection = () => {
  return (
    <div className="third-section">
      <div className="top">
        <div className="left">
          <p>WELCOME</p>
          <h1>Reputation.</h1>
          <h1>Respect. Result.</h1>
        </div>
        <div className="right">
          <p>
            Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
            incididunt est duis anim sunt officia. Fugiat velit proident aliquip
            nisi incididunt nostrud exercitation proident est nisi. Irure magna
            elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat
            in veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
            cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure
            Lorem incididunt nostrud.
          </p>
        </div>
      </div>

      <div className="bottom-categories">
        <div
          className="category"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1000">
          <img src={image1} alt="" />
          <div className="overtop">
            <div className="overtop-top">
              <FontAwesomeIcon icon={faPeopleGroup} />
              <h1>Business Law</h1>
            </div>
            <div className="overtop-bot">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button>Learn more</button>
          </div>
        </div>

        <div
          className="category"
          data-aos="fade-right"
          data-aos-delay="1000"
          data-aos-duration="1000">
          <img src={image2} alt="" />
          <div className="overtop">
            <div className="overtop-top">
              <FontAwesomeIcon icon={faHouseUser} />
              <h1>Family Law</h1>
            </div>
            <div className="overtop-bot">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button>Learn more</button>
          </div>
        </div>

        <div
          className="category"
          data-aos="fade-right"
          data-aos-delay="1500"
          data-aos-duration="1000">
          <img src={image3} alt="" />
          <div className="overtop">
            <div className="overtop-top">
              <FontAwesomeIcon icon={faScaleBalanced} />
              <h1>Criminal Law</h1>
            </div>
            <div className="overtop-bot">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
