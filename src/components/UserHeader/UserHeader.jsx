import React from "react"
import { Link } from "react-router-dom"
import LogoIcon from "../Icon/LogoIcon"
import { path } from "../../common/path"
import { useSelector } from "react-redux"
import { Avatar, Dropdown } from "antd"
import UserIcon from "../Icon/UserIcon"
import LogoutIcon from "../Icon/LogoutIcon"
import FormSeachProduct from "../Form/FormSearchProduct"
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob"
import DeveloperTestingModeAlert from "./DeveloperTestingModeAlert"
import useResponsive from "../../hooks/useResponsive"
const items = [
  {
    label: (
      <Link className="flex space-x-2 items-center">
        <UserIcon />
        <span>Thông tin cá nhân</span>
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link className="flex space-x-2 items-center">
        <LogoutIcon />
        <span>Đăng xuất</span>
      </Link>
    ),
    key: "1",
  },
]

const UserHeader = () => {
  const { infoUser } = useSelector((state) => state.authSlice)

  const isResponsive = useResponsive({
    mobile: 640,
    tablet: 1024,
    mac: 1440,
  })

  // console.log(isResponsive)

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar
          size={40}
          className="cursor-pointer uppercase hover:bg-green-700 duration-300"
        >
          {infoUser.user.name.slice(0, 1)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className="py-2 px-4 hover:text-green-500 duration-300"
        >
          Sign In
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white "
        >
          Join
        </Link>
      </>
    )
  }

  return (
    <div className="sticky top-0 z-50">
      <header className="py-5 border-b shadow-md bg-white">
        <div className="container px-6">
          <div className="header_content flex items-center justify-between">
            <div className="header_logo flex items-center space-x-5">
              <Link to={path.homePage}>
                <LogoIcon />
              </Link>

              <WrapperSuggestJob>
                <FormSeachProduct />
              </WrapperSuggestJob>
            </div>

            <nav
              className={`header_navigate font-bold text-gray-600 ${
                isResponsive.mac ? "text-md space-x-2" : "text-lg space-x-5"
              }`}
            >
              <Link
                className={`${
                  isResponsive.tablet || isResponsive.mobile
                    ? "hidden"
                    : "py-2 px-4 capitalize hover:text-green-500 duration-300"
                }`}
              >
                Fiverr Pro <i className="fa-solid fa-angle-down"></i>
              </Link>

              <Link
                className={`${
                  isResponsive.tablet || isResponsive.mobile
                    ? "hidden"
                    : "py-2 px-4 capitalize hover:text-green-500 duration-300"
                }`}
              >
                Explore <i className="fa-solid fa-angle-down"></i>
              </Link>

              <Link
                className={`${
                  isResponsive.tablet || isResponsive.mobile
                    ? "hidden"
                    : "py-2 px-4 capitalize hover:text-green-500 duration-300"
                }`}
              >
                <i className="fa-solid fa-globe"></i> English
              </Link>

              <Link
                className={`${
                  isResponsive.tablet || isResponsive.mobile
                    ? "hidden"
                    : "py-2 px-4 capitalize hover:text-green-500 duration-300"
                }`}
              >
                Become a Seller
              </Link>

              {checkUserLogin()}
            </nav>
          </div>
        </div>
      </header>

      <div className="my-2 container">
        <DeveloperTestingModeAlert />
      </div>
    </div>
  )
}

export default UserHeader
