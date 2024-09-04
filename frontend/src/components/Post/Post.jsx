/* eslint-disable react/prop-types */
// Post.js
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Post.css";

export default function Post({ challenge }) {
  const [status, setStatus] = useState('');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 });
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const updateCountdown = () => {
      const currentTime = new Date();
      const startDate = new Date(challenge.startDate);
      const endDate = new Date(challenge.endDate);
      let statusText = '';
      let days = 0, hours = 0, minutes = 0;

      if (currentTime < startDate) {
        statusText = 'Upcoming';
        const diff = startDate - currentTime;
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      } else if (currentTime >= startDate && currentTime <= endDate) {
        statusText = 'Active';
        const diff = endDate - currentTime;
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      } else {
        statusText = 'Past';
      }

      setStatus(statusText);
      setCountdown({ days, hours, minutes });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 60000); // Update every minute
    return () => clearInterval(intervalId);
  }, [challenge.startDate, challenge.endDate]);

  const handleParticipateClick = () => {
    navigate('/list'); // Navigate to ListPage when button is clicked
  };

  return (
    <div className="post-card">
      {challenge.image && <img src={challenge.image} alt={challenge.challengeName} className="post-image" />}
      <div className="post-content">
        <div className="status">{status}</div>
        <h2 className="challenge-name">{challenge.challengeName}</h2>
        <div className="countdown-container">
          {status !== 'Past' && (
            <div className="status">
              {status === 'Upcoming' ? 'Starts in' : 'Ends in'}
            </div>
          )}
          {status === 'Past' ? (
            <div className="status">
              Ended: {challenge.endDate}
            </div>
          ) : (
            <div className="countdown">
              <div className="countdown-item">
                <span>{countdown.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <span>:</span>
              <div className="countdown-item">
                <span>{countdown.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <span>:</span>
              <div className="countdown-item">
                <span>{countdown.minutes}</span>
                <span className="countdown-label">Min</span>
              </div>
            </div>
          )}
        </div>
        <button className="participate-button" onClick={handleParticipateClick}>Participate Now</button>
      </div>
    </div>
  );
}
