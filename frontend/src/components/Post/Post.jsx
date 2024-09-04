import "./Post.css";


export default function Post({ challenge }) {
	console.log("Rendering Post with challenge:", challenge);
  
	return (
	  <div className="post-card">
		<h2>{challenge.challengeName}</h2>
		<p>{challenge.description}</p>
		<p>Level: {challenge.level}</p>
		<p>Start Date: {challenge.startDate}</p>
		<p>End Date: {challenge.endDate}</p>
	  </div>
	);
  }
  