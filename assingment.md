Assignment
You are tasked with creating a Weather Analytics Dashboard, a web-based
application that:
Displays current weather data
Shows forecasts
Allows users to explore historical trends
Offers interactive visualizations
This will help users understand both short-term and long-term weather patterns
for one or more locations.
✅ Requirements Breakdown
1. Core Features
🌦️ Dashboard
This is the main screen that shows summary cards for multiple cities.
Each card should display:
Current temperature
Weather condition icon (e.g., sunny, cloudy)
Maybe other quick info: humidity, wind speed, etc.
Support real-time updates.
🔍 Detailed View
When a user clicks on a city card, they should be taken to a dedicated page
or modal with more in-depth analytics.
Include:
5–7 day forecast
Assignment 1
Hour-by-hour forecast
Detailed stats (e.g., pressure, dew point, UV index)
💬 Search & Favorites
A search bar to look up cities using API-based autocomplete.
Ability to "favorite" a city to pin it on the dashboard.
Favorites should persist between sessions.
📈 Data Visualization
Use charts (via Recharts or similar) to show:
Temperature trends (hourly & daily)
Precipitation patterns
Wind speed/direction
Add hover effects, zooming, or date range selectors for interactivity.
⚙️ Settings
Allow users to switch between:
Celsius ↔ Fahrenheit
🔁 Real-time Data
Use an external API (like OpenWeatherMap or WeatherAPI) to fetch:
Live data
Forecasts
2. Technical Stack
⚛️ React(with Hooks)
📦 Redux / Redux Toolkit
Centralized state management for:
Assignment 2
Current weather data
Favorite cities
Temperature unit preferences
🔌 API Integration
Use a weather API like:
OpenWeatherMap
WeatherAPI
You'll need to handle:
API keys (with rate limiting)
Async data fetching
📊 Charts (Recharts or Similar)
Visualizations should be:
Clean, readable
Responsive (work on mobile too)
Interactive: Tooltips, clickable legends, etc.
✅ Bonus point
Authentication
Google sign in
Real time data fetching
Data should not be older than 60s
Caching
Cache data to reduce api calls