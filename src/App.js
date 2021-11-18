import Header from './components/Header';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Stack from 'react-bootstrap/Stack'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Stack gap={3}>
        <Card />
        <Card />
        <Card />
      </Stack>
    </div>
  );
}

export default App;