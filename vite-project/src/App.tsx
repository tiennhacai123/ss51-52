import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/b1,2/About'
import Contact from './components/b1,2/Contact'
import Home from './components/b1,2/Home'
import Home2 from './components/b1,2/Home2'
import Contact2 from './components/b1,2/Contact2'
import About2 from './components/b1,2/About2'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='' element={<Home></Home>}>
          <Route path='home2' element={<Home2></Home2>}></Route>
          <Route path='about2' element={<About2></About2>}></Route>
          <Route path='contact2' element={<Contact2></Contact2>}></Route>        </Route>
      </Routes>
    </div>
  )
}
