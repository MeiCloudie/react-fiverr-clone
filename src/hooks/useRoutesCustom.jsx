import React, { Suspense } from "react"
import { useRoutes } from "react-router-dom"
import UserTemplate from "../template/UserTemplate/UserTemplate"
import PageNotFound from "../components/PageNotFound/PageNotFound"
import { path } from "../common/path"
import LoginPage from "../pages/LoginPage/LoginPage"
// import ListJobPage from '../pages/ListJobPage/ListJobPage'
const ListJobPage = React.lazy(() => import("../pages/ListJobPage/ListJobPage"))
import WrapperSuggestJob from "../components/Wrapper/WrapperSuggestJob"
import AdminTemplate from "../template/AdminTemplate/AdminTemplate"
// import AdminLogin from '../pages/AdminLogin/AdminLogin'
const AdminLogin = React.lazy(() => import("../pages/AdminLogin/AdminLogin"))
import { Skeleton } from "antd"
import CreateUser from "../pages/CreateUser/CreateUser"
// import ManagerUser from '../pages/ManagerUser/ManagerUser'
const ManagerUser = React.lazy(() =>
  import("./../pages/ManagerUser/ManagerUser")
)

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: path.homePage,
      element: <UserTemplate />,
      children: [
        {
          path: path.listJob,
          element: (
            <Suspense fallback={<Skeleton />}>
              <ListJobPage />
            </Suspense>
          ),
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
    {
      path: path.admin,
      element: <AdminTemplate />,
      children: [
        {
          path: "manager-user",
          // index: true,
          element: (
            <Suspense fallback={<Skeleton />}>
              <ManagerUser />
            </Suspense>
          ),
        },
        {
          path: "create-user",
          element: <CreateUser />,
        },
      ],
    },
    {
      path: "/admin-login",
      element: (
        <Suspense fallback={<Skeleton />}>
          <AdminLogin />
        </Suspense>
      ),
    },
  ])
  return routes
}

export default useRoutesCustom
