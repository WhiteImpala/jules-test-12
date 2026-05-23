import React from 'react';
import { Puck } from '@puckeditor/core';
import '@puckeditor/core/dist/index.css';
import { Type, Image as ImageIcon, Layout, Columns } from 'lucide-react';

// Configure the blocks for Puck
const config = {
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" }
      },
      defaultProps: {
        title: "Welcome to Your Site",
        description: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        buttonText: "Learn More"
      },
      render: ({ title, description, buttonText }) => (
        <header className="hero-section" style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#f8f9fa', color: '#333' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>{description}</p>
          <a href="#" style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>{buttonText}</a>
        </header>
      )
    },
    Heading: {
      fields: {
        title: { type: "text" }
      },
      defaultProps: {
        title: "Heading"
      },
      render: ({ title }) => (
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', padding: '20px' }}>{title}</h2>
      )
    },
    Text: {
      fields: {
        content: { type: "textarea" }
      },
      defaultProps: {
        content: "Enter your text here."
      },
      render: ({ content }) => (
        <p style={{ padding: '20px', fontSize: '1rem' }}>{content}</p>
      )
    },
    Image: {
      fields: {
        url: { type: "text" },
        alt: { type: "text" }
      },
      defaultProps: {
        url: "https://via.placeholder.com/800x400",
        alt: "Placeholder"
      },
      render: ({ url, alt }) => (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <img src={url} alt={alt} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
        </div>
      )
    },
    Features: {
      fields: {
        feature1: { type: "text" },
        feature1Desc: { type: "textarea" },
        feature2: { type: "text" },
        feature2Desc: { type: "textarea" },
        feature3: { type: "text" },
        feature3Desc: { type: "textarea" },
      },
      defaultProps: {
        feature1: "Feature 1",
        feature1Desc: "Details about feature 1.",
        feature2: "Feature 2",
        feature2Desc: "Details about feature 2.",
        feature3: "Feature 3",
        feature3Desc: "Details about feature 3."
      },
      render: ({ feature1, feature1Desc, feature2, feature2Desc, feature3, feature3Desc }) => (
        <section className="features-section" style={{ padding: '60px 20px', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          {[
            { title: feature1, desc: feature1Desc },
            { title: feature2, desc: feature2Desc },
            { title: feature3, desc: feature3Desc }
          ].map((f, i) => (
            <div key={i} style={{ flex: 1, minWidth: '250px', margin: '10px', padding: '20px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </section>
      )
    }
  }
};

// Initial data for the editor
const initialData = {
  content: [],
  root: {},
};

const PuckEditor = () => {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Puck
        config={config}
        data={initialData}
        onPublish={(data) => {
          console.log(data);
          alert('Published! Check console for data.');
        }}
      />
    </div>
  );
};

export default PuckEditor;
