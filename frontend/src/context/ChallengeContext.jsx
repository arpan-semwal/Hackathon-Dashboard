import { createContext, useState, useEffect } from "react";

// Create a context for managing challenges
export const ChallengeContext = createContext();

export function ChallengeProvider({ children }) {
  // Load challenges from localStorage or initialize with an empty array
  const [challenges, setChallenges] = useState(() => {
    const savedChallenges = localStorage.getItem("challenges");
    return savedChallenges ? JSON.parse(savedChallenges) : [];
  });

  // Save challenges to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  return (
    <ChallengeContext.Provider value={{ challenges, setChallenges }}>
      {children}
    </ChallengeContext.Provider>
  );
}
