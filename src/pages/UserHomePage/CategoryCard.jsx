import React from "react"

const CategoryCard = ({ icon, text }) => {
  return (
    <div className="card space-y-4 font-bold text-gray-700 p-5 rounded-lg shadow-lg border cursor-pointer hover:bg-green-200 duration-500">
      <div className="h-auto w-10">{icon}</div>
      <p>{text}</p>
    </div>
  )
}

export default CategoryCard
