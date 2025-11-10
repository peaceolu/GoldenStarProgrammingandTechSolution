// TeamShowcase.jsx
import React, { useState } from 'react';
import './TeamShowcase.css';

const TeamShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Team data - replace with your actual team members
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Creative Director",
      department: "creative",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Alex leads our creative vision with over 10 years of experience in brand strategy and design innovation.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Marketing Director",
      department: "marketing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Sarah drives our marketing initiatives with data-driven strategies and innovative campaigns.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Technical Lead",
      department: "technical",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Michael oversees our technical development with expertise in cutting-edge technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Elena Rodriguez",
      role: "Operations Manager",
      department: "operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Elena ensures seamless operations and exceptional client experiences across all departments.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 5,
      name: "David Kim",
      role: "Finance Director",
      department: "finance",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "David manages our financial strategy with precision and forward-thinking fiscal planning.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 6,
      name: "Olivia Parker",
      role: "Client Relations",
      department: "client",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Olivia builds and maintains strong client relationships with her exceptional communication skills.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  // Department filters
  const departments = [
    { id: 'all', name: 'All Team' },
    { id: 'creative', name: 'Creative' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'technical', name: 'Technical' },
    { id: 'operations', name: 'Operations' },
    { id: 'finance', name: 'Finance' },
    { id: 'client', name: 'Client Relations' }
  ];

  // Filter team members based on active filter
  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  return (
    <section className="team-showcase">
      <div className="container">
        <div className="section-header">
          <h1 className="section-title">Our Golden Star Team</h1>
          <p className="section-subtitle">
            Meet the talented individuals who bring excellence and innovation to everything we do.
          </p>
        </div>

        {/* Department Filters */}
        <div className="filter-container">
          {departments.map(dept => (
            <button
              key={dept.id}
              className={`filter-btn ${activeFilter === dept.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(dept.id)}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {filteredMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Empty state */}
        {filteredMembers.length === 0 && (
          <div className="empty-state">
            <h3>No team members found</h3>
            <p>Try selecting a different department filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Individual Team Member Card Component
const TeamMemberCard = ({ member }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="team-member-card">
      <div className="member-image">
        <img 
          src={member.image} 
          alt={member.name}
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0 }}
        />
        <div className="image-overlay"></div>
        <div className="member-department">{member.department}</div>
      </div>
      
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
        <p className="member-description">{member.description}</p>
        
        <div className="social-links">
          <a href={member.social.linkedin} className="social-link" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={member.social.twitter} className="social-link" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href={member.social.instagram} className="social-link" aria-label="Instagram">
            <InstagramIcon />
          </a>
        </div>
      </div>
      
      <div className="gold-accent"></div>
    </div>
  );
};

// Social Media Icons
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default TeamShowcase;