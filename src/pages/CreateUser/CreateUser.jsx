import React, { useEffect, useState } from "react"
import InputCustom from "../../components/Input/InputCustom"
import { Select } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { getAllSkillApi } from "../../redux/skillSlice"

const CreateUser = () => {
  const { listSkill } = useSelector((state) => state.skillSlice)
  const dispatch = useDispatch()

  const [valueUser, setValueUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    birthday: "",
    gender: true,
    role: "",
    skill: [],
    certification: [],
  })

  useEffect(() => {
    dispatch(getAllSkillApi())
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">Form tạo người dùng</h2>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <InputCustom labelContent="Name" />
        <InputCustom labelContent="Email" />
        <InputCustom labelContent="Phone" />
        <InputCustom labelContent="Password" typeInput="password" />
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Giới tính
          </label>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value={true}>Name</option>
            <option value={false}>Nữ</option>
          </select>
        </div>
        {/* ngày sinh  */}
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Ngày sinh
          </label>
          <input type="date" />
        </div>
        <div>
          {/* Thực hiện xây dựng service dành cho việc xử lí các API của skill và sử dụng redux thunk để lưu trữ lên redux  */}
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Chọn skill
          </label>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Vui lòng chọn skill"
            // onChange={handleChange}
            // options={options}
            options={listSkill.map((item, index) => {
              return {
                title: item.tenSkill,
                value: item.tenSkill,
              }
            })}
          />
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Chọn chứng chỉ
          </label>
          <Select
            mode="tags"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Vui lòng chọn chứng chỉ"
            tokenSeparators={[","]}
            // onChange={handleChange}
            // options={options}
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-5 rounded-md"
          >
            Tạo người dùng
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser
