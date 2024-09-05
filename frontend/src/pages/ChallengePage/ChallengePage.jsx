import { useContext, useState, useRef, useEffect } from "react";
import { ChallengeContext } from "../../context/ChallengeContext.jsx";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();
  const fileInputRef = useRef(null);

  useEffect(() => {
    // Check if challenge data is passed for editing
    if (location.state && location.state.challenge) {
      const { challenge } = location.state;
      setChallengeName(challenge.challengeName);
      setStartDate(challenge.startDate);
      setEndDate(challenge.endDate);
      setLevel(challenge.level);
      setDescription(challenge.description);
      setImage(challenge.image);
    }
  }, [location.state]);

  const handleCreateOrUpdateChallenge = () => {
    const newChallenge = {
      challengeName,
      startDate,
      endDate,
      level,
      description,
      image
    };

    // If challenge exists in the context, update it; otherwise, add a new one
    setChallenges(prevChallenges => {
      if (location.state && location.state.challenge) {
        // Update existing challenge
        return prevChallenges.map(challenge =>
          challenge.challengeName === location.state.challenge.challengeName ? newChallenge : challenge
        );
      } else {
        // Add new challenge
        return [...prevChallenges, newChallenge];
      }
    });

    navigate("/");
  };

  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file); // Convert image to base64 URL
    }
  };

  return (
    <div className="challenge-page">
      <Navbar className="navbar" />

      <div className="challenge-details">
        <h2>{location.state && location.state.challenge ? "Edit Challenge" : "Create Challenge"}</h2>
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
        <button type="button" onClick={handleUploadClick}>
          Upload <img src={uploadIcon} alt="Upload Icon" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {image && <img src={image} alt="Challenge" className="uploaded-image" />}
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
        <button onClick={handleCreateOrUpdateChallenge}>
          {location.state && location.state.challenge ? "Update Challenge" : "Create Challenge"}
        </button>
      </div>
    </div>
  );
}
