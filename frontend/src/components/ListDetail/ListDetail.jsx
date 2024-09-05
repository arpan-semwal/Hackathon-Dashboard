/* eslint-disable react/prop-types */
import "./ListDetail.css";

export default function ListDetail({ challenge }) {
  return (
    <div className="list-container">
      {challenge ? (
        <div className="challenge-details">
          <h2 className="challenge-name">{challenge.challengeName}</h2>
          <div className="start-date-box">
            Start Date: {new Date(challenge.startDate).toLocaleDateString()}
          </div>
          <p className="challenge-end-date">End Date: {new Date(challenge.endDate).toLocaleDateString()}</p>
        </div>
      ) : (
        <p className="no-details">No challenge details available.</p>
      )}
    </div>
  );
}
