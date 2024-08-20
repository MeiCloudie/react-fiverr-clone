import { http } from "./config"

export const nguoiDungService = {
  getListUser: () => {
    return http.get("/users")
  },
  // NV2 : Tạo hàm xử lí gọi API xóa người dùng
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`)
  },
  createUser: (data) => {
    return http.post("/users", data)
  },
  uploadAvatar: (token, data) => {
    return http.post("/users/uploadAvatar", data, {
      headers: {
        token,
      },
    })
  },
}
