# Weather Analytics Dashboard

A modern, responsive weather analytics dashboard built with React, TypeScript, Redux Toolkit, and Firebase authentication. Displays current weather, forecasts, and interactive visualizations for multiple cities.

## ✨ Features

### Core Features
- 🌦️ **Dashboard** - Summary cards for multiple cities with real-time weather data
- 🔍 **Detailed View** - 5-7 day forecast, hourly forecast, and detailed stats
- 💬 **Search & Favorites** - Search cities with API autocomplete, save favorites (persisted)
- 📈 **Data Visualization** - Interactive charts (temperature, wind, precipitation)
- ⚙️ **Settings** - Toggle between Celsius/Fahrenheit (persisted)
- 🔁 **Real-time Data** - Weather data refreshes every 60 seconds, cached for performance

### Bonus Features
- 🔐 **Google Authentication** - Sign in with Google (Firebase)
- 📦 **Caching** - Smart caching to reduce API calls (60s TTL)
- ✅ **Tests** - Unit tests with Vitest
- 🎨 **Polished UI** - Modern styling with hover effects and gradients

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- OpenWeatherMap API key ([get one here](https://openweathermap.org/api))
- Firebase project with Google sign-in enabled ([setup guide](https://console.firebase.google.com))

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/6829nkhpas/Weather_Analytics_Dashboard.git
   cd Weather_Analytics_Dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure environment variables**
   
   Copy \`.env.example\` to \`.env\`:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   
   Edit \`.env\` and add your API keys

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   Open http://localhost:5173 in your browser.

## 🧪 Testing

\`\`\`bash
npm test
\`\`\`

## 📝 Assignment Completion

✅ **Core Requirements**: Dashboard, Detailed view, Search & favorites, Data visualization, Settings, Real-time data

✅ **Technical Stack**: React with Hooks, Redux Toolkit, API Integration, Charts (Recharts)

✅ **Bonus Features**: Google Authentication, Real-time data (<60s), Caching

## 🙏 Acknowledgments

- OpenWeatherMap for weather data
- Recharts for chart components
- Firebase for authentication
