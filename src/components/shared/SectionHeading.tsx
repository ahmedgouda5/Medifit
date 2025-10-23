import React from 'react'

const SectionHeading = ({title}:{title:string}) => {
  return (
    <div className="text-center  pb-[50px] md:pb-[70px]">
      <h2 className=" text-[30px] md:text-[40px] font- text-[#503217]">{title}</h2>
    </div>
  )
}

export default SectionHeading