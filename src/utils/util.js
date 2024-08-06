export function setLocalStorage(key, value) {
  // chuyển đổi thành chuỗi json
  const stringJson = JSON.stringify(value)
  localStorage.setItem(key, stringJson)
}

export function getLocalStorage(key) {
  // lấy dữ liệu từ local lên
  const dataLocal = localStorage.getItem(key)
  // kiểm tra nếu dữ liệu khác null thì parse nó ra object
  return dataLocal ? JSON.parse(dataLocal) : null
}
