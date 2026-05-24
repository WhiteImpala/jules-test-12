import { useState, useRef } from 'react';
import { Render } from '@puckeditor/core';
import PuckEditor from './components/PuckEditor';
import { config } from './components/puckConfig';
import { renderToStaticMarkup } from 'react-dom/server';
import { templates, colorPresets } from './templates';

const defaultData = {
  content: [],
  root: {},
};

const getInitialPages = () => {
  const savedPages = localStorage.getItem('puck-pages');
  if (savedPages) {
    try {
      return JSON.parse(savedPages);
    } catch (e) {
      console.error('Failed to parse saved puck pages', e);
    }
  }
  return {
    '/': { name: 'Home', data: defaultData },
  };
};

function App() {
  const [pages, setPages] = useState(getInitialPages());
  const [currentPage, setCurrentPage] = useState('/');
  const [editorKey, setEditorKey] = useState(0);
  const [mode, setMode] = useState('edit'); // 'edit' or 'preview'
  const fileInputRef = useRef(null);

  const data = pages[currentPage]?.data || defaultData;

  const updatePageData = (newData) => {
    const updatedPages = {
      ...pages,
      [currentPage]: { ...pages[currentPage], data: newData }
    };
    setPages(updatedPages);
    localStorage.setItem('puck-pages', JSON.stringify(updatedPages));
    // For backwards compatibility with single page setups
    localStorage.setItem('puck-data', JSON.stringify(newData));
  };

  const handleApplyTemplate = (e) => {
    const templateIndex = e.target.value;
    if (templateIndex === "") return;

    if (confirm("Applying a template will overwrite the current page's content. Continue?")) {
      const templateData = JSON.parse(JSON.stringify(templates[templateIndex].data));
      updatePageData(templateData);
      setEditorKey(prev => prev + 1);
    }
    e.target.value = "";
  };

  const handleApplyColorPreset = (e) => {
    const presetIndex = e.target.value;
    if (presetIndex === "") return;

    const preset = colorPresets[presetIndex];

    // Create a deep copy of the current data
    const newData = JSON.parse(JSON.stringify(data));

    // Update colors for all components
    if (newData.content) {
      newData.content = newData.content.map(component => {
        const newProps = { ...component.props };

        // Define how different components use the palette
        if (component.type === 'Hero') {
          newProps.backgroundColor = preset.primary;
          newProps.textColor = preset.bg;
        } else if (component.type === 'Navbar') {
          newProps.backgroundColor = preset.text;
          newProps.textColor = preset.bg;
        } else if (component.type === 'Footer') {
          newProps.backgroundColor = preset.text;
          newProps.textColor = preset.bg;
        } else if (component.type === 'Button') {
          newProps.buttonColor = preset.primary;
          newProps.buttonTextColor = preset.bg;
        } else {
          // General background components
          if (newProps.backgroundColor && newProps.backgroundColor !== 'transparent') {
            newProps.backgroundColor = preset.bg;
          }
          if (newProps.textColor) {
            newProps.textColor = preset.text;
          }
        }

        return { ...component, props: newProps };
      });
    }

    updatePageData(newData);
    setEditorKey(prev => prev + 1);
    e.target.value = "";
  };

  const handleAddPage = () => {
    const path = prompt("Enter page path (e.g., /about):");
    if (!path) return;
    if (pages[path]) {
      alert("Page already exists!");
      return;
    }
    const name = path.replace('/', '') || 'Home';
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    const updatedPages = {
      ...pages,
      [path]: { name: capitalizedName, data: { content: [], root: {} } }
    };
    setPages(updatedPages);
    setCurrentPage(path);
    localStorage.setItem('puck-pages', JSON.stringify(updatedPages));
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pages, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "puck-pages.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleExportHTML = () => {
    const htmlContent = renderToStaticMarkup(<Render config={config} data={data} />);
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exported Website</title>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;
    const dataStr = "data:text/html;charset=utf-8," + encodeURIComponent(fullHtml);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "exported-website.html");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsedData = JSON.parse(event.target.result);
          // Determine if we are importing a single page (old format) or full pages object
          if (parsedData.root && parsedData.content !== undefined) {
             // It's a single page
             updatePageData(parsedData);
          } else {
             // Assume it's a full pages map
             setPages(parsedData);
             localStorage.setItem('puck-pages', JSON.stringify(parsedData));
             if (!parsedData[currentPage]) {
                 setCurrentPage(Object.keys(parsedData)[0] || '/');
             }
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          alert("Invalid JSON file.");
        }
      };
      reader.readAsText(file);
    }
    // Reset input so the same file can be selected again
    e.target.value = null;
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Website Builder</h1>
          <div className="flex items-center space-x-2 border-l border-gray-600 pl-4">
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              className="bg-gray-700 text-white rounded px-2 py-1 text-sm border border-gray-600"
            >
              {Object.keys(pages).map(path => (
                <option key={path} value={path}>{pages[path].name} ({path})</option>
              ))}
            </select>
            <button
              onClick={handleAddPage}
              className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500 text-sm"
              title="Add Page"
            >
              +
            </button>

          <select
            onChange={handleApplyTemplate}
            defaultValue=""
            className="bg-gray-700 text-white rounded px-2 py-1 text-sm border border-gray-600 ml-4"
          >
            <option value="" disabled>Apply Template...</option>
            {templates.map((t, idx) => (
              <option key={idx} value={idx}>{t.name}</option>
            ))}
          </select>

          <select
            onChange={handleApplyColorPreset}
            defaultValue=""
            className="bg-gray-700 text-white rounded px-2 py-1 text-sm border border-gray-600 ml-2"
          >
            <option value="" disabled>Apply Color Preset...</option>
            {colorPresets.map((p, idx) => (
              <option key={idx} value={idx}>{p.name}</option>
            ))}
          </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            onChange={handleImportJSON}
            style={{ display: 'none' }}
          />
          <button
            className="px-3 py-2 bg-indigo-600 rounded hover:bg-indigo-500 text-sm"
            onClick={() => fileInputRef.current.click()}
          >
            Import JSON
          </button>
          <button
            className="px-3 py-2 bg-purple-600 rounded hover:bg-purple-500 text-sm"
            onClick={handleExportJSON}
          >
            Export JSON
          </button>
          <button
            className="px-3 py-2 bg-pink-600 rounded hover:bg-pink-500 text-sm"
            onClick={handleExportHTML}
          >
            Export HTML
          </button>
          <div className="w-4"></div> {/* spacer */}
          <button
            className={`px-4 py-2 rounded text-sm ${mode === 'edit' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => setMode('edit')}
          >
            Edit
          </button>
          <button
            className={`px-4 py-2 rounded text-sm ${mode === 'preview' ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => setMode('preview')}
          >
            Preview
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        {mode === 'edit' ? (
          <PuckEditor
            key={`${currentPage}-${editorKey}`}
            data={data}
            onChange={updatePageData}
          />
        ) : (
          <div className="h-full w-full overflow-y-auto bg-white">
            <Render config={config} data={data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
