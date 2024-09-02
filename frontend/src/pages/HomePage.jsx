import CreateChallenge from "../components/CreateChallenge/CreateChallenge";
 
import Details from "../components/Details/Details";
import Navbar from "../components/Navbar/Navbar";

 

export default function HomePage() {
  return (
	<div>
	  <Navbar/>
	  <CreateChallenge/>
	  <Details/>
	  
	</div>
  )
}
