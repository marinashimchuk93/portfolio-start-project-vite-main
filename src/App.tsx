import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Skills} from "./layout/section/skills/Skills.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Contact} from "./layout/section/contacts/Contact.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Testimonials} from "./layout/section/testimonials/Testimonials.tsx";
import {GoTopButton} from "./components/goTopButton/GoTopButton.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <GoTopButton />
    </div>
  )
}

export default App

