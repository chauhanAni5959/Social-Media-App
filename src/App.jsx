import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import DetailsPage from './pages/DeatilsPage'


const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
