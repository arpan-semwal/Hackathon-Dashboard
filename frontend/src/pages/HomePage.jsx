import CreateChallenge from "../components/CreateChallenge/CreateChallenge";
import Description from "../components/Description/Description";
 
import Details from "../components/Details/Details";
import Navbar from "../components/Navbar/Navbar";
import Search from "../components/SearchBar/Search";

 

export default function HomePage() {
  return (
	<div>
	  <Navbar/>
	  <CreateChallenge/>
	  <Details/>
	  <Description/>
	  <Search/>
	  
	</div>
  )
}
