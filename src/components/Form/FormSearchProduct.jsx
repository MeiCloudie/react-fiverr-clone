import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { path } from "../../common/path"

const FormSearchProduct = () => {
  const navigate = useNavigate()
  const [valueSearch, setValueSearch] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // B1 thực hiện lấy dữ liệu người dùng (valueSearch)
    // B2 sử dụng useNavigate để chuyển hướng người dùng tới trang danh sách công việc
    navigate(`${path.listJob}?tenCongViec=${valueSearch}`)
    // B3 đưa dữ liệu người dùng đã nhập (keyword) vào query param khi chuyển hướng
  }

  const handleChange = (event) => {
    setValueSearch(event.target.value)
    console.log("handleChange")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between w-[500px] border rounded-md border-black pl-4">
        <input
          onChange={handleChange}
          className="flex-1 focus:border-none focus:outline-none"
          type="text"
          placeholder="Nhập tên công việc cần tìm kiếm"
        />
        <button className="p-2 text-sm" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  )
}

export default FormSearchProduct
