import React from 'react'
import HtmlEditor from './pages/htmlEditor'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Signin from './pages/signin';
import Sso from './pages/sso';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/htmlEditor" element={<HtmlEditor />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signin-userEmail" element={<Sso />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App