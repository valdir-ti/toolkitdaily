import React from 'react'

const Header = () => {
  return (
    <div className='h-[80px] bg-[#db2b42] text-white flex items-center justify-between p-2 w-full pl-32 pr-32'>
        <h3 className='font-bold'>
            Toolkit Daily
        </h3>
        <ul className='flex gap-10'>
            <li>IMC</li>
            <li>World Clock</li>
            <li>Wheater Forecast</li>
            <li>Other Tools</li>
        </ul>
        <div className='bg-rose-300 text-gray-800 rounded-md w-24 h-8 flex items-center justify-center text-sm'>Sign In</div>
    </div>
  )
}

export default Header