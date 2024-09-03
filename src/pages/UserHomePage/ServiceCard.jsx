import React from "react"

const ServiceCard = ({ text, imageSrc, bgColor }) => {
  return (
    <div
      className={`card flex flex-col justify-center ${bgColor} space-y-4 font-bold text-white p-4 rounded-lg shadow-lg border cursor-pointer`}
    >
      <p className="text-lg">{text}</p>
      <img src={imageSrc} alt="" className="rounded-lg" />
    </div>
  )
}

export default ServiceCard
