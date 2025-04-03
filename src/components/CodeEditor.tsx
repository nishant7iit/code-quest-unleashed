
import React from 'react';

export interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language }) => {
  return (
    <div className="h-full">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full p-4 font-mono text-sm bg-gray-900 text-gray-100 focus:outline-none resize-none"
        spellCheck="false"
      />
    </div>
  );
};
