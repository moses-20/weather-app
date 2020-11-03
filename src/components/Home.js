import React, { useState } from 'react';
import keys from '../keys';

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function Home() {

  const dateBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (e) => {
    e.preventDefault();

    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((res) => res.json())
    .then((result) => {
        setQuery('');
        setWeather(result);
        console.log(result);
    });

  };

  return (
      <main>
        <div className='search-container'>
          <input
            type='text'
            placeholder='Search any city...'
            className='search-bar'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={e => {if(e.key === 'Enter'){ search(e)}}}
          />
          <input
            type='submit'
            value='Search'
            onClick={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div className='info-wrap'>
            <div className='location-container'>
              <div className='location'>
                <span>{weather.name}, {weather.sys.country} </span>
              </div>
              <div className='date'> {dateBuild(new Date())} </div>
            </div>
            <div className='weather-container'>
              <div className='temperature'>
                <h3> temperature <br/> <span>{Math.round(weather.main.temp)}°C</span> </h3>
              </div>
              <div className='weather'>
                <h3> weather <br/> <span>{weather.weather[0].main}</span> </h3>
              </div>
            </div>
          </div>
        ) : (
          <h1 className='null-void'> Search a city to get weather details </h1>
        )}
      </main>
  );
}

export default Home;