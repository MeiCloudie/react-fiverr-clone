import React from "react"
import { useRoutes } from "react-router-dom"
import UserTemplate from "../template/UserTemplate/UserTemplate"
import PageNotFound from "../components/PageNotFound/PageNotFound"
import { path } from "../common/path"
import LoginPage from "../pages/LoginPage/LoginPage"
import ListJobPage from "../pages/ListJobPage/ListJobPage"
import WrapperSuggestJob from "../components/Wrapper/WrapperSuggestJob"

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: path.listJob,
          element: <ListJobPage />,
        },
      ],
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
