import Navbar from "../components/navbar";
import Android from "../sections/android";
import Header from "../sections/header";
import Others from "../sections/others";
import Services from "../sections/services";
import Websites from "../sections/websites";
import Footer from "../components/footer"
import Team from "../sections/team";
import { useState } from "react";
export default function Home(props) {
  const [activeSection,setActiveSection] = useState(null);
  return (
    <>
        <Navbar active={activeSection}/>
        <Header navbarEvent={setActiveSection}/>
        <Services navbarEvent={setActiveSection}/>
        <Websites navbarEvent={setActiveSection}/>
        <Android navbarEvent={setActiveSection}/>
        <Others navbarEvent={setActiveSection}/>
        <Team navbarEvent={setActiveSection}/>
        <Footer navbarEvent={setActiveSection}/>
    </>
  )
}