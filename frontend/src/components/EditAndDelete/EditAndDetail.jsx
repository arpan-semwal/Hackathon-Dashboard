/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChallengeContext } from "../../context/ChallengeContext.jsx";
import "./EditAndDelete.css";

export default function EditAndDetail({ challenge }) {
  const { setChallenges } = useContext(ChallengeContext);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/challenge', { state: { challenge } });
  };

  const handleDeleteClick = () => {
    setChallenges(prevChallenges =>
      prevChallenges.filter(c => c.challengeName !== challenge.challengeName)
    );
    navigate('/'); // Navigate to homepage after deleting
  };

  return (
    <div className="edit">
      <div className="title">Overview</div>
      <div className="actions">
        <button className="edit-button" onClick={handleEditClick}>Edit</button>
        <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}
