import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="">
      <nav>
        <Navbar/>
      </nav>
      <main className="">
        <Home/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
