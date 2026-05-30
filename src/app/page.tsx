import Hero from "@/components/sections/Hero"
import SelectedWork from "@/components/sections/SelectedWork"
import CareerStints from "@/components/sections/CareerStints"
import Approach from "@/components/sections/Approach"
import Education from "@/components/sections/Education"
import GetInTouch from "@/components/sections/GetInTouch"

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <CareerStints />
      <Approach />
      <Education />
      <GetInTouch />
    </>
  )
}
