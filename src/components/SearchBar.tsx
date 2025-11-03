import React, { useState } from 'react'
import axios from 'axios'
import { useAppDispatch } from '../store/store'
import { addFavorite } from '../store/favoritesSlice'
import { City } from '../types'

export default function SearchBar(){
  const [q, setQ] = useState('')
  const [results, setResults] = useState<any[]>([])
  const dispatch = useAppDispatch()

  async function search(q: string){
    if (!q) return setResults([])
    try{
      const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
      const res = await axios.get('https://api.openweathermap.org/geo/1.0/direct', { params: { q, limit: 5, appid: apiKey } })
      setResults(res.data)
    }catch(e){
      console.error(e)
      setResults([])
    }
  }

  return (
    <div style={{position:'relative'}}>
      <input value={q} onChange={e=>{ setQ(e.target.value); search(e.target.value) }} placeholder="Search city" />
      <div style={{position:'absolute', background:'white', marginTop:4, width:300}}>
        {results.map(r=> (
          <div key={`${r.lat}-${r.lon}`} style={{padding:8, borderBottom:'1px solid #eee'}}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>{r.name}{r.state ? ', '+r.state : ''} — {r.country}</div>
              <button onClick={()=>{
                const city: City = { name: r.name, country: r.country, lat: r.lat, lon: r.lon }
                dispatch(addFavorite(city))
              }}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
