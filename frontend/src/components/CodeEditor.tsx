import React from 'react'
import Editor from '@monaco-editor/react'

interface EditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const CodeEditor = ({language, value, onChange}: EditorProps) => {
    return (
        <div>
            <Editor 
            height="300px"
            theme="vs-dark" 
            language={language} 
            value={value} 
            onChange={(value) => onChange(value || '')} 
            />
        </div>
    )
}

export default CodeEditor