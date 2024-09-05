/* eslint-disable react/prop-types */
import "./ListDetail.css";

export default function ListDetail({ challenge }) {
  if (!challenge) {
    return <div>No challenge data available.</div>; // Handle case when no challenge data is passed
  }

  return (
    <div className="list-detail-container">
         <p><strong>Start Date:</strong> {challenge.startDate}</p>
      <h1 className="challenge-name">{challenge.challengeName}</h1>
      <p className="challenge-description">{challenge.description}</p>
   
     
      <p><strong>Status:</strong> {challenge.level}</p>
    </div>
  );
}
