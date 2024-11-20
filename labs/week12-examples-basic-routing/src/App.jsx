import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Layout  from './components/Layout';
import Landing  from './components/Landing';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:name" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
