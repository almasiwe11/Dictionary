function Switcher({ isDarkmode, setIsDarkmode }) {
  function handleDarkMode() {
    setIsDarkmode((prev) => !prev)
    localStorage.setItem("theme", JSON.stringify(!isDarkmode))
  }
  return (
    <div className="switcher" onClick={handleDarkMode}>
      <div className={`switcher__circle ${isDarkmode ? "dark" : "prev"}`}></div>
    </div>
  )
}

export default Switcher
