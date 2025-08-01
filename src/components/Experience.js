import React from 'react';
import './Experience.css';

const experienceData = [
  {
    company: 'Infosys Limited',
    role: 'Digital Specialist Engineer',
    location: '📍',
    period: '2021 – Present',
    items: [
      {
        project: 'Forecasting, Ordering, Planning & Logistics System',
        period: 'Nov 2022 – Jun 2024',
        technologies: 'Java (Spring Boot), DB2, Camunda, REST APIs, Batch Jobs, Excel Integration',
        details: [
          'Re-engineered and developed a core enterprise system for forecasting, ordering, planning, and logistics as part of a cross-functional team.',
          'Led backend development efforts including REST API design, asynchronous batch processing, and Excel data integrations.',
          'Collaborated on requirement gathering, low-level design, and database schema design, ensuring alignment with business goals.',
          'Created process workflows using Camunda, aiding in low-level design and re-engineering.',
          'Contributed to a customer-centric solution, translating business requirements into scalable and reliable backend components.'
        ]
      },
      {
        project: 'Struts Migration & Authorization Module',
        period: 'Jan 2025 – Jun 2025',
        technologies: 'Java, Struts (1 to 2+), JSP, Tiles, XML Configuration',
        details: [
          'Involved in the migration of a legacy application from Struts 1 to Struts 2+',
          'Implemented role-based authorization module and custom Tiles Configuration.',
          'Continuously learning and applying Struts architecture principles to improve solution design.'
        ]
      },
      {
        project: 'Order Prevalidation System',
        period: 'Jun 2025 – Present',
        technologies: 'Java Spring Boot, AWS (SQS, EC2, RDS, Lambda), Async programming, caching',
        details: [
          'Working on order prevalidation system where on getting request, we collect data from different systems and validate and enrich the payload and send for processing.',
          'Using Java Spring Boot and AWS services for auditing, async programming, and caching to meet SLA of 1 sec.'
        ]
      }
    ]
  }
];

const Experience = () => (
  <div className="experience-section">
    <h2 className="exp-title">Experience Timeline</h2>
    <div className="timeline">
      {experienceData[0].items.map((item, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>{item.project}</h3>
            <span className="timeline-period">{item.period}</span>
            <div className="timeline-tech">{item.technologies}</div>
            <ul>
              {item.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
    <div className="exp-footer">
      <span>{experienceData[0].company} | {experienceData[0].role} {experienceData[0].location} {experienceData[0].period}</span>
    </div>
  </div>
);

export default Experience;
