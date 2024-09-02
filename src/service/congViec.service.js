import { http } from "./config"

export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`)
  },
  getListJob: () => {
    return http.get("/cong-viec")
  },
  deleteJob: (id) => {
    return http.delete(`/cong-viec?id=${id}`)
  },
  getJobDetail: (id) => {
    return http.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`)
  },
}
