import { useContext, useState } from "react";
import { ChallengeContext } from "../../context/ChallengeContext.jsx";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./ChallengePage.css";
import uploadIcon from "../../assets/assets/icons/bxs_cloud-upload.svg";

export default function ChallengePage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [level, setLevel] = useState("Easy");
  const [challengeName, setChallengeName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const { setChallenges } = useContext(ChallengeContext);
  const navigate = useNavigate();

  const handleCreateChallenge = () => {
    const newChallenge = {
      challengeName,
      startDate,
      endDate,
      level,
      description,
      image
    };
  
    setChallenges(prevChallenges => [...prevChallenges, newChallenge]);
  
    navigate("/");
  };
  
  

  return (
    <div className="challenge-page">
      <Navbar className="navbar" />

      <div className="challenge-details">
        <h2>Challenge Details</h2>
      </div>

      <div className="challenge-info">
        <p>Challenge Name</p>
        <input type="text" value={challengeName} onChange={(e) => setChallengeName(e.target.value)} />
        <label htmlFor="start-date">Start Date</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date">End Date</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      <div className="description">
        <p>Description</p>
        <textarea className="description-input" rows="5" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>

      <div className="image">
        <p>Image</p>
        <button>Upload <img src={uploadIcon} alt="Upload Icon" /></button>
      </div>

      <div className="level-type">
        <p>Level type</p>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="level-dropdown"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <button onClick={handleCreateChallenge}>Create Challenge</button>
      </div>
    </div>
  );
}
