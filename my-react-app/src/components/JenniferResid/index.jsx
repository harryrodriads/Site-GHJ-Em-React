import { Footer } from "../Footer"
import { HeaderBar } from "../Header"
import { SectionCarrosel } from "./sectionCarrosel"
import { SectionContact } from "./sectionContact"
import { SectionDescription } from "./sectionDescription"
import { SectionLocation } from "./sectionLocation"


export const JenniferResid = () => {
  return (
    <div>
      <HeaderBar />
      <SectionCarrosel/>
      <SectionDescription/>
      <SectionContact/>
      <SectionLocation/>
      <Footer/>
    </div>
  )
}