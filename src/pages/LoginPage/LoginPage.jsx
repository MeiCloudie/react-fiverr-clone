import React, { useContext } from "react"
import signInAnimation from "./../../assets/animation/signInAnimation.json"
import { useLottie } from "lottie-react"
import InputCustom from "../../components/Input/InputCustom"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import { authService } from "../../service/auth.service"
import { setLocalStorage } from "../../utils/util"
import { NotificationContext } from "../../App"
import { useDispatch } from "react-redux"
import { getInfoUser } from "../../redux/authSlice"
import useResponsive from "../../hooks/useResponsive"
import LogoIcon from "../../components/Icon/LogoIcon"

const LoginPage = () => {
  const isResponsive = useResponsive({
    mobile: 640,
    tablet: 1024,
    mac: 1440,
  })
  console.log(isResponsive)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { showNotification } = useContext(NotificationContext)
  const options = {
    animationData: signInAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  // NV1 : thực hiện setup formik trong phần form login page
  // NV2 : gắn các thuộc tính cần cho các input vào 2 component inputcustom
  // NV3 : gắn validation cho 2 inputcustom : email (required,email) - password (required, min(6), max(10))
  // NV4 : thực hiện test phần form xem các onsubmit và validation hoạt động có đúng hay k
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
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
            // B1 thực hiện lưu trữ ở localStorage
            setLocalStorage("user", res.data.content)

            dispatch(getInfoUser(res.data.content))

            // B2 thực hiện thông báo và chuyển hướng người dùng
            showNotification(
              "Đăng nhập thành công bạn sẽ được chuyển hướng về trang chủ",
              "success",
              2000
            )
            setTimeout(() => {
              navigate("/")
            }, 1000)
          })
          .catch((err) => {
            console.log(err)
            showNotification(err.response.data.message, "error")
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
          className={`loginPage_content ${
            isResponsive.tablet ? "block space-y-10" : "flex"
          } items-center`}
        >
          <div
            className={`loginPage_img flex flex-col justify-center items-center ${
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
                Hey there, <br />
                welcome back!
              </h1>
              <p
                className={`${
                  isResponsive.mobile ? "text-lg" : "text-2xl"
                } font-medium italic`}
              >
                Access to talent and businesses across the globe
              </p>
            </div>

            {/* image animation */}
            <div>{View}</div>

            {/* more info */}
            <div className={`${isResponsive.mobile ? "space-x-4 text-sm" : "space-x-10"} flex mt-20`}>
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
            className={`loginPage_form ${
              isResponsive.tablet ? "w-full" : "w-1/2"
            }`}
          >
            <form className="space-y-5 px-8" onSubmit={handleSubmit}>
              <h1 className="text-center text-4xl font-bold uppercase">
                LOGIN
              </h1>
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
              <div className="">
                <button
                  type="submit"
                  className="my-4 inline-block w-full font-bold bg-green-800 text-white py-2 px-5 rounded-md hover:bg-green-600 duration-200"
                >
                  LOGIN
                </button>
                <p className="text-center font-medium">
                  Don't have an account? &nbsp;
                  <span>
                    <Link
                      to="/sign-up"
                      className="mt-3 text-green-600 inline-block hover:underline duration-300"
                    >
                      Join here
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

export default LoginPage
