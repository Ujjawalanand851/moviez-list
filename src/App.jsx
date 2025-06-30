/*
import './css/App.css'
//import Moviecard from './components/moviecard';
import Home from './pages/home';
import Favorites from './pages/favorites';
import { Routes, Route  } from 'react-router-dom';
import Navbar from './components/navbar';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
   <MovieProvider>
    
    <Navbar/>
    
    <main className='main-content'>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/favorites' element={<Favorites/>}/>
</Routes>

</main></MovieProvider>

  
  );
}




export default App
*/import './css/App.css';
import Home from './pages/home';
import Favorites from './pages/favorites';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
