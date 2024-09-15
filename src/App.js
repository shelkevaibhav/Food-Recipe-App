import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import RecipeId from './components/RecipeId'
import Categary from './components/Categary'
import Search from './components/Search'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:idMeal' element={<RecipeId />} />
          <Route path='/Categary/:name' element={<Categary />} />
          <Route path='/search/:searchTerm' element={<Search />} /> {/* Correct component reference */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
