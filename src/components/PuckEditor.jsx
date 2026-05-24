import { Puck } from '@puckeditor/core';
import '@puckeditor/core/dist/index.css';
import { config } from './puckConfig';

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
