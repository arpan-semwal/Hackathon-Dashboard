import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChallengePage from "./pages/ChallengePage/ChallengePage";
import { ChallengeProvider } from "./context/ChallengeContext.jsx";

export default function App() {
  return (
    <ChallengeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Challenge" element={<ChallengePage />} />
        </Routes>
      </BrowserRouter>
    </ChallengeProvider>
  );
}