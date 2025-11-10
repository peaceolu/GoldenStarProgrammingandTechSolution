// pages/TeamPage.jsx
import React from 'react';
import TeamShowcase from '../components/TeamShowcase';
import Header from '../components/Header';

const TeamPage = () => {
  return (
    <div className="team-page">
     
      <main>
        <TeamShowcase />
      </main>
    </div>
  );
};

export default TeamPage;