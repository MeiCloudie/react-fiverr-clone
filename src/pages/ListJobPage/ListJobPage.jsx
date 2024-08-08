import React, { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { congViecService } from "../../service/congViec.service"

const ListJobPage = () => {
  const [searchParam, setSearchParam] = useSearchParams()

  useEffect(() => {
    let tenCongVien = searchParam.get("tenCongViec")
    congViecService
      .layCongViecTheoTen(tenCongVien)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [searchParam.get("tenCongViec")])

  return <div>ListJobPage</div>
}

export default ListJobPage
