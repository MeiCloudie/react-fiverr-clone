import React from "react"
import { Alert } from "antd"
import { Link } from "react-router-dom"
import { path } from "../../common/path"

const DeveloperTestingModeAlert = () => {
  return (
    <div>
      <Alert
        message="Developer Testing Mode"
        description={
          <div className="flex gap-4">
            <p>
              This product is still in development. This is a section to support
              page navigation:
            </p>
            <ul className="font-bold flex gap-4">
              <li>
                <Link to={path.listJob}>Job List Page</Link>
              </li>
              <p> • </p>
              <li>
                <Link to={path.adminLogin}>Administration Login Page</Link>
              </li>
            </ul>
          </div>
        }
        type="info"
        showIcon
        closable
      />
    </div>
  )
}

export default DeveloperTestingModeAlert
