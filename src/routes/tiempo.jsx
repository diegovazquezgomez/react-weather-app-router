import TopButtons from "../components/TopButtons";
import Inputs from "../components/Inputs";
import FechayHora from "../components/FechayHora";
import DetallesTemperatura from "../components/DetallesTemperatura";
import Prevision from "../components/Prevision";
import getFormattedWeatherData from "../services/weatherService";
import { useEffect, useState } from "react";

export default function Tiempo() {
  const [query, setQuery] = useState({ q: "madrid" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };
  return (
  
      <div>
        <h1 className="text-2xl text-teal-500 text-center">Tiempo</h1>
        <div className={`mx-auto max-w-screen-md mt-2 py-2 md:px-32 px-12 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
          <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

          {weather && (
            <div>
              <FechayHora weather={weather} />
              <DetallesTemperatura weather={weather} />
              <Prevision titulo="Previsión Horaria" items={weather.hourly} />
              <Prevision titulo="Previsión Diaria" items={weather.daily} />
            </div>
          )}
        </div>
      </div>
    
  );
}
