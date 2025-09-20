import { useEffect } from "react";
import styled from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills"
import MyProjects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeWrap = styled.main`
background-color: #0d0214
`
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <HomeWrap>
        <Home />
        <About />
        <Skills />
        <MyProjects />
        <Contact />
      </HomeWrap>
    </>

  )
}

export default App
