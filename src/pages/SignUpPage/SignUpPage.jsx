import React, { useContext } from "react"
import signUpAnimation from "./../../assets/animation/signUpAnimation.json"
import { useLottie } from "lottie-react"
import InputCustom from "../../components/Input/InputCustom"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import { authService } from "../../service/auth.service"
import { NotificationContext } from "../../App"
import useResponsive from "../../hooks/useResponsive"
import LogoIcon from "../../components/Icon/LogoIcon"

const SignUpPage = () => {
  const isResponsive = useResponsive({
    mobile: 640,
    tablet: 1024,
    mac: 1440,
  })

  const navigate = useNavigate()
  const { showNotification } = useContext(NotificationContext)
  const options = {
    animationData: signUpAnimation,
    loop: true,
  }

  const { View } = useLottie(options)

  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values)
        authService
          .signUp(values)
          .then((res) => {
            console.log(res)
            showNotification(
              "Đăng ký thành công! Bạn hãy đăng nhập nhé!",
              "success",
              2000
            )
            setTimeout(() => {
              navigate("/sign-in")
            }, 1000)
          })
          .catch((err) => {
            console.log(err)
            showNotification(err.response.data.message, "error")
          })
      },
      validationSchema: yup.object({
        name: yup
          .string()
          .required("Please do not leave this field empty")
          .matches(/^[A-Za-zÀ-ỹ\s]+$/, "Please enter letters only"),
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
          className={`signUpPage_content ${
            isResponsive.tablet ? "block space-y-10" : "flex"
          } items-center`}
        >
          <div
            className={`signUpPage_img flex flex-col justify-center items-center ${
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
                Create a new account
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
            className={`signUpPage_form ${
              isResponsive.tablet ? "w-full" : "w-1/2"
            }`}
          >
            <form className="space-y-5 px-8" onSubmit={handleSubmit}>
              <h1 className="text-center text-4xl font-bold uppercase">
                SIGN UP TO JOIN WITH US
              </h1>
              <InputCustom
                name={"name"}
                onChange={handleChange}
                value={values.name}
                labelContent={"Full Name"}
                placeholder={"Type your full name..."}
                error={errors.name}
                touched={touched.name}
                onBlur={handleBlur}
              />
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
                  JOIN
                </button>
                <p className="text-center font-medium">
                  Already have an account? &nbsp;
                  <span>
                    <Link
                      to="/sign-in"
                      className="mt-3 text-green-600 inline-block hover:underline duration-300"
                    >
                      Sign in
                    </Link>
                  </span>
                </p>
              </div>
            </form>

            <p className="mt-28 px-10 leading-relaxed text-gray-600">
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

export default SignUpPage
