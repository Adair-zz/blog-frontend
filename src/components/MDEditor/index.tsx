import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import { Editor } from '@bytemd/react';
// import 'bytemd/dist/index.css';
import React, { useMemo } from 'react';

interface MDEditorProps {
  value: string;
  handleChange: (v: string) => void;
}

const MDEditor: React.FC<MDEditorProps> = ({ value, handleChange }) => {
  const plugins = useMemo(() => [gfm(), highlight()], []);

  return <Editor value={value} plugins={plugins} onChange={handleChange} />;
};

export default MDEditor;
