import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { NotFound } from './pages/NotFound';
import { Categories } from './pages/Categories';
import { Recipe } from './pages/Recipe';

function App() {
  return (
    <>
      <Header />
      <main className="container content">
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contacts' element = {<Contacts />} />
          <Route path='categories/:name' element = {<Categories />} />
          <Route path='meal/:id' element={<Recipe />} />
          <Route path='*' element = {<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
