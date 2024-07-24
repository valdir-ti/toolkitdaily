import React from 'react'

type CardProps = {
  title: string,
  subtitle: string,
  icon: string
}

const Card = ({ title, subtitle, icon}: CardProps) => {
  return (
    <div className='bg-rose-100 w-full h-[180px] rounded-md pt-20 pl-6'>
      <h2>
        {title}
      </h2>
      <div className='flex'>
        <h5>
          {subtitle}
        </h5>
        <span>{icon}</span>
      </div>
    </div>
  )
}

export default Card