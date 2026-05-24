import { DropZone } from '@puckeditor/core';

const colorField = {
  type: "custom",
  render: ({ onChange, value }) => (
    <input
      type="color"
      value={value || '#000000'}
      onChange={(e) => onChange(e.currentTarget.value)}
      style={{ width: '100%', height: '40px', padding: '0', cursor: 'pointer', border: 'none' }}
    />
  ),
};

const spacingFields = {
  paddingTop: { type: "text" },
  paddingRight: { type: "text" },
  paddingBottom: { type: "text" },
  paddingLeft: { type: "text" },
  marginTop: { type: "text" },
  marginBottom: { type: "text" },
  marginLeft: { type: "text" },
  marginRight: { type: "text" },
};

const defaultSpacing = {
  paddingTop: "20px",
  paddingRight: "20px",
  paddingBottom: "20px",
  paddingLeft: "20px",
  marginTop: "0px",
  marginBottom: "0px",
  marginLeft: "0px",
  marginRight: "0px",
};

const getSpacingStyles = (props) => ({
  paddingTop: props.paddingTop,
  paddingRight: props.paddingRight,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
  marginTop: props.marginTop,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  marginRight: props.marginRight,
});

const typographyFields = {
  fontSize: { type: "text" },
  fontWeight: {
    type: "select",
    options: [
      { label: "Normal", value: "normal" },
      { label: "Bold", value: "bold" },
      { label: "100", value: "100" },
      { label: "300", value: "300" },
      { label: "400", value: "400" },
      { label: "500", value: "500" },
      { label: "600", value: "600" },
      { label: "700", value: "700" },
      { label: "900", value: "900" }
    ]
  },
  textAlign: {
    type: "radio",
    options: [
      { label: "Left", value: "left" },
      { label: "Center", value: "center" },
      { label: "Right", value: "right" },
      { label: "Justify", value: "justify" }
    ]
  },
  lineHeight: { type: "text" },
  letterSpacing: { type: "text" },
};

const defaultTypography = {
  fontSize: "1rem",
  fontWeight: "normal",
  textAlign: "left",
  lineHeight: "1.5",
  letterSpacing: "normal",
};

const getTypographyStyles = (props) => ({
  fontSize: props.fontSize,
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  lineHeight: props.lineHeight,
  letterSpacing: props.letterSpacing,
});

const borderFields = {
  borderWidth: { type: "text" },
  borderStyle: {
    type: "select",
    options: [
      { label: "None", value: "none" },
      { label: "Solid", value: "solid" },
      { label: "Dashed", value: "dashed" },
      { label: "Dotted", value: "dotted" }
    ]
  },
  borderColor: colorField,
  borderRadius: { type: "text" },
  boxShadow: { type: "text" },
};

const defaultBorder = {
  borderWidth: "0px",
  borderStyle: "none",
  borderColor: "#000000",
  borderRadius: "0px",
  boxShadow: "none",
};

const getBorderStyles = (props) => ({
  borderWidth: props.borderWidth,
  borderStyle: props.borderStyle,
  borderColor: props.borderColor,
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow,
});

const flexFields = {
  display: {
    type: "select",
    options: [
      { label: "Block", value: "block" },
      { label: "Flex", value: "flex" },
      { label: "Grid", value: "grid" }
    ]
  },
  flexDirection: {
    type: "radio",
    options: [
      { label: "Row", value: "row" },
      { label: "Column", value: "column" }
    ]
  },
  justifyContent: {
    type: "select",
    options: [
      { label: "Flex Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "Flex End", value: "flex-end" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" }
    ]
  },
  alignItems: {
    type: "select",
    options: [
      { label: "Flex Start", value: "flex-start" },
      { label: "Center", value: "center" },
      { label: "Flex End", value: "flex-end" },
      { label: "Stretch", value: "stretch" }
    ]
  },
  flexWrap: {
    type: "radio",
    options: [
      { label: "No Wrap", value: "nowrap" },
      { label: "Wrap", value: "wrap" }
    ]
  },
  gap: { type: "text" },
};

const getFlexStyles = (props) => ({
  display: props.display,
  flexDirection: props.flexDirection,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  flexWrap: props.flexWrap,
  gap: props.gap,
});

const sizingFields = {
  width: { type: "text" },
  maxWidth: { type: "text" },
  minWidth: { type: "text" },
  height: { type: "text" },
  maxHeight: { type: "text" },
  minHeight: { type: "text" },
};

const defaultSizing = {
  width: "auto",
  maxWidth: "none",
  minWidth: "auto",
  height: "auto",
  maxHeight: "none",
  minHeight: "auto",
};

const getSizingStyles = (props) => ({
  width: props.width,
  maxWidth: props.maxWidth,
  minWidth: props.minWidth,
  height: props.height,
  maxHeight: props.maxHeight,
  minHeight: props.minHeight,
});

const commonFields = {
  backgroundColor: colorField,
  textColor: colorField,
  ...spacingFields,
  ...borderFields,
  ...sizingFields,
};

const defaultCommonProps = {
  backgroundColor: "transparent",
  textColor: "#000000",
  ...defaultSpacing,
  ...defaultBorder,
  ...defaultSizing,
};

const getCommonStyles = (props) => ({
  backgroundColor: props.backgroundColor,
  color: props.textColor,
  ...getSpacingStyles(props),
  ...getBorderStyles(props),
  ...getSizingStyles(props),
});

export const config = {
  components: {
    Hero: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        buttonText: { type: "text" },
        ...commonFields,
        ...flexFields,
      },
      defaultProps: {
        title: "Welcome to Your Premium Site",
        description: "This is a premium hero unit, highly customizable for any layout.",
        buttonText: "Discover More",
        ...defaultCommonProps,
        backgroundColor: "#f8f9fa",
        paddingTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      render: (props) => (
        <header style={{ ...getCommonStyles(props), ...getFlexStyles(props) }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: props.textColor }}>{props.title}</h1>
          <p style={{ fontSize: "1.5rem", marginBottom: "30px", color: props.textColor }}>{props.description}</p>
          <a href="#" style={{ padding: "12px 24px", fontSize: "1.2rem", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }}>{props.buttonText}</a>
        </header>
      )
    },
    Heading: {
      fields: {
        title: { type: "text" },
        tag: {
          type: "select",
          options: [
            { label: "H1", value: "h1" },
            { label: "H2", value: "h2" },
            { label: "H3", value: "h3" },
            { label: "H4", value: "h4" },
            { label: "H5", value: "h5" },
            { label: "H6", value: "h6" }
          ]
        },
        ...commonFields,
        ...typographyFields,
      },
      defaultProps: {
        title: "Premium Heading",
        tag: "h2",
        ...defaultCommonProps,
        ...defaultTypography,
        fontSize: "2.5rem",
        fontWeight: "bold",
      },
      render: (props) => {
        const Tag = props.tag;
        return <Tag style={{ ...getCommonStyles(props), ...getTypographyStyles(props), margin: 0 }}>{props.title}</Tag>;
      }
    },
    Text: {
      fields: {
        content: { type: "textarea" },
        ...commonFields,
        ...typographyFields,
      },
      defaultProps: {
        content: "Enter your premium text here.",
        ...defaultCommonProps,
        ...defaultTypography,
      },
      render: (props) => (
        <div style={{ ...getCommonStyles(props), ...getTypographyStyles(props) }}>{props.content}</div>
      )
    },
    Image: {
      fields: {
        url: { type: "text" },
        alt: { type: "text" },
        objectFit: {
          type: "select",
          options: [
            { label: "Fill", value: "fill" },
            { label: "Contain", value: "contain" },
            { label: "Cover", value: "cover" },
            { label: "None", value: "none" },
            { label: "Scale Down", value: "scale-down" }
          ]
        },
        ...commonFields,
      },
      defaultProps: {
        url: "https://via.placeholder.com/800x400",
        alt: "Placeholder",
        objectFit: "cover",
        ...defaultCommonProps,
        width: "100%",
      },
      render: (props) => (
        <div style={{ ...getCommonStyles(props), overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <img src={props.url} alt={props.alt} style={{ width: "100%", height: "100%", objectFit: props.objectFit }} />
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
        ...commonFields,
        ...flexFields,
      },
      defaultProps: {
        feature1: "Innovative Design",
        feature1Desc: "Crafted with modern aesthetics and user-centric principles to deliver an exceptional experience.",
        feature2: "Robust Performance",
        feature2Desc: "Engineered for speed and reliability, ensuring seamless operation under demanding conditions.",
        feature3: "Seamless Integration",
        feature3Desc: "Effortlessly connects with your existing tools and workflows for unparalleled efficiency.",
        ...defaultCommonProps,
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "40px"
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props), ...getFlexStyles(props), boxSizing: 'border-box' }}>
          {[
            { title: props.feature1, desc: props.feature1Desc, icon: "✨" },
            { title: props.feature2, desc: props.feature2Desc, icon: "🚀" },
            { title: props.feature3, desc: props.feature3Desc, icon: "🔗" }
          ].map((f, i) => (
            <div key={i} style={{
              flex: '1 1 300px',
              maxWidth: '400px',
              padding: '40px 30px',
              textAlign: 'center',
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
            }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{f.icon}</div>
              <h3 style={{color: props.textColor, fontSize: '1.5rem', fontWeight: '600', marginBottom: '15px', marginTop: 0}}>{f.title}</h3>
              <p style={{color: '#4b5563', lineHeight: '1.6', margin: 0}}>{f.desc}</p>
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
        buttonTextColor: colorField,
        ...commonFields,
        ...typographyFields,
      },
      defaultProps: {
        label: "Click Me",
        href: "#",
        buttonColor: "#007bff",
        buttonTextColor: "#ffffff",
        ...defaultCommonProps,
        ...defaultTypography,
        textAlign: "center",
      },
      render: (props) => (
        <div style={{ ...getCommonStyles(props), textAlign: props.textAlign }}>
          <a href={props.href} style={{ ...getTypographyStyles(props), padding: '10px 20px', backgroundColor: props.buttonColor, color: props.buttonTextColor, textDecoration: 'none', borderRadius: '5px', display: 'inline-block' }}>{props.label}</a>
        </div>
      )
    },
    Divider: {
      fields: {
        color: colorField,
        thickness: { type: "text" },
        ...commonFields,
      },
      defaultProps: {
        color: "#dddddd",
        thickness: "1px",
        ...defaultCommonProps,
        paddingTop: "20px",
        paddingBottom: "20px"
      },
      render: (props) => (
        <div style={getCommonStyles(props)}>
          <hr style={{ border: 'none', borderTop: `${props.thickness} solid ${props.color}`, margin: 0 }} />
        </div>
      )
    },
    Card: {
      fields: {
        title: { type: "text" },
        description: { type: "textarea" },
        imageUrl: { type: "text" },
        ...commonFields,
        ...flexFields,
      },
      defaultProps: {
        title: "Professional Card Component",
        description: "A versatile card component designed for elegantly showcasing content, profiles, or products.",
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        ...defaultCommonProps,
        backgroundColor: "#ffffff",
        paddingTop: "0px", paddingRight: "0px", paddingBottom: "0px", paddingLeft: "0px",
        borderRadius: "16px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        display: "flex", flexDirection: "column",
        maxWidth: "400px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#e5e7eb",
        overflow: "hidden"
      },
      render: (props) => (
        <div style={{
          ...getCommonStyles(props),
          ...getFlexStyles(props),
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = props.boxShadow || '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
        }}
        >
          {props.imageUrl && (
            <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
              <img src={props.imageUrl} alt={props.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          )}
          <div style={{ padding: '24px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '12px', color: props.textColor, fontSize: '1.25rem', fontWeight: '600', lineHeight: '1.4' }}>{props.title}</h3>
            <p style={{ marginBottom: 0, color: '#4b5563', lineHeight: '1.6' }}>{props.description}</p>
          </div>
        </div>
      )
    },
    Quote: {
      fields: {
        text: { type: "textarea" },
        author: { type: "text" },
        ...commonFields,
        ...typographyFields,
      },
      defaultProps: {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        author: "- Steve Jobs",
        ...defaultCommonProps,
        ...defaultTypography,
        backgroundColor: "#f0f8ff",
        paddingTop: "20px", paddingRight: "30px", paddingBottom: "20px", paddingLeft: "30px",
        borderLeftWidth: "5px", borderStyle: "solid", borderColor: "#007bff",
        fontStyle: "italic"
      },
      render: (props) => (
        <blockquote style={{ ...getCommonStyles(props), ...getTypographyStyles(props), margin: 0 }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>"{props.text}"</p>
          <footer style={{ fontWeight: 'bold' }}>{props.author}</footer>
        </blockquote>
      )
    },
    Section: {
      fields: {
        ...commonFields,
        ...flexFields,
      },
      defaultProps: {
        ...defaultCommonProps,
        paddingTop: "40px", paddingBottom: "40px",
        display: "block",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props), ...getFlexStyles(props) }}>
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
        ...commonFields,
        ...flexFields,
      },
      defaultProps: {
        columns: "2",
        ...defaultCommonProps,
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      },
      render: (props) => {
        const colCount = parseInt(props.columns, 10) || 2;
        return (
          <div style={{ ...getCommonStyles(props), ...getFlexStyles(props) }}>
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
        link1: { type: "text" },
        link1Url: { type: "text" },
        link2: { type: "text" },
        link2Url: { type: "text" },
        link3: { type: "text" },
        link3Url: { type: "text" },
        ...commonFields,
        ...flexFields,
      },
      defaultProps: {
        logoText: "Premium Brand",
        link1: "Home", link1Url: "#",
        link2: "About", link2Url: "#",
        link3: "Contact", link3Url: "#",
        ...defaultCommonProps,
        backgroundColor: "#2c3e50",
        textColor: "#ffffff",
        paddingTop: "15px", paddingRight: "30px", paddingBottom: "15px", paddingLeft: "30px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      },
      render: (props) => (
        <nav style={{ ...getCommonStyles(props), ...getFlexStyles(props) }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{props.logoText}</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {props.link1 && <a href={props.link1Url} style={{ color: props.textColor, textDecoration: 'none' }}>{props.link1}</a>}
            {props.link2 && <a href={props.link2Url} style={{ color: props.textColor, textDecoration: 'none' }}>{props.link2}</a>}
            {props.link3 && <a href={props.link3Url} style={{ color: props.textColor, textDecoration: 'none' }}>{props.link3}</a>}
          </div>
        </nav>
      )
    },

    PricingTable: {
      fields: {
        title: { type: "text" },
        tier1Name: { type: "text" },
        tier1Price: { type: "text" },
        tier1Features: { type: "textarea" },
        tier2Name: { type: "text" },
        tier2Price: { type: "text" },
        tier2Features: { type: "textarea" },
        tier3Name: { type: "text" },
        tier3Price: { type: "text" },
        tier3Features: { type: "textarea" },
        ...commonFields,
      },
      defaultProps: {
        title: "Simple, Transparent Pricing",
        tier1Name: "Basic",
        tier1Price: "$9/mo",
        tier1Features: "Feature A\nFeature B\nFeature C",
        tier2Name: "Pro",
        tier2Price: "$29/mo",
        tier2Features: "Feature A\nFeature B\nFeature C\nFeature D\nFeature E",
        tier3Name: "Enterprise",
        tier3Price: "Contact Us",
        tier3Features: "All Pro features\n24/7 Support\nCustom SLA",
        ...defaultCommonProps,
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundColor: "#f9fafb",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props) }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem" }}>{props.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "0 20px" }}>
            {[
              { name: props.tier1Name, price: props.tier1Price, features: props.tier1Features, highlight: false },
              { name: props.tier2Name, price: props.tier2Price, features: props.tier2Features, highlight: true },
              { name: props.tier3Name, price: props.tier3Price, features: props.tier3Features, highlight: false },
            ].map((tier, i) => (
              <div key={i} style={{
                flex: "1 1 250px", maxWidth: "300px", padding: "30px",
                backgroundColor: tier.highlight ? "#007bff" : "#ffffff",
                color: tier.highlight ? "#ffffff" : props.textColor,
                borderRadius: "8px",
                boxShadow: tier.highlight ? "0 10px 15px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.05)",
                border: tier.highlight ? "none" : "1px solid #e5e7eb",
                textAlign: "center",
                transform: tier.highlight ? "scale(1.05)" : "none",
              }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: tier.highlight ? "#ffffff" : props.textColor }}>{tier.name}</h3>
                <div style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px" }}>{tier.price}</div>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: "30px", textAlign: "left" }}>
                  {tier.features.split('\n').map((feat, j) => (
                    <li key={j} style={{ marginBottom: "10px", paddingBottom: "10px", borderBottom: tier.highlight ? "1px solid rgba(255,255,255,0.2)" : "1px solid #f3f4f6" }}>
                      ✓ {feat}
                    </li>
                  ))}
                </ul>
                <button style={{
                  padding: "10px 20px", width: "100%", borderRadius: "5px", border: "none", cursor: "pointer", fontWeight: "bold",
                  backgroundColor: tier.highlight ? "#ffffff" : "#f3f4f6",
                  color: tier.highlight ? "#007bff" : "#374151"
                }}>Choose Plan</button>
              </div>
            ))}
          </div>
        </section>
      )
    },
    Testimonials: {
      fields: {
        title: { type: "text" },
        quote1: { type: "textarea" },
        author1: { type: "text" },
        quote2: { type: "textarea" },
        author2: { type: "text" },
        quote3: { type: "textarea" },
        author3: { type: "text" },
        ...commonFields,
      },
      defaultProps: {
        title: "What Our Customers Say",
        quote1: "This product completely transformed our workflow. Highly recommended!",
        author1: "Jane Doe, CEO",
        quote2: "The ease of use and powerful features are unmatched in the industry.",
        author2: "John Smith, Designer",
        quote3: "Customer support is incredible. They went above and beyond for us.",
        author3: "Alice Johnson, Manager",
        ...defaultCommonProps,
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundColor: "#ffffff",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props) }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem" }}>{props.title}</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", padding: "0 20px" }}>
            {[
              { quote: props.quote1, author: props.author1 },
              { quote: props.quote2, author: props.author2 },
              { quote: props.quote3, author: props.author3 },
            ].map((t, i) => (
              <div key={i} style={{ flex: "1 1 250px", maxWidth: "350px", padding: "25px", backgroundColor: "#f9fafb", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
                <p style={{ fontStyle: "italic", marginBottom: "15px", color: "#4b5563" }}>"{t.quote}"</p>
                <div style={{ fontWeight: "bold", color: "#111827" }}>- {t.author}</div>
              </div>
            ))}
          </div>
        </section>
      )
    },
    FAQ: {
      fields: {
        title: { type: "text" },
        q1: { type: "text" },
        a1: { type: "textarea" },
        q2: { type: "text" },
        a2: { type: "textarea" },
        q3: { type: "text" },
        a3: { type: "textarea" },
        ...commonFields,
      },
      defaultProps: {
        title: "Frequently Asked Questions",
        q1: "How do I get started?",
        a1: "Simply sign up for an account and follow our quickstart guide.",
        q2: "Can I cancel my subscription?",
        a2: "Yes, you can cancel your subscription at any time from your account settings.",
        q3: "Do you offer a free trial?",
        a3: "We offer a 14-day free trial on all our premium plans.",
        ...defaultCommonProps,
        paddingTop: "60px",
        paddingBottom: "60px",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props), maxWidth: "800px", margin: "0 auto", padding: "60px 20px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2rem" }}>{props.title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {[
              { q: props.q1, a: props.a1 },
              { q: props.q2, a: props.a2 },
              { q: props.q3, a: props.a3 },
            ].map((item, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", backgroundColor: "#ffffff" }}>
                <h4 style={{ margin: "0 0 10px 0", fontSize: "1.1rem" }}>{item.q}</h4>
                <p style={{ margin: 0, color: "#4b5563" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )
    },
    ImageGallery: {
      fields: {
        img1: { type: "text" },
        img2: { type: "text" },
        img3: { type: "text" },
        img4: { type: "text" },
        ...commonFields,
      },
      defaultProps: {
        img1: "https://images.unsplash.com/photo-1506744626753-1fa44df14c28?w=400&q=80",
        img2: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80",
        img3: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&q=80",
        img4: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&q=80",
        ...defaultCommonProps,
        paddingTop: "40px",
        paddingBottom: "40px",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props) }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px", padding: "0 20px" }}>
            {[props.img1, props.img2, props.img3, props.img4].map((url, i) => (
              url ? <img key={i} src={url} alt={`Gallery ${i+1}`} style={{ width: "100%", height: "250px", objectFit: "cover", borderRadius: "8px" }} /> : null
            ))}
          </div>
        </section>
      )
    },
    ContactForm: {
      fields: {
        title: { type: "text" },
        buttonText: { type: "text" },
        ...commonFields,
      },
      defaultProps: {
        title: "Get in Touch",
        buttonText: "Send Message",
        ...defaultCommonProps,
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundColor: "#f9fafb",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props), display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "500px", padding: "30px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", border: "1px solid #e5e7eb" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "1.75rem" }}>{props.title}</h2>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <input type="text" placeholder="Name" style={{ padding: "12px", border: "1px solid #d1d5db", borderRadius: "5px", width: "100%", boxSizing: "border-box" }} />
              <input type="email" placeholder="Email" style={{ padding: "12px", border: "1px solid #d1d5db", borderRadius: "5px", width: "100%", boxSizing: "border-box" }} />
              <textarea placeholder="Message" rows="4" style={{ padding: "12px", border: "1px solid #d1d5db", borderRadius: "5px", width: "100%", boxSizing: "border-box" }}></textarea>
              <button style={{ padding: "12px", backgroundColor: "#007bff", color: "#ffffff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold", fontSize: "1rem" }}>{props.buttonText}</button>
            </form>
          </div>
        </section>
      )
    },
    VideoPlayer: {
      fields: {
        videoUrl: { type: "text" },
        ...commonFields,
      },
      defaultProps: {
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        ...defaultCommonProps,
        paddingTop: "40px",
        paddingBottom: "40px",
      },
      render: (props) => (
        <section style={{ ...getCommonStyles(props), display: "flex", justifyContent: "center", padding: "20px" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "800px", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "8px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}>
            <iframe
              src={props.videoUrl}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      )
    },

    Footer: {
      fields: {
        copyrightText: { type: "text" },
        ...commonFields,
        ...typographyFields,
      },
      defaultProps: {
        copyrightText: "© 2026 Premium Brand. All rights reserved.",
        ...defaultCommonProps,
        ...defaultTypography,
        backgroundColor: "#1a1a1a",
        textColor: "#ffffff",
        paddingTop: "30px", paddingBottom: "30px",
        textAlign: "center",
      },
      render: (props) => (
        <footer style={{ ...getCommonStyles(props), ...getTypographyStyles(props) }}>
          <p style={{ margin: 0 }}>{props.copyrightText}</p>
        </footer>
      )
    }
  }
};
