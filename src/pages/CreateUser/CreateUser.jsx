import React, { useEffect, useState } from "react"
import InputCustom from "../../components/Input/InputCustom"
import { Select } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { getAllSkillApi } from "../../redux/skillSlice"
import { nguoiDungService } from "../../service/nguoiDung.service"

const CreateUser = () => {
  const { infoUser } = useSelector((state) => state.authSlice)
  const { listSkill } = useSelector((state) => state.skillSlice)
  const [step, setStep] = useState(0)
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
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    dispatch(getAllSkillApi())
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(valueUser)
    nguoiDungService
      .createUser(valueUser)
      .then((res) => {
        console.log(res)
        setStep(step + 1)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleUploadAvatar = (event) => {
    event.preventDefault()
    // Chuyển đổi dữ liệu vào formData
    let formData = new FormData()
    formData.append("formFile", avatar.file)
    let { token } = infoUser
    console.log(token)
    nguoiDungService
      .uploadAvatar(token, formData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChangeInput = (event) => {
    const { name, value } = event.target
    setValueUser({ ...valueUser, [name]: value })
  }

  const handleRenderStep = () => {
    switch (step) {
      case 0:
        return (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <InputCustom
              labelContent="Name"
              name="name"
              onChange={handleChangeInput}
            />
            <InputCustom
              labelContent="Email"
              name="email"
              onChange={handleChangeInput}
            />
            <InputCustom
              labelContent="Phone"
              name="phone"
              onChange={handleChangeInput}
            />
            <InputCustom
              labelContent="Password"
              typeInput="password"
              name="password"
              onChange={handleChangeInput}
            />
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Giới tính
              </label>
              <select
                name="gender"
                onChange={handleChangeInput}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value={true}>Nam</option>
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
              <input
                type="date"
                name="birthday"
                className="border border-gray-400 rounded-md p-2"
                format="DD-MM-YYYY"
                onChange={(event) => {
                  const [year, month, day] = event.target.value.split("-")
                  const valueDate = `${day}-${month}-${year}`
                  setValueUser({ ...valueUser, birthday: valueDate })
                }}
              />
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
                onChange={(value) => {
                  console.log(value)
                  setValueUser({ ...valueUser, skill: value })
                }}
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
                onChange={(value) => {
                  setValueUser({ ...valueUser, certification: value })
                }}
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
        )
      case 1:
        return (
          <div>
            <form onSubmit={handleUploadAvatar}>
              <div>
                <label>Vui lòng upload hình ảnh</label>
                <input
                  type="file"
                  onChange={(event) => {
                    console.log(event.target.files[0])
                    console.log(event.target.files[0])
                    if (event.target.files[0]) {
                      const urlAvatar = URL.createObjectURL(
                        event.target.files[0]
                      )
                      console.log(urlAvatar)
                      setAvatar({
                        file: event.target.files[0],
                        url: urlAvatar,
                      })
                    }
                  }}
                  accept="image/png, image/jpeg"
                />
              </div>
              <img src={avatar?.url} width={200} sizes="" />
              <button type="submit" className="py-2 px-5 bg-black text-white">
                Upload Hình
              </button>
            </form>
          </div>
        )
    }
  }

  return (
    <div>
      <h2 className="font-semibold text-3xl mb-5">Form tạo người dùng</h2>
      {handleRenderStep()}
      {/* <button className='bg-blue-500 py-2 px-5 text-white rounded' onClick={() => {
        setStep(step + 1)
      }}>Bước tiếp theo</button> */}
    </div>
  )
}

export default CreateUser
