import Navbar from "../../components/Navbar/Navbar";
import "./ChallengePage.css";
import { useState } from "react";
import uploadIcon from "../../assets/assets/icons/bxs_cloud-upload.svg"

export default function ChallengePage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [level, setLevel] = useState("Easy");

  return (
    <div className="challenge-page">
      <Navbar className="navbar" />

      <div className="challenge-details">
        <h2>Challenge Details</h2>
      </div>

      <div className="challenge-info">
        <p>Challenge Name</p>
        <input type="text" />
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
        <textarea className="description-input" rows="5"></textarea>
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
        <button>Create Challenge</button>
      </div>
    </div>
  );
}
