import React from 'react'

const Footer = () => {
  return (
    <div className='h-[120px] bg-red-600 text-white flex items-center justify-between p-2 w-full pl-8 pr-8 absolute bottom-0'>
        <div className='ml-8'>
            <h3 className='flex flex-col font-bold text-[24px]'>
                Toolkit Daily
            </h3>
            <span className='font-sans text-[12px]'>
                Stay ahead with accurate wheater information
            </span>
        </div>
        <ul className='mr-8 text-[12px]'>
            <li>Real-time data</li>
            <li>Hourly Forecast</li>
            <li>Weekly prediction</li>
            <li>User manual</li>
            <li>Get in touch</li>
        </ul>
    </div>
  )
}

export default Footer