import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Prevision({ titulo, items }) {
  console.log(items);
  
  return (
    <div>
      <div className="flex items-center justify-start my-6">
        <p className="text-white font-medium uppercase">{titulo}</p>
      </div>
      <hr className="my-2" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-5 text-white">
        {items.map((item) => {
            {item}
          <div className="flex flex-col items-center justify-center flex-auto">
            <p className="font-light text-sm">{item.title}</p>
            <img src={iconUrlFromCode(item.icon)} className="w-12 my-1"></img>
            <p className="font-medium">{item.temp.toFixed()}</p>
          </div>;
        })}
        <div className="flex flex-col items-center justify-center  bg-sky-500/10" >
          <p className="font-light text-sm">{items[0].title}</p>
          <img src={iconUrlFromCode(items[0].icon)} className="w-12 my-1"></img>
          <p className="font-medium">{items[0].temp.toFixed()}<span>º</span></p>
        </div>
        <div className="flex flex-col items-center justify-center  bg-sky-500/10">
          <p className="font-light text-sm">{items[1].title}</p>
          <img src={iconUrlFromCode(items[1].icon)} className="w-12 my-1"></img>
          <p className="font-medium">{items[1].temp.toFixed()}<span>º</span></p>
        </div>
        <div className="flex flex-col items-center justify-center  bg-sky-500/10">
          <p className="font-light text-sm">{items[2].title}</p>
          <img src={iconUrlFromCode(items[2].icon)} className="w-12 my-1"></img>
          <p className="font-medium">{items[2].temp.toFixed()}<span>º</span></p>
        </div>
        <div className="flex flex-col items-center justify-center  bg-sky-500/10">
          <p className="font-light text-sm">{items[3].title}</p>
          <img src={iconUrlFromCode(items[3].icon)} className="w-12 my-1"></img>
          <p className="font-medium">{items[3].temp.toFixed()}<span>º</span></p>
        </div>
        <div className="flex flex-col items-center justify-center  bg-sky-500/10">
          <p className="font-light text-sm">{items[4].title}</p>
          <img src={iconUrlFromCode(items[4].icon)} className="w-12 my-1"></img>
          <p className="font-medium">{items[4].temp.toFixed()}<span>º</span></p>
        </div>
      </div>
    </div>
  );
}

export default Prevision;
