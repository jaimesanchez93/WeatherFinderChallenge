const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

export async function callApi(city: string, country: string) {
   try {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`);
      const data = await api_call.json();
      return data;
   } catch (error) {
      throw new Error(error);
   }
}