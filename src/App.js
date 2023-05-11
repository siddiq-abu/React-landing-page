
import './App.css';
import Brands from './component/Brands';
import Categories from './component/Categories';
import Copy from './component/Copy';
import Featured from './component/Featured';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Nav from './component/Nav';
import Testimony from './component/Testimony';

function App() {
  return (
    <div className="App">
   <Nav/>
   <Hero/>
   <Categories/>
   <Featured/>
   <Brands/>
   <Testimony/>
   <Footer/>
   <Copy/>
    </div>
  );
}

export default App;
