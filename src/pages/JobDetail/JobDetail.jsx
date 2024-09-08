import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { getJobDetailApi } from "../../redux/congViecSlice"
import { Avatar, Rate } from "antd"
import { Image } from "antd"
import useResponsive from "../../hooks/useResponsive"

const JobDetail = () => {
  const params = useParams()
  const pathName = useLocation()
  const dispatch = useDispatch()
  const chiTietCongViec = useSelector(
    (state) => state.congViecSlice.chiTietCongViec
  )

  const isResponsive = useResponsive({
    mobile: 640,
    tablet: 1024,
    mac: 1440,
  })

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
    <div className="container px-6">
      {/* New */}
      <div
        className={`jobDetail_heading flex items-center my-8  ${
          isResponsive.mobile ? "text-lg space-x-2" : "text-xl space-x-4"
        } font-medium`}
      >
        <p className="text-blue-800">{tenLoaiCongViec}</p>
        <p>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
        <p className="text-blue-800">{tenNhomChiTietLoai}</p>
        <p>
          <i className="fa-solid fa-chevron-right"></i>
        </p>
        <p className="text-blue-800">{tenChiTietLoai}</p>
      </div>

      <div
        className={`${
          isResponsive.tablet ? "block space-y-10" : "flex space-x-20"
        } jobDetail_main`}
      >
        <div
          className={`jobDetail_main-left ${
            isResponsive.tablet ? "w-full" : "w-2/3"
          } `}
        >
          {/* title */}
          <h1
            className={`${
              isResponsive.mobile ? "text-2xl" : "text-4xl"
            } font-bold mb-10`}
          >
            {congViec.tenCongViec}
          </h1>

          {/* creator and rating info */}
          <div
            className={`${
              isResponsive.mobile
                ? "text-sm space-y-2"
                : "text-lg flex items-center"
            }  space-x-3 my-4 `}
          >
            <Avatar size={48} src={avatar} />
            <p className="font-bold capitalize">{tenNguoiTao}</p>
            <p className="text-yellow-400 font-medium">Top Rated Seller</p>
            <span className="text-gray-300">|</span>
            <p className="text-yellow-400">
              <span className="me-2">
                <Rate disabled defaultValue={congViec.saoCongViec} />
              </span>
              {congViec.saoCongViec}
            </p>
            <p className="text-gray-500 font-medium">({congViec.danhGia})</p>
            <span className="text-gray-300">|</span>
            <p className="text-gray-400">4 Orders in Queue</p>
          </div>

          <hr />

          <div
            className={`${
              isResponsive.mobile ? "block space-y-1" : "flex items-center"
            } my-8 space-x-2 text-lg`}
          >
            <span className="text-yellow-500 me-2">
              <i className="fa-solid fa-trophy"></i>
            </span>
            <p className="font-medium">Buyers keep returning!</p>
            <p>{tenNguoiTao} has an exceptional number of repeat buyers.</p>
          </div>

          {/* image */}
          <div className="my-6">
            <Image
              src={congViec.hinhAnh}
              alt={congViec.tenCongViec}
              className="rounded-lg"
              width={"100%"}
              height={"auto"}
            />
          </div>
        </div>

        <div
          className={`jobDetail_main-right ${
            isResponsive.tablet ? "w-full" : "w-1/3"
          }  space-y-8`}
        >
          <div className="card border shadow-md">
            <div className="flex justify-center items-center text-center text-lg font-bold text-gray-600 bg-gray-100">
              <div className="w-full h-auto">
                <h3>Basic</h3>
              </div>
              <div className="border-x border-b-green-700 border-b-4 w-full h-auto bg-white">
                <h3 className="p-4 text-green-700">Standard</h3>
              </div>
              <div className=" w-full h-auto">
                <h3>Premium</h3>
              </div>
            </div>
            <hr />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">Standard</h3>
                <h1 className="font-medium text-3xl text-gray-600">
                  ${congViec.giaTien}
                </h1>
              </div>

              <p className="my-10 text-lg">
                Create a simple web application for your business.
              </p>

              <div className="my-2">
                <p className="font-bold text-lg text-gray-600">
                  <span className="me-2">
                    <i className="fa-regular fa-clock"></i>
                  </span>
                  30 Days Delivery
                  <span className="ms-4 me-2">
                    <i className="fa-solid fa-rotate"></i>
                  </span>
                  1 Revision
                </p>

                <p
                  className="my-4 mx-6 text-lg text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: congViec.moTaNgan.replace(/\r\n/g, "<br/>"),
                  }}
                ></p>
              </div>

              <div>
                <button
                  type="button"
                  className="my-4 inline-block w-full font-bold bg-green-800 text-white py-2 px-5 rounded-md hover:bg-green-600 duration-200"
                >
                  Continue (${congViec.giaTien})
                </button>
                <h3 className="text-center text-green-700 font-medium cursor-pointer">
                  Compare Packages
                </h3>
              </div>
            </div>
          </div>

          <div className="card border shadow-md p-8 bg-gray-100 flex flex-col justify-center items-center">
            <h2 className="font-bold">Do you have any special requirements?</h2>
            <button
              type="button"
              className="mt-4 inline-block font-bold border border-gray-700 text-gray-700 py-2 px-5 rounded-md hover:text-white hover:bg-green-700 hover:border-green-700 duration-200"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="jobDetail_description my-10">
        <h1 className="text-4xl font-bold my-6">Detailed Description</h1>
        <p
          className="text-lg mx-4 font-medium text-gray-600"
          dangerouslySetInnerHTML={{
            __html: congViec.moTa.replace(/\r\n/g, "<br/>"),
          }}
        ></p>
      </div>

      <hr className="my-10" />

      <div className="jobDetail_seller my-10">
        <h1 className="text-4xl font-bold my-6">About The Seller</h1>
        <div className="flex space-x-4">
          <Avatar size={64} src={avatar} />
          <div>
            <h3 className="text-xl font-bold capitalize">{tenNguoiTao}</h3>
            <p className="mb-2 text-sm text-gray-600">Web Developer</p>
            <p className="text-yellow-400">
              <span className="me-2">
                <Rate disabled defaultValue={congViec.saoCongViec} />
              </span>
              {congViec.saoCongViec}
              <span className="text-gray-500 font-medium mx-3">
                ({congViec.danhGia})
              </span>
            </p>
            <button
              type="button"
              className="my-6 inline-block font-bold border border-gray-700 text-gray-700 py-2 px-5 rounded-md hover:text-white hover:bg-green-700 hover:border-green-700 duration-200"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
