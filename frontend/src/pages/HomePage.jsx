import { useContext, useState, useEffect } from "react";
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
  const [challengesWithStatus, setChallengesWithStatus] = useState([]);

  useEffect(() => {
    const updatedChallenges = challenges.map((challenge) => {
      const currentTime = new Date();
      const startDate = new Date(challenge.startDate);
      const endDate = new Date(challenge.endDate);

      let status = '';

      if (currentTime < startDate) {
        status = 'Upcoming';
      } else if (currentTime >= startDate && currentTime <= endDate) {
        status = 'Active';
      } else {
        status = 'Past';
      }

      return {
        ...challenge,
        status, // Include status in each challenge
      };
    });

    setChallengesWithStatus(updatedChallenges);
  }, [challenges]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const applyFilters = (challenge) => {
    const { Active, Upcoming, Past, Easy, Medium, Hard } = filters;
    
    // Determine if challenge status matches selected filters
    const statusMatch = (Active && challenge.status === 'Active') ||
                        (Upcoming && challenge.status === 'Upcoming') ||
                        (Past && challenge.status === 'Past') ||
                        (!Active && !Upcoming && !Past); // No status filters selected

    // Determine if challenge difficulty matches selected filters
    const difficultyMatch = (Easy && challenge.level === 'Easy') ||
                            (Medium && challenge.level === 'Medium') ||
                            (Hard && challenge.level === 'Hard') ||
                            (!Easy && !Medium && !Hard); // No difficulty filters selected

    return statusMatch && difficultyMatch;
  };

  const filteredChallenges = challengesWithStatus.filter(applyFilters);

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
