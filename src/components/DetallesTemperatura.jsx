import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime } from "../services/weatherService";
import { iconUrlFromCode } from "../services/weatherService";

function DetallesTemperatura({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    speed,
    humidity,
    feels_like,
    sunset,
    sunrise,
    timezone,
    description,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{description}</p>
      </div>
      <div className="grid grid-cols-3 items-center justify-center text-white py-1">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl ">
          {temp.toFixed()} <span className="font-light text-sm ">ºC</span>
        </p>
        <div className="grid grid-rows-3 justify-center place-items-start">
          <div className="flex font-light text-sm">
            <UilTemperature size="18" className="mr-1" />
            S. térmica:
            <span className="font-medium ml-1 mr-1">{temp.toFixed()}</span>ºC
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size="18" className="mr-1" />
            Humedad:
            <span className="font-medium ml-1 mr-1">{humidity}</span>%
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size="18" className="mr-1" />
            Viento:
            <span className="font-medium ml-1">{speed} </span>{" "}
            <span className="ml-1">km/H</span>
          </div>
        </div>
      </div>
      <hr className="mb-2"/>
      <div className="grid sm:grid-cols-1 md:flex items-center justify-center md:grid-cols-4 text-white ">
        <div className="flex flex-row justify-evenly items-center  mr-4">
          <UilSun size={48} className="flex items-center"/>
          <p className="font-light text-center ">
            Amanecer:
            <span className="font-medium ml-1">
              {formatToLocalTime(sunrise, timezone, "hh:mm")}
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-evenly items-center  mr-4">
          <UilSunset size={48} className="items-center"/>
          <p className="font-light text-center">
            Atardecer:
            <span className="font-medium ml-1">
              {formatToLocalTime(sunset, timezone, "hh:mm")}
            </span>
          </p>
        </div>
        <div className="flex flex-row justify-evenly items-center  mr-4">
          <UilArrowUp size={48} className="items-center"/>
          <p className="font-light text-center">
            Max:
            <span className="font-medium ml-1">{temp_max.toFixed()}</span>ºC
          </p>
        </div>
        <div className="flex flex-row justify-evenly items-center mr-4">
          <UilArrowDown size={48} className="items-center"/>
          <p className="font-light text-center">
            Min:
            <span className="font-medium ml-1">{temp_min.toFixed()}</span>ºC
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DetallesTemperatura;
