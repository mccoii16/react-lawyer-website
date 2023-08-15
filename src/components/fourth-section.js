import "./fourth-section.css";
import background from "./assets/services/4.jpg";

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="left">
        <img src={background} alt="" />
      </div>
      <div className="right">
        <p>EXPERIENCES</p>
        <h1>Let Our Experience be Your Guide</h1>
        <div className="right-lists">
          <button>Our Attorneys</button>
          <button>Our Experiences</button>
          <button>Our Firms</button>
        </div>
        <span>
          Consequat occaecat ullamco amet non eiusmod nostrud dolore irure
          incididunt est duis anim sunt officia. Fugiat velit proident aliquip
          nisi incididunt nostrud exercitation proident est nisi. Irure magna
          elit commodo anim ex veniam culpa eiusmod id nostrud sit cupidatat in
          veniam ad. Eiusmod consequat eu adipisicing minim anim aliquip
          cupidatat culpa excepteur quis. Occaecat sit eu exercitation irure
          Lorem incididunt nostrud.
        </span>
      </div>
    </div>
  );
};

export default FourthSection;
