import React from "react"
import LogoIcon from "../Icon/LogoIcon"
import { Link } from "react-router-dom"
import { path } from "../../common/path"
import { useSelector } from "react-redux"
import { Avatar, Dropdown } from "antd"
import UserIcon from "../Icon/UserIcon"
import LogoutIcon from "../Icon/LogoutIcon"
import FormSearchProduct from "../Form/FormSearchProduct"

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
        <span>Đăng Xuất</span>
      </Link>
    ),
    key: "1",
  },
]

const UserHeader = () => {
  const { infoUser } = useSelector((state) => state.authSlice)

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">
          {infoUser.user.name.charAt(0)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
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
      </>
    )
  }

  return (
    <header className="py-5">
      <div className="container">
        <div className="header_content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-5">
            <Link to={path.homePage}>
              <LogoIcon />
            </Link>
            <FormSearchProduct />
          </div>
          <nav className="header_navigate">{checkUserLogin()}</nav>
        </div>
      </div>
    </header>
  )
}

export default UserHeader
