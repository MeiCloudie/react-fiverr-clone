import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { getJobDetailApi } from "../../redux/congViecSlice"
import { Card, Avatar, Typography, Rate, Tag, Divider, Button } from "antd"

const { Title, Text, Paragraph } = Typography

const JobDetail = () => {
  const params = useParams()
  const pathName = useLocation()
  const dispatch = useDispatch()
  const chiTietCongViec = useSelector(
    (state) => state.congViecSlice.chiTietCongViec
  )

  useEffect(() => {
    if (params.id) {
      dispatch(getJobDetailApi(params.id)) // Sử dụng params.id làm jobId
    }
  }, [params.id, dispatch])

  if (!chiTietCongViec) return <div>Loading...</div>

  const {
    congViec,
    tenLoaiCongViec,
    tenNhomChiTietLoai,
    tenChiTietLoai,
    tenNguoiTao,
    avatar,
  } = chiTietCongViec

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <Card className="shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={congViec.hinhAnh}
              alt={congViec.tenCongViec}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 flex flex-col justify-between">
            <div>
              <Title level={2}>{congViec.tenCongViec}</Title>
              <div className="flex items-center my-2">
                <Rate disabled defaultValue={congViec.saoCongViec} />
                <Text className="ml-2">{congViec.danhGia} ratings</Text>
              </div>
              <Paragraph className="text-gray-700 mt-4">
                {congViec.moTaNgan}
              </Paragraph>
              <Divider />
              <div className="flex flex-wrap gap-2 my-4">
                <Tag color="blue">{tenLoaiCongViec}</Tag>
                <Tag color="green">{tenNhomChiTietLoai}</Tag>
                <Tag color="purple">{tenChiTietLoai}</Tag>
              </div>
              <Title level={4} className="text-red-500">
                Price: ${congViec.giaTien}
              </Title>
            </div>
            <Button type="primary" size="large" className="mt-4">
              Continue (${congViec.giaTien})
            </Button>
          </div>
        </div>
        <Divider />
        <div className="mt-6">
          <Title level={3}>Detailed Description</Title>
          <Paragraph>{congViec.moTa}</Paragraph>
          <Divider />
          <div className="flex items-center mt-4">
            <Avatar size={64} src={avatar} />
            <div className="ml-4">
              <Text className="block text-lg font-medium">{tenNguoiTao}</Text>
              <Text className="block text-gray-500">Job Creator</Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default JobDetail
