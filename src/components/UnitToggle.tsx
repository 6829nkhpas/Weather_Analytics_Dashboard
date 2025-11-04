import React from 'react'
import { useAppSelector, useAppDispatch } from '../store/store'
import { setUnit } from '../store/unitSlice'

export default function UnitToggle(){
  const unit = useAppSelector(s => (s as any).unit.unit)
  const dispatch = useAppDispatch()

  return (
    <div style={{display:'flex', gap:8, alignItems:'center'}}>
      <button onClick={()=>dispatch(setUnit('metric'))} style={{fontWeight: unit==='metric' ? 700:400}}>°C</button>
      <button onClick={()=>dispatch(setUnit('imperial'))} style={{fontWeight: unit==='imperial' ? 700:400}}>°F</button>
    </div>
  )
}
