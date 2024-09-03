import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { congViecService } from "../../service/congViec.service"

import AvatarAltImg from "../../assets/images/avatar-alt.png"

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  const [listJob, setListJob] = useState([])

  // console.log(searchParam.get("tenCongViec"))
  // console.log(listJob)

  useEffect(() => {
    let tenCongViec = searchParam.get("tenCongViec")

    if (tenCongViec) {
      // Nếu có search param "tenCongViec", lấy danh sách công việc theo tên
      congViecService
        .layCongViecTheoTen(tenCongViec)
        .then((res) => {
          console.log(res)
          setListJob(res.data.content)
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      // Nếu không có search param, lấy toàn bộ danh sách công việc
      congViecService
        .getListJob()
        .then((res) => {
          console.log(res)
          setListJob(res.data.content)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [searchParam.get("tenCongViec")])

  return (
    <div className="container my-10">
      {searchParam.get("tenCongViec") ? (
        <h1 className="text-4xl font-bold">
          Results for{" "}
          {searchParam.get("tenCongViec")
            ? `"${searchParam.get("tenCongViec")}"`
            : ""}
        </h1>
      ) : (
        <h1 className="text-4xl font-bold">
          JOB LIST{" "}
          <span className="font-medium italic text-3xl">
            ({listJob.length} services)
          </span>
        </h1>
      )}

      <div className="grid grid-cols-4 gap-10 mt-10">
        {listJob.map((item, index) => {
          return (
            <div key={index} className="space-y-4 border rounded-md p-3">
              <img
                src={
                  searchParam.get("tenCongViec")
                    ? item.congViec?.hinhAnh
                    : item.hinhAnh
                }
                className="w-full"
                alt=""
              />
              {/* người tạo  */}
              <div className="flex items-center space-x-3">
                <img
                  src={
                    searchParam.get("tenCongViec") ? item.avatar : AvatarAltImg
                  }
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <h4 className="font-bold text-lg capitalize">
                  {searchParam.get("tenCongViec") ? item.tenNguoiTao : "admin"}
                </h4>
              </div>
              {/* đánh giá và tên công việc  */}
              <div>
                <h3>
                  {searchParam.get("tenCongViec")
                    ? item.congViec?.tenCongViec
                    : item.tenCongViec}
                </h3>
                <p>
                  <span className="text-yellow-400 space-x-2">
                    <i className="fa-solid fa-star"></i>
                    {searchParam.get("tenCongViec")
                      ? item.congViec?.saoCongViec
                      : item.saoCongViec}
                  </span>{" "}
                  <span className="text-gray-400">
                    (
                    {searchParam.get("tenCongViec")
                      ? item.congViec?.danhGia
                      : item.danhGia}
                    )
                  </span>
                </p>
              </div>
              {/* lựa chọn yêu thích và giá tiền công việc  */}
              <div className="flex justify-between items-center">
                <i className="fa-solid fa-heart"></i>
                <p className="uppercase">
                  Starting at{" "}
                  <span>
                    $
                    {searchParam.get("tenCongViec")
                      ? item.congViec?.giaTien
                      : item.giaTien}
                  </span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListJobPage
