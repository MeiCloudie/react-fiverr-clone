import React, { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { congViecService } from "../../service/congViec.service"

import AvatarAltImg from "../../assets/images/avatar-alt.png"

import { DownOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { Button, Dropdown, message, Space } from "antd"
import { path } from "../../common/path"

const handleMenuClick = (e) => {
  message.info("Coming Soon")
  console.log("click", e)
}

const items = [
  {
    label: "Coming Soon",
    key: "1",
    icon: <InfoCircleOutlined />,
  },
]

const menuProps = {
  items,
  onClick: handleMenuClick,
}

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
        <h1 className="text-4xl">
          Results for{" "}
          <span className="font-bold">
            {searchParam.get("tenCongViec")
              ? `"${searchParam.get("tenCongViec")}"`
              : ""}
          </span>
        </h1>
      ) : (
        <h1 className="text-4xl font-bold">JOB LIST</h1>
      )}

      <div className="my-6 space-x-4">
        <Dropdown menu={menuProps}>
          <Button className="p-5">
            <Space>
              <span className="font-bold text-lg">Category</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Dropdown menu={menuProps}>
          <Button className="p-5">
            <Space>
              <span className="font-bold text-lg">Logo options</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Dropdown menu={menuProps}>
          <Button className="p-5">
            <Space>
              <span className="font-bold text-lg">Seller details</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Dropdown menu={menuProps}>
          <Button className="p-5">
            <Space>
              <span className="font-bold text-lg">Budget</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Dropdown menu={menuProps}>
          <Button className="p-5">
            <Space>
              <span className="font-bold text-lg">Delivery time</span>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-500">
          {listJob.length} services available
        </h3>

        <div className="flex justify-center items-center">
          <h3 className="text-lg font-bold text-gray-500">Sort by:</h3>
          <Dropdown menu={menuProps}>
            <Button className="border-none">
              <Space>
                <span className="font-bold text-lg">Relevance</span>
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mt-5">
        {listJob.map((item, index) => {
          return (
            <Link
              to={
                searchParam.get("tenCongViec")
                  ? `${path.jobDetail}/${item.congViec?.id}`
                  : `${path.jobDetail}/${item.id}`
              }
            >
              <div
                key={index}
                className="space-y-4 border rounded-lg shadow-lg p-4"
              >
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
                      searchParam.get("tenCongViec")
                        ? item.avatar
                        : AvatarAltImg
                    }
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <h4 className="font-bold text-lg capitalize">
                      {searchParam.get("tenCongViec")
                        ? item.tenNguoiTao
                        : "admin"}
                    </h4>
                    <p className="text-gray-500 text-sm">Level 2 Seller</p>
                  </div>
                </div>
                {/* đánh giá và tên công việc  */}
                <div className="space-y-4">
                  <h3>
                    {searchParam.get("tenCongViec")
                      ? item.congViec?.tenCongViec
                      : item.tenCongViec}
                  </h3>
                  <p>
                    <span className="text-yellow-400">
                      <i className="fa-solid fa-star"></i>
                      {searchParam.get("tenCongViec")
                        ? ` ${item.congViec?.saoCongViec}.0`
                        : ` ${item.saoCongViec}.0`}
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
                <hr />
                <div className="flex justify-between items-center text-gray-500 font-medium">
                  <span className="text-xl hover:text-red-600 duration-200 cursor-pointer">
                    <i className="fa-solid fa-heart"></i>
                  </span>
                  <p className="uppercase text-md">
                    Starting at{" "}
                    <span className="text-xl">
                      $
                      {searchParam.get("tenCongViec")
                        ? item.congViec?.giaTien
                        : item.giaTien}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ListJobPage
