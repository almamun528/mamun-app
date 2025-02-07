
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Skills from "./components/Skills";
import Wordpress from "./Wordpress";


function App() {
  

  return (
    <>
      <section className="w-10/12 mx-auto py-1">
        <br />
        
        <Hero />
        <Skills />

        <div className="divider divider-secondary"></div>

        <Wordpress/>

        <Education/>
        <br />
      </section>
        <Footer/>
    </>
  );
}

export default App
