import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import UnitToggle from './components/UnitToggle'
import Dashboard from './components/Dashboard'
import CityDetail from './components/CityDetail'

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <h1><Link to="/">Weather Analytics</Link></h1>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <UnitToggle />
          <Link to="/">Home</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/city" element={<CityDetail />} />
      </Routes>
    </div>
  )
}
