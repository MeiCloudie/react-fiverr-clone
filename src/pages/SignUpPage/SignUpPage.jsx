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

const SignUpPage = () => {
  const isResponsive = useResponsive({
    mobile: 576,
    tablet: 768,
    // laptop: 1440,
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
          .required("Vui lòng không bỏ trống")
          .matches(/^[A-Za-zÀ-ỹ\s]+$/, "Vui lòng nhập chữ"),
        email: yup
          .string()
          .required("Vui lòng không bỏ trống")
          .email("Vui lòng nhập đúng định dạng email"),
        password: yup
          .string()
          .required("Vui lòng không bỏ trống")
          .min(6, "Vui lòng tối thiểu 6 ký tự")
          .max(10, "Vui lòng nhập tối đa 10 ký tự"),
      }),
    })
  return (
    <div className="">
      <div className="container">
        <div
          className={`signUpPage_content ${
            isResponsive.mobile ? "block" : "flex"
          } items-center h-screen`}
        >
          <div
            className={`signUpPage_img ${
              isResponsive.mobile ? "w-full" : "w-1/2"
            }`}
          >
            {View}
          </div>
          <div
            className={`signUpPage_form ${
              isResponsive.mobile ? "w-full" : "w-1/2"
            }`}
          >
            <form className="space-y-5" onSubmit={handleSubmit}>
              <h1 className="text-center text-4xl font-medium uppercase">
                Đăng ký
              </h1>
              <InputCustom
                name={"name"}
                onChange={handleChange}
                value={values.name}
                labelContent={"Họ Tên"}
                placeholder={"Vui lòng nhập họ tên"}
                error={errors.name}
                touched={touched.name}
                onBlur={handleBlur}
              />
              <InputCustom
                name={"email"}
                onChange={handleChange}
                value={values.email}
                labelContent={"Email"}
                placeholder={"Vui lòng nhập email"}
                error={errors.email}
                touched={touched.email}
                onBlur={handleBlur}
              />
              <InputCustom
                name={"password"}
                onChange={handleChange}
                value={values.password}
                placeholder={"Vui lòng nhập mật khẩu"}
                labelContent={"Password"}
                typeInput="password"
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur}
              />
              <div>
                <button
                  type="submit"
                  className="inline-block w-full bg-black text-white py-2 px-5 rounded-md"
                >
                  Đăng ký
                </button>
                <Link className="mt-3 text-blue-600 inline-block hover:underline duration-300">
                  Đã có tài khoản? Đăng Nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
