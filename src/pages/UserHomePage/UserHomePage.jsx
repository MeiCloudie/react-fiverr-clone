import React from "react"
import BannerHomePage from "./BannerHomePage"
import Categories from "./Categories"

const UserHomePage = () => {
  return (
    <div className="container flex flex-col h-full my-6">
      <BannerHomePage />
      <Categories />
    </div>
  )
}

export default UserHomePage
