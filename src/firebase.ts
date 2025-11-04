/// <reference types="vite/client" />

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Firebase configuration from environment variables
// To set up:
// 1. Create a Firebase project at https://console.firebase.google.com
// 2. Enable Google sign-in in Authentication > Sign-in method
// 3. Add your Firebase config to .env (see .env.example)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'demo-key',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'demo.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-project',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'demo.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789:web:abc123'
}

// Only initialize if we have a valid API key
let auth: any = null
let googleProvider: any = null

try {
  if (import.meta.env.VITE_FIREBASE_API_KEY && 
      import.meta.env.VITE_FIREBASE_API_KEY !== 'your_firebase_api_key') {
    const app = initializeApp(firebaseConfig)
    auth = getAuth(app)
    googleProvider = new GoogleAuthProvider()
  }
} catch (error) {
  console.warn('Firebase not configured, authentication disabled')
}

export { auth, googleProvider }
