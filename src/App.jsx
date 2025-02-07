
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
      </section>
    </>
  );
}

export default App
