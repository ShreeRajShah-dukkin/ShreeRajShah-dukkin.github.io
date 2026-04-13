import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./styles/globals.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
