import React from 'react'
import CodeEditor from './components/CodeEditor'
import Preview from './components/Preview'
import axios from 'axios'

const App = () => {
  const [html, setHtml] = React.useState('<h1>Hello World</h1>')
  const [css, setCss] = React.useState('h1 { color: red; }')
  const [js, setJs] = React.useState('console.log("Hello World")')
  
  const [compile, setCompile] = React.useState('')

  const runCode = async() => {
    const response = await axios.post('', {html, css, js});
    // setCompile();
  }

  return (
    <div className='app dark-theme'>
      <div className='editors'>
        <CodeEditor language="html" value={html} onChange={setHtml} />
        <CodeEditor language='css' value='css' onChange={setCss} />
        <CodeEditor language='js' value='js' onChange={setJs} />
      </div>
      <button onClick={runCode}>Run</button>
      <Preview html={compile} />
    </div>
  )
}

export default App