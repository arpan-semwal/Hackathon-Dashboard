/* eslint-disable react/prop-types */
import "./ListDetail.css";
import DifficultIcon from "../../assets/assets/icons/carbon_skill-level-basic.svg"
export default function ListDetail({ challenge }) {
  if (!challenge) {
    return <div>No challenge data available.</div>; // Handle case when no challenge data is passed
  }

  return (
    <div className="list-detail-container">
      {/* Start Date Section */}
      
      
      <div className="list-detail">
      <div className="start-date-badge">
        <span>Starts on {challenge.startDate} {challenge.time} (India Standard Time)</span>
      </div>

      <h1 className="challenge-name">{challenge.challengeName}</h1>
      <p className="challenge-description">{challenge.description}</p>
     
      <div className="difficult-icon">
    <p><img src={DifficultIcon} alt="Challenge Image" className="difficult" /> {challenge.level}</p>
</div>

      </div>
     
    
    </div>
  );
}