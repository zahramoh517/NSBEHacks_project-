// MoodReport.js
import React from 'react';

const MoodReport = ({ moodData }) => {
  // moodData is expected to be an object or array containing the mood report
  // For example, moodData could be: { mood: 'Happy', score: 8, comment: 'Feeling good!' }

  if (!moodData) {
    return <div>No report available yet.</div>;
  }

  return (
    <div className="mood-report">
      <h2>Your Mood Report For Today!</h2>
      <p>Mood: {moodData.mood}</p>
      <p>Score: {moodData.score}</p>
      <p>Comment: {moodData.comment}</p>
      {/* Render more data as needed */}
    </div>
  );
};

export default MoodReport;
