import * as monaco from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

interface CodeEditorProps {
  value: string;
  language?: string;
  style?: React.CSSProperties;
  handleChange?: (v: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const codeEditorRef = useRef<HTMLDivElement | null>(null);
  const codeEditor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (codeEditorRef.current) {
      codeEditor.current = monaco.editor.create(codeEditorRef.current, {
        value: props.value,
        language: props.language || 'java',
        automaticLayout: true,
        smoothScrolling: true,
        colorDecorators: true,
        scrollbar: {
          vertical: 'hidden',
          verticalScrollbarSize: 0,
          horizontal: 'hidden',
        },
        // wordWrap: 'on',
        minimap: {
          enabled: false,
        },
        readOnly: false,
        theme: 'vs-dark',
      });

      codeEditor.current.onDidChangeModelContent(() => {
        if (codeEditor.current && props.handleChange) {
          props.handleChange(codeEditor.current.getValue());
        }
      });
    }

    return () => {
      if (codeEditor.current) {
        codeEditor.current.dispose();
        codeEditor.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (codeEditor.current && codeEditor.current.getValue() !== props.value) {
      codeEditor.current.setValue(props.value);
    }
  }, [props.value]);

  return (
    <div
      id="code-editor"
      ref={codeEditorRef}
      style={{ ...props.style }}
    ></div>
  );
};

export default CodeEditor;
