import React from "react";

function TopButtons() {
  const ciudades = [
    {
      id: 1,
      title: "Valladolid",
    },
    {
      id: 2,
      title: "Madrid",
    },
    {
      id: 3,
      title: "Barcelona",
    },
    {
      id: 4,
      title: "Sevilla",
    },
    {
      id: 5,
      title: "Valencia",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-around my-6 " >
        {ciudades.map((ciudad) => (
          <button className="text-white text-lg font-medium" key={ciudad.id}>
            {ciudad.title}
          </button>
        ))}
      </div>
    </>
  );
}

export default TopButtons;
