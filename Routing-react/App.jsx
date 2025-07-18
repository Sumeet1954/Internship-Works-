import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import Services from './components/Services';
import Taxes from './components/Taxes';
import Accounting from './components/Accounting';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home h6="EFFICIENCY PAYROLL AND WORKFORCE MASTERY" h3=" We Make " h3_1= " Painless. " span="Payroll" para="We get your employee paid while providing online access to
                paystubs,tax reports and payroll tax filings" btn_1=" Get Started" btn_2="Learn More" img_src="/images/hero_illus.png" />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Taxes" element={<Taxes />} />
        <Route path="/Accounting" element={<Accounting />} />
        {/* Optional: Add a Home component for "/" */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;