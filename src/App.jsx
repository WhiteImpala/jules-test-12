import React, { useState } from 'react';
import { Render } from '@puckeditor/core';
import PuckEditor, { config } from './components/PuckEditor';

const initialData = {
  content: [],
  root: {},
};

function App() {
  const [data, setData] = useState(initialData);
  const [mode, setMode] = useState('edit'); // 'edit' or 'preview'

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "puck-data.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">Website Builder</h1>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${mode === 'edit' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => setMode('edit')}
          >
            Edit
          </button>
          <button
            className={`px-4 py-2 rounded ${mode === 'preview' ? 'bg-green-600' : 'bg-gray-600 hover:bg-gray-500'}`}
            onClick={() => setMode('preview')}
          >
            Preview
          </button>
          <button
            className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-500"
            onClick={handleExport}
          >
            Export JSON
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        {mode === 'edit' ? (
          <PuckEditor data={data} onChange={setData} />
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
