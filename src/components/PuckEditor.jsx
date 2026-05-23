import React from 'react';
import { Puck, DropZone } from '@puckeditor/core';
import '@puckeditor/core/dist/index.css';

const colorField = {
  type: "custom",
  render: ({ name, onChange, value }) => (
    <input
      type="color"
      value={value || '#000000'}
      onChange={(e) => onChange(e.currentTarget.value)}
      style={{ width: '100%', height: '40px', padding: '0', cursor: 'pointer', border: 'none' }}
    />
  ),
};

// Configure the blocks for Puck
export const config = {
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        backgroundColor: colorField,
        textColor: colorField,
        padding: { type: "text" }
      },
      defaultProps: {
        title: "Welcome to Your Site",
        description: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
        buttonText: "Learn More",
        backgroundColor: "#f8f9fa",
        textColor: "#333333",
        padding: "100px 20px"
      },
      render: ({ title, description, buttonText, backgroundColor, textColor, padding }) => (
        <header className="hero-section" style={{ padding, textAlign: 'center', backgroundColor, color: textColor }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>{title}</h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>{description}</p>
          <a href="#" style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>{buttonText}</a>
        </header>
      )
    },
    Heading: {
      fields: {
        title: { type: "text" },
        backgroundColor: colorField,
        textColor: colorField,
        padding: { type: "text" }
      },
      defaultProps: {
        title: "Heading",
        backgroundColor: "transparent",
        textColor: "#000000",
        padding: "20px"
      },
      render: ({ title, backgroundColor, textColor, padding }) => (
        <h2 style={{ fontSize: '2rem', margin: 0, padding, backgroundColor, color: textColor }}>{title}</h2>
      )
    },
    Text: {
      fields: {
        content: { type: "textarea" },
        backgroundColor: colorField,
        textColor: colorField,
        padding: { type: "text" }
      },
      defaultProps: {
        content: "Enter your text here.",
        backgroundColor: "transparent",
        textColor: "#333333",
        padding: "20px"
      },
      render: ({ content, backgroundColor, textColor, padding }) => (
        <p style={{ margin: 0, padding, fontSize: '1rem', backgroundColor, color: textColor }}>{content}</p>
      )
    },
    Image: {
      fields: {
        url: { type: "text" },
        alt: { type: "text" },
        backgroundColor: colorField,
        padding: { type: "text" }
      },
      defaultProps: {
        url: "https://via.placeholder.com/800x400",
        alt: "Placeholder",
        backgroundColor: "transparent",
        padding: "20px"
      },
      render: ({ url, alt, backgroundColor, padding }) => (
        <div style={{ padding, textAlign: 'center', backgroundColor }}>
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
        backgroundColor: colorField,
        textColor: colorField,
        padding: { type: "text" }
      },
      defaultProps: {
        feature1: "Feature 1",
        feature1Desc: "Details about feature 1.",
        feature2: "Feature 2",
        feature2Desc: "Details about feature 2.",
        feature3: "Feature 3",
        feature3Desc: "Details about feature 3.",
        backgroundColor: "transparent",
        textColor: "#000000",
        padding: "60px 20px"
      },
      render: ({ feature1, feature1Desc, feature2, feature2Desc, feature3, feature3Desc, backgroundColor, textColor, padding }) => (
        <section className="features-section" style={{ padding, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', backgroundColor, color: textColor }}>
          {[
            { title: feature1, desc: feature1Desc },
            { title: feature2, desc: feature2Desc },
            { title: feature3, desc: feature3Desc }
          ].map((f, i) => (
            <div key={i} style={{ flex: 1, minWidth: '250px', margin: '10px', padding: '20px', textAlign: 'center', border: `1px solid ${textColor}40`, borderRadius: '8px' }}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </section>
      )
    },
    Button: {
      fields: {
        label: { type: "text" },
        href: { type: "text" },
        buttonColor: colorField,
        textColor: colorField,
        align: {
          type: "radio",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" }
          ]
        }
      },
      defaultProps: {
        label: "Click Me",
        href: "#",
        buttonColor: "#007bff",
        textColor: "#ffffff",
        align: "center"
      },
      render: ({ label, href, buttonColor, textColor, align }) => (
        <div style={{ textAlign: align, padding: '20px' }}>
          <a href={href} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: buttonColor, color: textColor, textDecoration: 'none', borderRadius: '5px', display: 'inline-block' }}>{label}</a>
        </div>
      )
    },
    Divider: {
      fields: {
        color: colorField,
        thickness: { type: "text" }
      },
      defaultProps: {
        color: "#dddddd",
        thickness: "1px"
      },
      render: ({ color, thickness }) => (
        <div style={{ padding: '20px 0' }}>
          <hr style={{ border: 'none', borderTop: `${thickness} solid ${color}` }} />
        </div>
      )
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        backgroundColor: colorField,
        textColor: colorField,
      },
      defaultProps: {
        title: "Card Title",
        description: "This is a simple card component.",
        backgroundColor: "#ffffff",
        textColor: "#333333"
      },
      render: ({ title, description, backgroundColor, textColor }) => (
        <div style={{ padding: '20px', margin: '20px', backgroundColor, color: textColor, borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h3 style={{ marginTop: 0 }}>{title}</h3>
          <p style={{ marginBottom: 0 }}>{description}</p>
        </div>
      )
    },
    Quote: {
      fields: {
        text: { type: "textarea" },
        author: { type: "text" },
        backgroundColor: colorField,
        textColor: colorField,
      },
      defaultProps: {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "- Nelson Mandela",
        backgroundColor: "#f0f8ff",
        textColor: "#333333"
      },
      render: ({ text, author, backgroundColor, textColor }) => (
        <blockquote style={{ padding: '20px 30px', margin: '20px', backgroundColor, color: textColor, borderLeft: `5px solid ${textColor}80`, fontStyle: 'italic' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>"{text}"</p>
          <footer style={{ fontWeight: 'bold' }}>{author}</footer>
        </blockquote>
      )
    },
    Section: {
      fields: {
        backgroundColor: colorField,
        padding: { type: "text" },
      },
      defaultProps: {
        backgroundColor: "transparent",
        padding: "40px 20px"
      },
      render: ({ backgroundColor, padding }) => (
        <section style={{ backgroundColor, padding }}>
          <DropZone zone="content" />
        </section>
      )
    },
    Columns: {
      fields: {
        columns: {
          type: "radio",
          options: [
            { label: "1 Column", value: "1" },
            { label: "2 Columns", value: "2" },
            { label: "3 Columns", value: "3" },
            { label: "4 Columns", value: "4" }
          ]
        },
        gap: { type: "text" },
        backgroundColor: colorField,
        padding: { type: "text" }
      },
      defaultProps: {
        columns: "2",
        gap: "20px",
        backgroundColor: "transparent",
        padding: "20px"
      },
      render: ({ columns, gap, backgroundColor, padding }) => {
        const colCount = parseInt(columns, 10) || 2;
        return (
          <div style={{ display: 'flex', gap, backgroundColor, padding, flexWrap: 'wrap' }}>
            {Array.from({ length: colCount }).map((_, i) => (
              <div key={i} style={{ flex: 1, minWidth: '200px' }}>
                <DropZone zone={`col-${i}`} />
              </div>
            ))}
          </div>
        );
      }
    },
    Navbar: {
      fields: {
        logoText: { type: "text" },
        backgroundColor: colorField,
        textColor: colorField,
        link1: { type: "text" },
        link1Url: { type: "text" },
        link2: { type: "text" },
        link2Url: { type: "text" },
        link3: { type: "text" },
        link3Url: { type: "text" }
      },
      defaultProps: {
        logoText: "My Brand",
        backgroundColor: "#2c3e50",
        textColor: "#ffffff",
        link1: "Home", link1Url: "#",
        link2: "About", link2Url: "#",
        link3: "Contact", link3Url: "#"
      },
      render: ({ logoText, backgroundColor, textColor, link1, link1Url, link2, link2Url, link3, link3Url }) => (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 30px', backgroundColor, color: textColor }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{logoText}</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {link1 && <a href={link1Url} style={{ color: textColor, textDecoration: 'none' }}>{link1}</a>}
            {link2 && <a href={link2Url} style={{ color: textColor, textDecoration: 'none' }}>{link2}</a>}
            {link3 && <a href={link3Url} style={{ color: textColor, textDecoration: 'none' }}>{link3}</a>}
          </div>
        </nav>
      )
    },
    Footer: {
      fields: {
        copyrightText: { type: "text" },
        backgroundColor: colorField,
        textColor: colorField,
      },
      defaultProps: {
        copyrightText: "© 2026 My Brand. All rights reserved.",
        backgroundColor: "#1a1a1a",
        textColor: "#ffffff",
      },
      render: ({ copyrightText, backgroundColor, textColor }) => (
        <footer style={{ padding: '30px', textAlign: 'center', backgroundColor, color: textColor }}>
          <p style={{ margin: 0 }}>{copyrightText}</p>
        </footer>
      )
    }
  }
};

const PuckEditor = ({ data, onChange }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Puck
        config={config}
        data={data}
        onChange={onChange}
        onPublish={(d) => {
          onChange(d);
        }}
      />
    </div>
  );
};

export default PuckEditor;
