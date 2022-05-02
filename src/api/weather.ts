const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/weather?q=${city}&appid=e29bf8b4457d73b249c25a4ca0e05bb6`;

  if (typeof city === 'object') {
    url = `${baseUrl}/weather?lat=${city.lat}&lon=${city.lng}&appid=e29bf8b4457d73b249c25a4ca0e05bb6`;
  }
  return await (await fetch(url)).json();
};

export const fetchExtendedForecastData = async (city: string | { lat: number; lng: number }) => {
  let url = `${baseUrl}/forecast/daily?q=${city}&appid=e29bf8b4457d73b249c25a4ca0e05bb6`;

  if (typeof city === 'object') {
    url = `${baseUrl}/forecast/daily?lat=${city.lat}&lon=${city.lng}&appid=e29bf8b4457d73b249c25a4ca0e05bb6`;
  }

  return await (await fetch(url)).json();
};
