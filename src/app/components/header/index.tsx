import React from 'react'

const Header = () => {
  return (
    <div className='h-[80px] bg-red-600 text-white flex items-center justify-between p-2 w-full absolute top-0'>
        <h3 className='font-bold ml-8'>
            Toolkit Daily
        </h3>
        <ul className='flex gap-10'>
            <li>IMC</li>
            <li>World Clock</li>
            <li>Wheater Forecast</li>
            <li>Other Tools</li>
        </ul>
        <div className='mr-8'>Sign In</div>
    </div>
  )
}

export default Header