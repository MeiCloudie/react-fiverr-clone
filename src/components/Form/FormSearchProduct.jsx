import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { path } from "../../common/path"
import { Dropdown, Space } from "antd"
import { congViecService } from "../../service/congViec.service"
import useDebounce from "../../hooks/useDebounce"

const FormSeachProduct = ({ setOpenDropdown, handleGetValueChildren }) => {
  const navigate = useNavigate()
  const [valueSearch, setValueSearch] = useState("")

  useEffect(() => {
    if (setOpenDropdown && handleGetValueChildren) {
      if (!valueSearch) {
        setOpenDropdown(false)
      }
      handleGetValueChildren(valueSearch)
    }
  }, [valueSearch])

  const handleSubmit = (event) => {
    event.preventDefault()
    // B1 thực hiện lấy dữ liệu người dùng (valueSearch)
    // B2 sử dụng useNavigate để chuyển hướng người dùng tới trang danh sách công việc
    navigate(`${path.listJob}?tenCongViec=${valueSearch}`)
    // B3 đưa dữ liệu người dùng đã nhập (keyword) vào query param khi chuyển hướng
  }

  const handleChange = (event) => {
    setValueSearch(event.target.value)
    // B1: xử lí hành vi của phần gợi ý: khi người dùng nhập dữ liệu, sẽ bắt đầu thực hiện lấy dữ liệu keyword và gọi API tới backend để tìm kiếm sản phẩm được gợi ý
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between w-[550px] border rounded-md border-black bg-white pl-4">
          <input
            onChange={handleChange}
            className="flex-1 focus:border-none focus:outline-none"
            type="text"
            placeholder="What service are you looking for today?"
          />
          <button
            type="submit"
            className="py-2 px-3 m-1 rounded-md text-sm bg-green-950 text-white hover:bg-green-700 duration-300"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  )
}

export default FormSeachProduct
