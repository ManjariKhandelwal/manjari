//https://api.openweathermap.org/data/2.5/weather?q=pune&appid=aca1cf50283aa0acc1fe12e76544053a
import React from 'react';
import "./style.css"
import { useState ,useEffect } from 'react';
import WeatherCard from './WeatherCard';

const Temp = () => {
    const [searchValue,setSearchValue]=useState("pune");
    const [tempInfo,setTempInfo]=useState({})
    const getWeatherInfo=async()=>{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=aca1cf50283aa0acc1fe12e76544053a`;
            let res=await fetch(url);
            let data=await res.json();
            console.log(data);
            const{temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;
            const myNewWeatherInfo={
                temp,humidity,pressure,weathermood,speed,country,sunset,name
            };
            setTempInfo(myNewWeatherInfo);
            console.log(sunset);
        }catch(error){
            console.log("error");
        }
    }
    useEffect(()=>{getWeatherInfo();},[])

    return (
        <>
        <div className='wrap'>
        <div className='search'>
            <input type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}></input>

            <button className='searchButton' type='button' onClick={getWeatherInfo}>Search</button>
        </div>
            
        </div>
        {/* our temp card */}
        <WeatherCard tempInfo={tempInfo} />
        </>
    );
};

export default Temp;