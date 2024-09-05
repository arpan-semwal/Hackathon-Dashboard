import { useLocation } from 'react-router-dom';
import "./ListPage.css";
import Navbar from "../../components/Navbar/Navbar";
import ListDetail from "../../components/ListDetail/ListDetail";
import EditAndDetail from "../../components/EditAndDelete/EditAndDetail";
import OverView from "../../components/OverView/OverView";

export default function ListPage() {
  const location = useLocation();
  const { challenge } = location.state || {}; // Retrieve challenge data from location.state

  return (
    <div>
      <Navbar />
      <ListDetail challenge={challenge} /> {/* Pass challenge data */}
      <EditAndDetail challenge={challenge} /> {/* Pass challenge data */}
      <OverView challenge={challenge} /> {/* Pass challenge data */}
    </div>
  );
}
