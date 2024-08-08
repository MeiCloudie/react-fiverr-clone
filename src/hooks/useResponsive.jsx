import { useState, useEffect } from "react"

// Hook để kiểm tra xem cửa sổ hiện tại có nằm trong kích thước chỉ định không
function useResponsive(breakpoints) {
  const [isResponsive, setIsResponsive] = useState({})

  useEffect(() => {
    const handleResize = () => {
      const newIsResponsive = {}
      for (const key in breakpoints) {
        if (Object.hasOwnProperty.call(breakpoints, key)) {
          newIsResponsive[key] = window.innerWidth <= breakpoints[key]
        }
      }
      setIsResponsive(newIsResponsive)
    }

    handleResize() // Gọi ngay lập tức để kiểm tra kích thước ban đầu
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return isResponsive
}

export default useResponsive
