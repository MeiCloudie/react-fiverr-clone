import React, { useContext } from "react"
import InputCustom from "../../components/Input/InputCustom"
import { useFormik } from "formik"
import { authService } from "../../service/auth.service"
import { NotificationContext } from "../../App"
import { getLocalStorage, setLocalStorage } from "../../utils/util"
import { Link, useNavigate } from "react-router-dom"
import { getInfoUser } from "../../redux/authSlice"
import { useDispatch } from "react-redux"
import LogoIcon from "../../components/Icon/LogoIcon"
import adminLoginAnimation from "./../../assets/animation/adminLoginAnimation.json"
import { useLottie } from "lottie-react"
import * as yup from "yup"
import useResponsive from "../../hooks/useResponsive"

const AdminLogin = () => {
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isResponsive = useResponsive({
    mobile: 640,
    tablet: 1024,
    mac: 1440,
  })

  const options = {
    animationData: adminLoginAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  const { values, handleSubmit, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values)
        authService
          .signIn(values)
          .then((res) => {
            console.log(res)
            if (res.data.content.user.role == "USER") {
              showNotification(
                "You do not have permission to access this page",
                "error"
              )
              let soLanViPham = getLocalStorage("viPham")
              if (!soLanViPham) {
                setLocalStorage("viPham", 1)
              } else {
                soLanViPham++
                soLanViPham == 3
                  ? (window.location.href = "https://google.com")
                  : setLocalStorage("viPham", soLanViPham)
              }
            } else {
              // B1 thực hiện lưu trữ ở localStorage
              setLocalStorage("user", res.data.content)
              dispatch(getInfoUser(res.data.content))
              navigate("/admin")
            }
          })
          .catch((err) => {
            console.log(err)
            showNotification("An error occurred", "error")
          })
      },
      validationSchema: yup.object({
        email: yup
          .string()
          .required("Please do not leave this field empty")
          .email("Please enter a valid email address"),
        password: yup
          .string()
          .required("Please do not leave this field empty")
          .min(6, "Please enter at least 6 characters")
          .max(10, "Please enter no more than 10 characters"),
      }),
    })

  return (
    <div className="bg-green-100 h-screen">
      {/* Logo */}
      <div className={`${isResponsive.mac ? "px-10 pt-10" : "px-52 py-12"}`}>
        <LogoIcon />
      </div>

      {/* Main */}
      <div className="container px-6 py-10 bg-green-100">
        <div
          className={`adminPage_content ${
            isResponsive.tablet ? "block space-y-10" : "flex"
          } items-center`}
        >
          <div
            className={`adminPage_img flex flex-col justify-center items-center ${
              isResponsive.tablet ? "w-full" : "w-1/2"
            }`}
          >
            {/* title */}
            <div className="p-10 space-y-4">
              <h1
                className={`${
                  isResponsive.mobile ? "text-4xl" : "text-7xl"
                } font-bold leading-tight`}
              >
                This is the <br />
                administration system
              </h1>
              <p
                className={`${
                  isResponsive.mobile ? "text-lg" : "text-2xl"
                } font-medium italic`}
              >
                Welcome back admin!
              </p>
            </div>

            {/* image animation */}
            <div className="w-1/3 h-auto">{View}</div>

            {/* more info */}
            <div
              className={`${
                isResponsive.mobile ? "space-x-4 text-sm" : "space-x-10"
              } flex mt-20`}
            >
              <Link className="font-medium hover:text-green-700 duration-200">
                Terms of Service
              </Link>
              <Link className="font-medium hover:text-green-700 duration-200">
                Privacy Policy
              </Link>
              <Link className="font-medium hover:text-green-700 duration-200">
                Insurance Licenses
              </Link>
            </div>
          </div>
          <div
            className={`admin_login_form ${
              isResponsive.tablet ? "w-full" : "w-1/2"
            } flex flex-col justify-center h-full`}
          >
            <h2 className="text-3xl font-bold uppercase text-center mb-5">
              Login for admin
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputCustom
                name={"email"}
                onChange={handleChange}
                value={values.email}
                labelContent={"Email"}
                placeholder={"Type your email..."}
                error={errors.email}
                touched={touched.email}
                onBlur={handleBlur}
              />
              <InputCustom
                name={"password"}
                onChange={handleChange}
                value={values.password}
                placeholder={"Type your password..."}
                labelContent={"Password"}
                typeInput="password"
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur}
              />
              <div>
                <button
                  type="submit"
                  className="my-4 inline-block w-full font-bold bg-green-800 text-white py-2 px-5 rounded-md hover:bg-green-600 duration-200"
                >
                  LOGIN
                </button>
                <p className="text-center font-medium">
                  Return to the user's home page? &nbsp;
                  <span>
                    <Link
                      to="/"
                      className="mt-3 text-green-600 inline-block hover:underline duration-300"
                    >
                      Click here
                    </Link>
                  </span>
                </p>
              </div>
            </form>

            <p className="mt-36 px-10 leading-relaxed text-gray-600">
              By joining, you agree to the Fiverr Terms of Service and to
              occasionally receive emails from us. Please read our Privacy
              Policy to learn how we use your personal data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
