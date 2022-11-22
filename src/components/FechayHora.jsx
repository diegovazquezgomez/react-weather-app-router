import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

function FechayHora({weather: {dt, timezone, name, country}}) {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-white text-xl font-extralight' id='fechaHora'>
              {formatToLocalTime(dt, timezone)}
            </p>
        </div>
        <div className='flex items-center justify-center my-3'>
            <p className='text-white text-2xl font-medium' id='ciudad'>{`${name}`}</p>
            <p className='text-white text-md font-light' id='ciudad'>({`${country}`})</p>
        </div>
    </div>
  )
}

export default FechayHora