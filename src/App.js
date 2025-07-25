import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Component/HomePage';
import Buynow from './Component/Buynoe';
import Datalist from './Component/Datalist';
import ScrollToTop from './Component/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/passdata" element={<Datalist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App