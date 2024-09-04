import { createContext, useState, useEffect } from "react";

export const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  const [challenges, setChallenges] = useState(() => {
    const savedChallenges = localStorage.getItem("challenges");
    return savedChallenges ? JSON.parse(savedChallenges) : [];
  });

  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  return (
    <ChallengeContext.Provider value={{ challenges, setChallenges }}>
      {children}
    </ChallengeContext.Provider>
  );
}
