import React from "react"
import useResponsive from "../../hooks/useResponsive"

const CategoryCard = ({ icon, text }) => {
  const isResponsive = useResponsive({
    mobile: 640,
    tablet: 1024,
    mac: 1440,
  })

  return (
    <div className="card space-y-4 font-bold text-gray-700 p-5 rounded-lg shadow-lg border cursor-pointer hover:bg-green-200 duration-500">
      <div className="h-auto w-10">{icon}</div>
      <p className={`${isResponsive.mac ? "text-sm" : "text-md"}`}>{text}</p>
    </div>
  )
}

export default CategoryCard
