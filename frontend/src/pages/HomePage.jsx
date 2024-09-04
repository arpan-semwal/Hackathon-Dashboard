import { useContext, useState } from "react";
import { ChallengeContext } from "../context/ChallengeContext.jsx";
import Navbar from "../components/Navbar/Navbar";
import CreateChallenge from "../components/CreateChallenge/CreateChallenge";
import Details from "../components/Details/Details";
import Description from "../components/Description/Description";
import Search from "../components/SearchBar/Search";
import Post from "../components/Post/Post";

export default function HomePage() {
  const { challenges } = useContext(ChallengeContext);
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = (challenge) => {
    const { status = [], difficulty = [] } = filters;
    const statusMatch = status.length === 0 || status.includes(challenge.status);
    const difficultyMatch = difficulty.length === 0 || difficulty.includes(challenge.difficulty);
    return statusMatch && difficultyMatch;
  };

  const filteredChallenges = challenges.filter(applyFilters);

  return (
    <div>
      <Navbar />
      <CreateChallenge />
      <Details />
      <Description />
      <Search onFilterChange={handleFilterChange} />
      <div className="challenges-container">
        {filteredChallenges.map((challenge, index) => (
          <Post key={index} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}
