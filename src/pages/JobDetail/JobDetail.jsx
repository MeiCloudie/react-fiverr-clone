import { useLocation, useParams } from "react-router-dom"

const JobDetail = () => {
  const params = useParams()
  const pathName = useLocation()

  console.log(params)
  console.log(pathName)

  return (
    <div>
      <h1>{pathName.pathname}</h1>
      <h1>{params.id}</h1>
    </div>
  )
}

export default JobDetail
