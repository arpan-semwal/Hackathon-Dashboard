 
import { Link } from '@mui/material';
import './CreateChallenge.css';
import RightImage from '../../assets/assets/icons/PicsArt_04-14-04.42 1.svg'; // Update path if necessary

export default function CreateChallenge() {
  return (
    <div className="challenge">
      <div className="left">
        <div className="left-text">
          <h1>Accelerate Innovation with Global AI Challenges</h1>
          <h3>
            AI Challenges at DPhi simulate real-world problems. It is a great place to put your AI/Data Science skills to test on diverse datasets allowing you to foster learning through competitions.
          </h3>
          <div className="btn-1">
            <Link href="/Challenge" underline="none">Create Challenge</Link>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={RightImage} alt="Challenge Image" className="right-image" />
      </div>
    </div>
  );
}
