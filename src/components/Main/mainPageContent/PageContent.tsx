import TypewriterSection from "../sections/TypewriterArea"
import ServiceGrid from "../sections/ServiceGrid/servicesGrid"
import Map from "../sections/MapSection"
import LocksmithAD from "../sections/LocksmithAD"
export default function () {
  return (
    <>
      <TypewriterSection />
      <LocksmithAD />  
      <ServiceGrid />
      <Map />
    </>
  )
}