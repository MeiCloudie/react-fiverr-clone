import React, { useEffect } from "react"
import useRoutesCustom from "./hooks/useRoutesCustom"
import { Bounce, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
// 1. Khởi tạo một context
export const NotificationContext = React.createContext()

function App() {
  const routes = useRoutesCustom()

  const showNotification = (content, type, duration = 4000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    })
  }

  return (
    <>
      <NotificationContext.Provider
        value={{
          showNotification: showNotification,
        }}
      >
        <ToastContainer />
        {routes}
      </NotificationContext.Provider>
    </>
  )
}

export default App
