import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import webpagePlugin from 'grapesjs-preset-webpage';
import basicBlocks from 'grapesjs-blocks-basic';
import formsPlugin from 'grapesjs-plugin-forms';
import exportPlugin from 'grapesjs-plugin-export';
import countdownPlugin from 'grapesjs-component-countdown';

const Builder = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Initialize GrapesJS editor
    const editor = grapesjs.init({
      container: editorRef.current,
      fromElement: true,
      width: '100%',
      height: '100vh',
      storageManager: false,
      plugins: [webpagePlugin, basicBlocks, formsPlugin, exportPlugin, countdownPlugin],
      pluginsOpts: {
        [webpagePlugin]: {
          // options for the webpage plugin if needed
        },
        [basicBlocks]: {
          flexGrid: true,
        },
      }
    });

    // Add Custom Blocks
    const blockManager = editor.BlockManager;

    blockManager.add('hero-section', {
      label: 'Hero Section',
      category: 'Extra',
      content: `
        <header class="hero-section" style="padding: 100px 20px; text-align: center; background-color: #f8f9fa; color: #333;">
          <h1 style="font-size: 3rem; margin-bottom: 20px;">Welcome to Your Site</h1>
          <p style="font-size: 1.5rem; margin-bottom: 30px;">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <a href="#" style="padding: 10px 20px; font-size: 1.2rem; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Learn More</a>
        </header>
      `,
    });

    blockManager.add('features-section', {
      label: 'Features',
      category: 'Extra',
      content: `
        <section class="features-section" style="padding: 60px 20px; display: flex; justify-content: space-around; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 250px; margin: 10px; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Feature 1</h3>
            <p>Details about feature 1.</p>
          </div>
          <div style="flex: 1; min-width: 250px; margin: 10px; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Feature 2</h3>
            <p>Details about feature 2.</p>
          </div>
          <div style="flex: 1; min-width: 250px; margin: 10px; padding: 20px; text-align: center; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Feature 3</h3>
            <p>Details about feature 3.</p>
          </div>
        </section>
      `,
    });

    // Cleanup on unmount
    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div className="flex h-screen w-full flex-col">
      <div id="gjs" ref={editorRef}>
        <h1>Hello World Component!</h1>
      </div>
    </div>
  );
};

export default Builder;
