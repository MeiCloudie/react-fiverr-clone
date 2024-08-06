import React from "react"
import { useRoutes } from "react-router-dom"
import UserTemplate from "../template/UserTemplate/UserTemplate"
import PageNotFound from "../components/PageNotFound/PageNotFound"
import { path } from "../common/path"
import LoginPage from "../pages/LoginPage/LoginPage"

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
    },
    {
      path: path.pageNotFound,
      element: <PageNotFound />,
    },
    {
      path: path.signIn,
      element: <LoginPage />,
    },
  ])
  return routes
}

export default useRoutesCustom
