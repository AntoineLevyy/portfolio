import React, { useState } from 'react';

function Topics() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    {
      name: "Performance Ads in the near future",
      description: "How AI is shifting the bottleneck from execution to experimentation systems.",
      detailedContent: (
        <>
          <p>In the next three years, the optimal operating model for advertising teams will fundamentally change. As AI drives the cost and time of creative production and activation toward zero, the primary bottleneck shifts away from people and execution and toward systems that enable learning and experimentation. Competitive advantage will no longer come from who can launch more ads, but from who can systematically test, interpret, and compound learnings faster than others.</p>
          <p>The winners will not be better creatives or bigger teams, but better systems: continuous testing pipelines that ingest multi-channel data, generate hypotheses, translate them into controlled experiments, and learn in a closed loop.</p>
          <p><strong>This is why I started Adsperform</strong></p>
        </>
      )
    },
    {
      name: "Early Stage Startups",
      description: "The journey of finding product-market fit and building from 0 to 1."
    },
    {
      name: "AI & Automation",
      description: "Leveraging large language models and generative AI to solve real-world business problems."
    },
    {
      name: "Product Management",
      description: "Designing solutions that users love while meeting business objectives."
    }
  ];

  const closeModal = () => setSelectedTopic(null);

  return (
    <div className="topics-container">
      <div className="topics-grid">
        {topics.map((topic, index) => (
          <div 
            key={index} 
            className={`topic-card ${topic.detailedContent ? 'clickable' : ''}`}
            onClick={() => topic.detailedContent && setSelectedTopic(topic)}
          >
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
            {topic.detailedContent && <span className="read-more">Read more →</span>}
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="topic-modal" onClick={closeModal}>
          <div className="topic-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="topic-close-button" onClick={closeModal}>&times;</button>
            <h2>{selectedTopic.name}</h2>
            <div className="topic-detailed-text">
              {selectedTopic.detailedContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Topics;
