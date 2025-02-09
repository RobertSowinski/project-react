import Container from './components/Container/Container'
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Favourite from './components/Favourite/Favourite';
import {Routes, Route} from 'react-router-dom';
import BadAddress from './components/BadAddress/BadAddress';
import List from './components/List/List';



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
        <Route path="/list/:listId" element={<List/>}/>
      </Routes>
    </Container>
  </main>
  );
};

export default App;