import React, { useState } from 'react';
import "../App.css";
import Button from './Button';
import Info from './Info';
import Input from './Input';

const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;



const FormContainer = () => {
   const [state, setState] = useState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
   });

   const [error, setError] = useState<string | null>(null);

   const getWeather = async (e: any) => {
      e.preventDefault();
      const city = e.target.elements.city.value || "Madrid";
      const country = e.target.elements.country.value || "es";
      const api_call = await fetch(
         `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const data = await api_call.json();
      if (city && country) {
         setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
         });
         setError("");
      } else {
         setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
         });
         setError("Please enter the values.")
      }
   };

   return (
      <div className="col-7 form-container">
         <form onSubmit={getWeather}>
            <Input type="text" name="city" placeholder="Madrid" />
            <Input type="text" name="country" placeholder="es" />
            <Button type="submit" text="Get Weather" />
         </form>
         <div className="weather__info">
            {state.city && state.country && <Info label="Location" value={`${state.city}, ${state.country}`} />}
            {state.temperature && <Info label="Temperature" value={`${state.temperature}`} />}
            {state.humidity && <Info label="Humidity" value={`${state.humidity}`} />}
            {state.description && <Info label="Conditions" value={`${state.description}`} />}
            {error && (
               <p className="weather__error">{error}</p>
            )}
         </div>
      </div>
   )
}

export default FormContainer;