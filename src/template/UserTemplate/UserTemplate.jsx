import React from "react"
import UserHeader from "../../components/UserHeader/UserHeader"
import UserFooter from "../../components/UserFooter.jsx/UserFooter"
import { Outlet } from "react-router-dom"

const UserTemplate = () => {
  return (
    <>
      {/* Header */}
      <UserHeader />

      {/* Main */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <UserFooter />
    </>
  )
}

export default UserTemplate
