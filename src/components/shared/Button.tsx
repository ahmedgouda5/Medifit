import React from 'react'

const Button = ({text,icon}:{text:string,icon:React.ReactNode}) => {
  return (
    <button className="bg-[#503217] hover-bg-[#8F7D6A] text-white py-2 px-4 rounded-lg flex items-center">
      {icon}
      <span className="ml-2 font-mono text-[12px]">{text}</span>
    </button>
  )
}

export default Button;