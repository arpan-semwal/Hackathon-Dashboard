import { useContext } from "react";
import { ChallengeContext } from "../context/ChallengeContext.jsx";
import Navbar from "../components/Navbar/Navbar";
import CreateChallenge from "../components/CreateChallenge/CreateChallenge";
import Details from "../components/Details/Details";
import Description from "../components/Description/Description";
import Search from "../components/SearchBar/Search";
import Post from "../components/Post/Post";

export default function HomePage() {
	const { challenges } = useContext(ChallengeContext);
	console.log("Challenges in HomePage:", challenges);
	return (
		<div>
		  <Navbar />
		  <CreateChallenge />
		  <Details />
		  <Description />
		  <Search />
		  <div className="challenges-container">
			{challenges.map((challenge, index) => (
			  <Post key={index} challenge={challenge} />
			))}
		  </div>
		</div>
	  );
}
