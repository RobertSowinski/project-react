import Container from './components/Container/Container'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favourite from './components/Favourite/Favourite';
import {Routes, Route} from 'react-router-dom';
import BadAddress from './components/BadAddress/BadAddress';


const App = () => {
  return (
  <main>
    <NavBar/>
    <Container>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/favourite" element={<Favourite/>}/>
        <Route path="*" element={<BadAddress/>}/>
      </Routes>
    </Container>
  </main>
  );
};

export default App;