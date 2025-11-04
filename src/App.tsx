import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import UnitToggle from './components/UnitToggle'
import Dashboard from './components/Dashboard'
import CityDetail from './components/CityDetail'
import Login from './components/Login'
import { useAuth } from './contexts/AuthContext'

export default function App() {
  const { user, loading, signOut } = useAuth()

  if (loading) {
    return <div className="app"><div className="card">Loading...</div></div>
  }

  // Allow access without authentication if Firebase is not configured
  const authRequired = import.meta.env.VITE_FIREBASE_API_KEY && 
                       import.meta.env.VITE_FIREBASE_API_KEY !== 'your_firebase_api_key'
  
  if (authRequired && !user) {
    return (
      <div className="app">
        <Login />
      </div>
    )
  }

  return (
    <div className="app">
      <div className="header">
        <h1><Link to="/">Weather Analytics</Link></h1>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          {user && (
            <div style={{fontSize:14, color:'#666'}}>
              {user.displayName || user.email}
            </div>
          )}
          <UnitToggle />
          {user && (
            <button 
              onClick={signOut}
              style={{
                padding:'6px 12px',
                border:'1px solid #ccc',
                borderRadius:4,
                background:'white',
                color:'#333',
                cursor:'pointer'
              }}
            >
              Sign out
            </button>
          )}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/city" element={<CityDetail />} />
      </Routes>
    </div>
  )
}
