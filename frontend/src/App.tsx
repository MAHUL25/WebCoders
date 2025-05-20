import React from 'react'
import HtmlEditor from './pages/htmlEditor'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/htmlEditor" element={<HtmlEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App