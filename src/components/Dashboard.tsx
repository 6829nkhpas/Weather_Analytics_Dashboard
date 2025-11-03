import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import CityCard from './CityCard'
import { useAppSelector, useAppDispatch } from '../store/store'
import { loadFavorites } from '../store/favoritesSlice'

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(s => s.favorites.cities)

  useEffect(() => {
    dispatch(loadFavorites())
  }, [dispatch])

  return (
    <div>
      <div className="search"><SearchBar /></div>
      <h2>Favorites</h2>
      <div className="grid">
        {favorites.length === 0 && <div className="card">No favorites yet — search for a city to add.</div>}
        {favorites.map(f => (
          <CityCard key={`${f.lat},${f.lon}`} city={f} />
        ))}
      </div>
    </div>
  )
}
