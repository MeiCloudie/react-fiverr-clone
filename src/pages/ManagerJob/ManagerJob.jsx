import React, { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getValueJobApi } from "../../redux/congViecSlice"
import { Space, Table, Tag } from "antd"
import { congViecService } from "../../service/congViec.service"
import { NotificationContext } from "../../App"

const ManagerJob = () => {
  const { showNotification } = useContext(NotificationContext)
  const dispatch = useDispatch()
  const { listCongViec } = useSelector((state) => state.congViecSlice)

  useEffect(() => {
    dispatch(getValueJobApi())
  }, [])

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên Công Việc",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Đánh Giá",
      dataIndex: "danhGia",
      key: "danhGia",
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Người Tạo",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      render: (text) => {
        return <img src={text} className="h-14" />
      },
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      key: "moTa",
    },
    {
      title: "Mã Chi Tiết Loại Công Việc",
      dataIndex: "maChiTietLoaiCongViec",
      key: "maChiTietLoaiCongViec",
    },
    {
      title: "Mô Tả Ngắn",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
    },
    {
      title: "Sao Công Việc",
      dataIndex: "saoCongViec",
      key: "saoCongViec",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle" className="space-x-3">
    //       <button
    //         onClick={() => {
    //           congViecService
    //             .deleteJob(record.id)
    //             .then((res) => {
    //               console.log(res)
    //               // thực hiện xử lí lấy lại danh sách ng dùng
    //               dispatch(getValueJobApi())
    //               showNotification("Xoá thành công", "success")
    //             })
    //             .catch((err) => {
    //               console.log(err)
    //               showNotification(
    //                 err.response.data.message || err.response.data.content,
    //                 "error"
    //               )
    //             })
    //         }}
    //         className="bg-red-500/85 text-white py-2 px-5"
    //       >
    //         Xoá
    //       </button>
    //       <button className="bg-yellow-500/85 text-white py-2 px-5">Sửa</button>
    //     </Space>
    //   ),
    // },
  ]

  return (
    <div>
      <Table columns={columns} dataSource={listCongViec} />
    </div>
  )
}

export default ManagerJob
