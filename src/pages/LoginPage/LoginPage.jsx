import React from "react"
import { useLottie } from "lottie-react"
import signInAnimation from "../../assets/animation/signInAnimation.json"

const LoginPage = () => {
  const options = {
    animationData: signInAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  return (
    <div className="">
      <div className="container">
        <div className="loginPage_content flex items-center h-screen">
          <div className="loginPage_img w-1/2">{View}</div>
          <div className="loginPage_form w-1/2">
            <form action="">
              <h1>Giao diện đăng nhập</h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
