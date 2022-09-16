
import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../hooks';
import Search from '../Search';
import { connect } from 'react-redux';
import {
  clearCityData,
  getCity,
  getWeather,
  searchCities,
  setCurrentCity,
} from '../../redux/actions';
import Dropdown from '../Dropdown';
import WeatherDetail from './WeatherDetail';
import { getDate } from '../../unit';
import logoHome from '../../images/reactApihome.png';

const Sidebar = ({
  city,
  isFetching,
  weather,
  handleGetCity,
  handleSearchCities,
  handleGetWeather,
  handleClearCity,
  currentCity,
}) => {
  const [text, setText] = useState('');

  const defaultLocation = JSON.parse(localStorage.getItem('cities'));

  const value = useDebounce(text, 500);
  useEffect(() => {
    if (!value.trim()) {
      handleClearCity();
      return;
    }
    handleSearchCities(value);
  }, [value]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      handleGetWeather({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      handleGetCity({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  const handleSetValue = (value) => {
    handleGetWeather(value);
    setText('');
  };


  return (
    <div className="col-left">
      <div>
        <Search
          value={text}
          onChange={(valueInput) => setText(valueInput)}
          placeholder={'Search'}
          isSpining={isFetching}
        />
        <div className="relative">
          <div
            className={` absolute ${
              city?.length !== 0 ? 'max-h-40' : ''
            }`}
          >
            <Dropdown data={city} handleClick={handleSetValue} />
          </div>
        </div>
      </div>

        <div className='box'>
          { currentCity && weather &&  (
            <div className="box-center">
              <WeatherDetail
                cityName={currentCity?.name}
                images={`http://openweathermap.org/img/wn/${weather?.current?.weather[0]?.icon}@4x.png`}
                temp={Math.round(weather?.current?.temp - 273)}
                date={getDate(weather?.current?.dt, {weekday:'long' , hour: 'numeric', minute: 'numeric'})}
                clouds={weather?.current?.clouds}
                description={weather?.current?.weather[0].description}
              />
            </div>
          )}
        <div className='img'><img src={logoHome} width="100%" height="auto"/></div>
        </div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  city: state.data.city,
  weather: state.data.weather,
  isFetching: state.data.isFetching,
  currentCity: state.data.currentCity,
});
const mapDispatchToProp = (dispatch) => {
  return {
    handleSearchCities(value) {
      dispatch(searchCities(value));
    },
    handleGetCity(value) {
      dispatch(getCity(value));
    },
    handleGetWeather(value) {
      dispatch(getWeather(value));
      dispatch(setCurrentCity(value));
    },
    handleClearCity() {
      dispatch(clearCityData());
    },
  };
};

export default connect(mapStateToProp, mapDispatchToProp)(Sidebar);
