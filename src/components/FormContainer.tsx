import React, { useState } from 'react';
import "../App.css";
import { callApi } from '../utils';
import Button from './Button';
import Info from './Info';
import Input from './Input';




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
      try {
         e.preventDefault();
         const city = e.target.elements.city.value || "Madrid";
         const country = e.target.elements.country.value || "es";
         const data = await callApi(city, country);
         if (data.cod === 200) {
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
            throw (city && country) ? data.message : "Please enter the values";
         }
      } catch (error) {
         setError(error);
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