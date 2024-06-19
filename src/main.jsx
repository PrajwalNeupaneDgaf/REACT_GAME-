import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WeatherProvider from './Context/WeatherProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <WeatherProvider>
 <App/>
 </WeatherProvider>
 
)
