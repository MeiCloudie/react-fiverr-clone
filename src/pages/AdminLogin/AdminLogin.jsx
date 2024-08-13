import React, { useContext } from "react"
import InputCustom from "../../components/Input/InputCustom"
import { useFormik } from "formik"
import { authService } from "../../service/auth.service"
import { NotificationContext } from "../../App"
import { getLocalStorage, setLocalStorage } from "../../utils/util"
import { useNavigate } from "react-router-dom"
import { getInfoUser } from "../../redux/authSlice"
import { useDispatch } from "react-redux"

const AdminLogin = () => {
  const { showNotification } = useContext(NotificationContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { values, handleSubmit, handleChange } = useFormik({
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
              "Bạn không có quyền truy cập vào trang này",
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
          showNotification("Có lỗi xảy ra", "error")
        })
    },
  })

  return (
    <div>
      <div className="container">
        <div className="admin_login flex h-screen">
          <div className="admin_login_image w-1/2"></div>
          <div className="admin_login_form w-1/2 flex flex-col justify-center h-full">
            <h2 className="text-3xl font-bold text-center mb-5">
              Đăng nhập dành cho admin
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputCustom
                name="email"
                labelContent="Email"
                value={values.email}
                onChange={handleChange}
              />
              <InputCustom
                name="password"
                labelContent="Mật khẩu"
                typeInput="password"
                value={values.password}
                onChange={handleChange}
              />
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full block bg-black text-white rounded-md"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
