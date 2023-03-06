import { Route, Routes, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contacts' element = {<Contacts />} />
          <Route path='*' element = {<NotFound />} />
        </Routes>
        <Link to='/'>Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contacts' >Contacts</Link>
      </main>
      <Footer />
    </>
  );
}

export default App;
