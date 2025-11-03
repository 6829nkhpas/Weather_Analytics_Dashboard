import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City } from '../types'

interface State { cities: City[] }

const initialState: State = { cities: [] }

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<City>){
      const exists = state.cities.find(c=>c.lat===action.payload.lat && c.lon===action.payload.lon)
      if (!exists) state.cities.push(action.payload)
      try{ localStorage.setItem('favorites', JSON.stringify(state.cities)) }catch(e){}
    },
    loadFavorites(state){
      try{
        const raw = localStorage.getItem('favorites')
        if (raw) state.cities = JSON.parse(raw)
      }catch(e){}
    }
  }
})

export const { addFavorite, loadFavorites } = slice.actions
export default slice.reducer
