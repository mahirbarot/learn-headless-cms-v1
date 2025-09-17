import React from 'react';
import './Features.css';

const Features = ({ features }) => {
  if (!features) return null;

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">{features.title}</h2>
          <p className="features-description">{features.description}</p>
        </div>
        <div className="features-grid">
          {features.feature_list?.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon ? (
                  <img src={feature.icon} alt={feature.title} />
                ) : (
                  <div className="icon-placeholder">
                    <span>🚀</span>
                  </div>
                )}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
