import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/store'
import { setUnit } from '../store/unitSlice'

export default function UnitToggle(){
  const unit = useAppSelector(s => (s as any).unit.unit)
  const dispatch = useAppDispatch()

  const btnStyle = (active: boolean) => ({
    padding:'6px 12px', 
    border:'1px solid #ccc', 
    borderRadius:4, 
    background: active ? '#1f77b4' : 'white', 
    color: active ? 'white' : '#333',
    fontWeight: active ? 600 : 400,
    cursor:'pointer'
  })

  return (
    <div style={{display:'flex', gap:4, alignItems:'center'}}>
      <button onClick={()=>dispatch(setUnit('metric'))} style={btnStyle(unit==='metric')}>°C</button>
      <button onClick={()=>dispatch(setUnit('imperial'))} style={btnStyle(unit==='imperial')}>°F</button>
    </div>
  )
}
