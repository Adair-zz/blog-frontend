import gfm from '@bytemd/plugin-gfm';
import highlight from '@bytemd/plugin-highlight';
import { Viewer } from '@bytemd/react';
import React, { useMemo } from 'react';

interface MDViewerProps {
  value: string;
}

const MDViewer: React.FC<MDViewerProps> = ({ value }) => {
  const plugins = useMemo(() => [gfm(), highlight()], []);

  return <Viewer value={value} plugins={plugins} />;
};

export default MDViewer;
