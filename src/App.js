import './App.css';
import Header from '../src/components/header/header'
import Hero  from "../src/components/hero/hero"
import Block from "../src/components/block/block"
import About from '../src/components/about/about'
import Footer from '../src/components/footer/footer'

function App() {
  return (
      <>
          <Header/>
          <Hero/>
          <Block/>
          <About/>
          <Footer/>
      </>

  );
}

export default App;
