import { Route, Routes, } from "react-router-dom"
import { HomePage} from "../pages/HomePage"
import { About} from "../pages/About"
import { Contact} from "../pages/Contact"
import { JenniferResidence } from "../pages/JenniferResidence"

export const RoutesMain = () => {
  return(
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />  
      <Route path="/JenniferResidence" element={<JenniferResidence/>} />  
    </Routes>
  )
}