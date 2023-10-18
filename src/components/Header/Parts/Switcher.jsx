import { useState } from "react"

function Switcher({ isDarkmode, setIsDarkmode }) {
  return (
    <div className="switcher" onClick={() => setIsDarkmode((prev) => !prev)}>
      <div className={`switcher__circle ${isDarkmode ? "dark" : "prev"}`}></div>
    </div>
  )
}

export default Switcher
