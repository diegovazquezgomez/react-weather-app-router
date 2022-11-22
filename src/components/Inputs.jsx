import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";


function Inputs({setQuery, units, setUnits}) {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <>
      <div className="text-center">
        <p className="text-white">Introduzca ciudad: </p>
      </div>
      <div className="flex flex-row  items-center justify-center ">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Búsqueda"
          className="text-xl w-3/4 font-light p-1 shadow-xl capitalize placeholder:lowercase focus:outline-teal-300"
        ></input>
        <UilSearch
          size={25}
          className="text-white  ml-2 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white  ml-2 cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row  items-center  justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          ºC
        </button>
        <p className="text-xl text-white mx-1"> | </p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          ºF
        </button>
      </div>
    </>
  );
}

export default Inputs;
