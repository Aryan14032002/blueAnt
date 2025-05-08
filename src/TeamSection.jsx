import React from 'react';
import './TeamSection.css';

const teamMembers = [
  { id: 1, name: "Mr. Rohit Raman", text: "#", img: "/rohit-raman.png" },
  { id: 2, name: "Mr. Sachin Narang", text: "#", img: "/sachin-narang.png" },
  { id: 3, name: "Mr. Rahul Kumar", text: "#", img: "/rahul-kumar.png" },
  { id: 4, name: "Mr. Avesh Prajapati", text: "#", img: "/avesh-kumar-prajapati.png" },
  { id: 5, name: "Mr. Rajnish Kumar", text: "#", img: "/rajnish-kumar.png" },
  { id: 6, name: "Mr. Akash Yadav", text: "#", img: "/akash-yadav.png" },
  { id: 7, name: "Mr. Vishnu Dutt", text: "#", img: "/vishnudutt.png" },
  { id: 8, name: "Mr. Jitendra Kumar", text: "#", img: "/jitendra-kumar.png" },
  { id: 9, name: "Mr. Harsh Pandey", text: "#", img: "/harsh-pandey.png" },
  { id: 10, name: "Ms. Preeti Mahara", text: "#", img: "/preeti.png" },
  { id: 11, name: "Ms. Monika Soni", text: "#", img: "/monika-soni.png" },
  { id: 12, name: "Mr. Vikram Agarwal", text: "#", img: "/1.png" },
  { id: 13, name: "Mr. Abhishek Singh", text: "#", img: "/2.png" },
  { id: 14, name: "Mr. Yogendra Kumar", text: "#", img: "/3.png" },
  { id: 15, name: "Mr. Mukesh Kumar", text: "#", img: "/4.png" },
  { id: 16, name: "Ms. Chetna Rana", text: "#", img: "" },
  { id: 17, name: "Ms. Renu Verma", text: "#", img: "/renu-verma.png" },
];

const TeamSection = () => {
  return (
    <section className="team-section" data-aos="fade-up">
      <h2 className="titles">Meet Our Family</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p>{member.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;  
