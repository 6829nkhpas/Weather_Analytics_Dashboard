import React from 'react'
import { Link } from 'react-router-dom'
import { City } from '../types'
import { useAppSelector } from '../store/store'
import { formatTemp, formatWind } from '../utils/formatters'

export default function CityCard({ city }: { city: City }) {
  const key = `${city.lat},${city.lon}`
  const weatherState = useAppSelector(s => (s as any).weather.items[key])
  const unit = useAppSelector(s => (s as any).unit.unit) as 'metric' | 'imperial'
  const current = weatherState?.current ?? city.current
  const temp = formatTemp(current?.temp, unit)
  const wind = formatWind(current?.wind_speed, unit)
  const icon = current?.weather?.[0]?.icon
  return (
    <div className="card" style={{transition:'box-shadow 0.2s'}} onMouseEnter={(e)=>(e.currentTarget.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)')} onMouseLeave={(e)=>(e.currentTarget.style.boxShadow='0 1px 4px rgba(0,0,0,0.06)')}>
      <h3 style={{margin:'0 0 8px 0'}}>{city.name}, {city.country}</h3>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" style={{width:60, height:60}} />}
        <div style={{fontSize:28, fontWeight:600}}>{temp}</div>
      </div>
      <div style={{fontSize:14, color:'#666'}}>Humidity: {current?.humidity ?? '—'}%</div>
      <div style={{fontSize:14, color:'#666'}}>Wind: {wind}</div>
      <div style={{marginTop:12}}><Link to={`/city?lat=${city.lat}&lon=${city.lon}&name=${encodeURIComponent(city.name)}`} style={{color:'#1f77b4', textDecoration:'none', fontWeight:500}}>Details →</Link></div>
    </div>
  )
}
