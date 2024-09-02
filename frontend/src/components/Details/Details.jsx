 
import './Details.css';
import icon1 from '../../assets/assets/icons/Group 1000002515.svg'; // Replace with your actual icon path
import icon2 from '../../assets/assets/icons/Group 1000002516.svg'; // Replace with your actual icon path
import icon3 from '../../assets/assets/icons/Group 1000002518.svg'; // Replace with your actual icon path

export default function Details() {
  return (
    <div className="details-container">
      <div className="details-row">
        <div className="details-column">
          <img src={icon1} alt="Icon 1" className="details-icon" />
          <div className="details-text">
            <p className="text-1">100K+</p>
            <p className="text-2">AI model submissions</p>
          </div>
        </div>
        <div className="details-bar"></div> {/* Separation bar */}
        <div className="details-column">
          <img src={icon2} alt="Icon 2" className="details-icon" />
          <div className="details-text">
            <p className="text-1">50K+</p>
            <p className="text-2">Data Scientists</p>
          </div>
        </div>
        <div className="details-bar"></div> {/* Separation bar */}
        <div className="details-column">
          <img src={icon3} alt="Icon 3" className="details-icon" />
          <div className="details-text">
            <p className="text-1">100+</p>
            <p className="text-2">AI Challenges hosted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
