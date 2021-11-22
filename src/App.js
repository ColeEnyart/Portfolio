import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
