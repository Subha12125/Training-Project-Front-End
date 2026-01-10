// import logo from './logo.svg';
import './App.css';
import { Home } from './page/home';
import { About } from './page/about';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/about' element ={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
