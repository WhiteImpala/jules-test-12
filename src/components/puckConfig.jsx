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
