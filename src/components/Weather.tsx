import React, { useState } from "react"
import SearchBar from "./SearchBar"
import WeatherDetail from "./WeatherDetail"
import '../styles/Weather.css'
import useGetWeather from "../hooks/useGetWeather"

const Weather = () => {
    const [city, setCity] = useState<string>('')
    const [weather, loading, error, getWeather] = useGetWeather(city)
console.log(error);

    return (
        <>
            <div className="Weather">
                <SearchBar city={city} setCity={setCity} />
                <button onClick={() => getWeather()} disabled={loading}>
                    {loading ? 'Loading...' : 'Get Weather'}
                </button>
            </div>
            {weather && <WeatherDetail weather={weather} />}
            {error && <div className="error">{error}</div>}
        </>
    )

}

export default Weather;