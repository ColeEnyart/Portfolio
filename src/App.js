import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Contact from "./components/Form";
/* import Stack from "react-bootstrap/Stack"; */

function App() {
  return (
    <div>
      <Header />
      <Navbar />
{/*       <Stack gap={3}> */}
        <Card />
        <Card />
        <Card />
{/*       </Stack> */}
      <Contact />
    </div>
  );
}

export default App;
