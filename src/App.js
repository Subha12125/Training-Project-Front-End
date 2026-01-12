// import logo from './logo.svg';
import './App.css';
import { Home } from './page/home';
import { About } from './page/about';
import { DefaultLayout } from './layout/defaultlayout';
import { Error } from './page/error';
import { Contact } from './page/contact';
// import { Navbar } from './components/navbar';
// import { Footer } from './components/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}> 
            <Route path='/' element ={<Home/>}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/contact' element ={<Contact/>}/>
            <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
