import React, { useEffect, useRef } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import webpagePlugin from 'grapesjs-preset-webpage';

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
      plugins: [webpagePlugin],
      pluginsOpts: {
        [webpagePlugin]: {
          // options for the webpage plugin if needed
        }
      }
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
