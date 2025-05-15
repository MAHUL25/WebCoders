import React from 'react'
import CodeEditor from './components/CodeEditor'
import Preview from './components/Preview'
import Buttons from './components/buttons'
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import axios from 'axios'

const App = () => {
  const [html, setHtml] = React.useState('<h1>Hello World</h1>')
  const [css, setCss] = React.useState('h1 { color: red; }')
  const [js, setJs] = React.useState('console.log("Hello World")')
  
  const [compile, setCompile] = React.useState('')

  const runCode = async() => {
    const response = await axios.post('http://localhost:5000/run', {html, css, js});
    setCompile(response.data.result);
  }

  return (
    <div className="app dark-theme flex h-full text-white bg-black overflow-hidden">
      {/* Left Panel: Code Editors */}
      <div className="w-400 bg-[#111] flex flex-col gap-4 p-4 overflow-y-auto">
        {/* HTML Editor */}
        <div>
            <div className="flex gap-142 mb-2 text-pink-400 font-semibold flex-row">
            <div className='flex items-center gap-2'>
              <FaHtml5 /> HTML
            </div>
            <Buttons
              label="Run Code"
              onClick={runCode}
              className="bg-gray-700 text-white border-none px-5 py-2.5 rounded-lg hover:bg-gray-600 transition"
            />
          </div>
          <CodeEditor language="html" value={html} onChange={setHtml} />
        </div>

        {/* CSS Editor */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-blue-400 font-semibold">
            <FaCss3Alt /> CSS
          </div>
          <CodeEditor language="css" value={css} onChange={setCss} />
        </div>

        {/* JS Editor */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-yellow-400 font-semibold">
            <FaJsSquare /> JavaScript
          </div>
          <CodeEditor language="javascript" value={js} onChange={setJs} />
        </div>
      </div>

      {/* Right Panel: Live Preview */}
      <div className="bg-[#1a1a1a] p-4 overflow-auto w-full">
        <div className="text-gray-400 mb-2 text-sm">Live Preview</div>
        <Preview html={compile} />
      </div>
    </div>
  )
}

export default App

{/* <div className='app dark-theme flex flex-col text-white h-screen bg-[#111]'>
  <div className="flex gap-2.5 p-2.5">HTML</div>
  <div className='editors flex-1 border-1 h-300'>
    <CodeEditor language="html" value={html} onChange={setHtml} />
  </div>
  <div className="flex p-2.5 border-1 ">CSS</div>
  <Buttons label="Run Code" onClick={runCode} className={`bg-gray-700 text-white border-none px-5 py-2.5 m-2.5 rounded-lg hover:bg-gray-600 transition`} />
  <Preview html={compile} />
</div> */}

{/* <div className='app dark-theme flex flex-row text-white'>
  <div className='flex gap-2.5 p-2.5 flex-col bg-[#111] h-screen w-[50%]'>
    <div className=''>HTML</div>
    <CodeEditor language="html" value={html} onChange={setHtml} />
    <hr className='pb-0.5 mt-2.5' />
    <div className=''>CSS</div>
    <CodeEditor language="css" value={css} onChange={setCss} />
    <hr className='pb-0.5 mt-2.5' />
    <div className=''>JS</div>
    <CodeEditor language="js" value={js} onChange={setJs} />
  </div>
  <div className='h-scree bg-[285878]'>
    <Preview html={compile} />
  </div>
</div> */}