import React from 'react'

interface LogoProps{
    className?: string; 
}

const Logo: React.FC<LogoProps> = ({className}) => {
  return (
    <div className={`flex flex-row items-center ${className}`}>
    <span className="text-3xl tracking-tight font-semibold ml-3 inline-block relative bg-gradient-to-r from-neutral-500 to-neutral-800 text-transparent bg-clip-text z-10">
      100xZone{""}
    </span>
  </div>
  )
}

export default Logo