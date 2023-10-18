function useLocalStorage(mode) {
  const theme = localStorage.getItem("theme")
  const fromStorage = theme !== null ? JSON.parse(theme) : true

  return { fromStorage }
}

export default useLocalStorage
