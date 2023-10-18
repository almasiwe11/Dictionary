import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import Body from "./components/Body/Body"
import { useState } from "react"
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom"

function App() {
  const [theWord, setTheWord] = useSearchParams()
  const [isDarkmode, setIsDarkmode] = useState(false)

  return (
    <div className={`app ${isDarkmode && "dark-mode"} `}>
      <div className="container">
        <Header isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
        <Search setTheWord={setTheWord} theWord={theWord} />

        <Routes>
          {theWord.size && (
            <Route path="/" element={<Body theWord={theWord} />}></Route>
          )}
        </Routes>
      </div>
    </div>
  )
}

export default App
