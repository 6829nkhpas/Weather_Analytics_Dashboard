import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { signInWithGoogle } = useAuth()

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'80vh'}}>
      <div className="card" style={{maxWidth:400, textAlign:'center', padding:32}}>
        <h1 style={{marginTop:0}}>Weather Analytics</h1>
        <p style={{color:'#666', marginBottom:24}}>Sign in to view your personalized weather dashboard</p>
        <button 
          onClick={signInWithGoogle}
          style={{
            padding:'12px 24px',
            background:'#4285F4',
            color:'white',
            border:'none',
            borderRadius:6,
            fontSize:16,
            fontWeight:600,
            cursor:'pointer',
            display:'flex',
            alignItems:'center',
            gap:12,
            margin:'0 auto'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
            <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.184L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.438 15.983 5.482 18 9.003 18z"/>
            <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z"/>
            <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.426 0 9.003 0 5.482 0 2.438 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
