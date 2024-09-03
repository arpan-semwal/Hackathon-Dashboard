import './Description.css';
import icon1 from '../../assets/assets/icons/carbon_notebook-reference.svg'; // Replace with your actual icon path
import icon2 from '../../assets/assets/icons/Vector.svg'; // Replace with your actual icon path
import icon3 from '../../assets/assets/icons/Robot.svg';
import icon4 from '../../assets/assets/icons/IdentificationCard.svg';

export default function Description() {
  return (
    <div className="description-container">
      <div className="inner-wrapper">
        <h2 className="title">
          Why Participate in <span className="highlight">AI Challenges</span>?
        </h2>
        <div className="inner-container">
          <div className="card">
            <img src={icon1} alt="Icon 1" className="details-icon" />
            <div className="card-info">
              <div className="heading">Prove your skills</div>
              <div className="paragraph">
                Gain substantial experience by solving real-world problems and pit against others to come up with innovative solutions.
              </div>
            </div>
          </div>
          <div className="card">
            <img src={icon2} alt="Icon 2" className="details-icon" />
            <div className="card-info">
              <div className="heading">Learn from community</div>
              <div className="paragraph">
                One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them.
              </div>
            </div>
          </div>
          <div className="card">
            <img src={icon3} alt="Icon 3" className="details-icon" />
            <div className="card-info">
              <div className="heading">Challenge yourself</div>
              <div className="paragraph">
                There is nothing for you to lose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder.
              </div>
            </div>
          </div>
          <div className="card">
            <img src={icon4} alt="Icon 4" className="details-icon" />
            <div className="card-info">
              <div className="heading">Earn recognition</div>
              <div className="paragraph">
			  You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
