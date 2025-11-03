import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import CityCard from './CityCard'
import { useAppSelector, useAppDispatch } from '../store/store'
import { loadFavorites } from '../store/favoritesSlice'
import { fetchWeather } from '../store/weatherSlice'

export default function Dashboard() {
  const dispatch = useAppDispatch()
  const favorites = useAppSelector(s => s.favorites.cities)

  useEffect(() => {
    dispatch(loadFavorites())
  }, [dispatch])

  // fetch current weather for each favorite and refresh every 60s
  useEffect(() => {
    if (favorites.length === 0) return
    const run = () => {
      favorites.forEach(f => dispatch(fetchWeather({ lat: f.lat, lon: f.lon })))
    }
    run()
    const id = setInterval(run, 60 * 1000)
    return () => clearInterval(id)
  }, [favorites, dispatch])

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
