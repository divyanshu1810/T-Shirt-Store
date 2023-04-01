import { useEffect } from "react"
import CanvasModel from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {
  useEffect(() => {
    document.title = "OpenAI T-Shirt Store"
  }, [])
  return (
    <main className="app transition-all ease-in">
      <Home/>
      <CanvasModel/>
      <Customizer/>
    </main>
  )
}

export default App
