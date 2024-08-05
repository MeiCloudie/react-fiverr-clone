import React from "react"
import LogoIcon from "../Icon/LogoIcon"
import { Link } from "react-router-dom"
import { path } from "../../common/path"

const UserHeader = () => {
  return (
    <header className="py-5">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo">
            <Link to={path.homePage}>
              <LogoIcon />
            </Link>
          </div>
          <nav className="header_navigate">
            <Link
              to={path.signIn}
              className="py-2 px-4 capitalize rounded-md hover:bg-gray-200 duration-300"
            >
              sign in
            </Link>
            <Link
              to={path.signUp}
              className="py-2 px-4 capitalize border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white"
            >
              Join
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default UserHeader
