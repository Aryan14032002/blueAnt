import React from 'react';
import './ServicePage.css';

const services = [
  { title: 'TAXES', icon: '📄', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#5a6b6d' },
  { title: 'LOAN ADVISORY', icon: '📊', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#17b59b' },
  { title: 'BUDGETING', icon: '🧮', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#d4b433' },
  { title: 'KIDS NEEDS', icon: '💰', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#e5453a' },
  { title: 'RETIREMENT', icon: '📈', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#304eb0' },
  { title: 'WILL & LEGACY', icon: '👤', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#b156ae' },
  { title: 'INSURANCE ADVISORY', icon: '🔌', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#e43130' },
  { title: 'INVESTING FOR FINANCIAL FREEDOM', icon: '🍸', desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', color: '#3ecadf' },
];
const ServicePage = () => {
  return (
    <div className="services-container">
      <h1>Our <span>Services</span></h1>
      <p className="subtitle">Your <span className="blue">subtitle</span> in <span className="red">this line</span></p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon" style={{ backgroundColor: service.color }}>
              {service.icon}
            </div>
            <div className="text">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <a href="#" className="website-link">www.companyname.com</a>
    </div>
  );
};

export default ServicePage;
