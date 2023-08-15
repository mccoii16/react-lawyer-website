import "./second-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faStaffSnake } from "@fortawesome/free-solid-svg-icons";

const SecondSection = () => {
  return (
    <div className="second-section">
      <div className="services">
        <div className="service-1">
          <h1>Practice Areas</h1>
        </div>
        <div className="service-2">
          <FontAwesomeIcon icon={faPerson} />
          <h1>Labor</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem.
          </p>
        </div>
        <div className="service-2">
          <FontAwesomeIcon icon={faStaffSnake} />
          <h1>Medical Health Care</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem.
          </p>
        </div>
        <div className="service-2">
          <FontAwesomeIcon icon={faPerson} />
          <h1>Civil & Criminal</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
