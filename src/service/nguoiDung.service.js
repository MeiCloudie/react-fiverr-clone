import { http } from "./config"

export const nguoiDungService = {
  getListUser: () => {
    return http.get("/users")
  },
}
