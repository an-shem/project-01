import './App.css';
import Counter from './components/Counter/Counter';
import AgePredictor from './components/AgePredictor/AgePredictor';
import { GenderDeterminativeByName } from './components/GenderDeterminativeByName/GenderDeterminativeByName';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { MainLayout } from './layout/MainLayout';
import { PonyLayout } from './layout/PonyLayout';
import MyPony from './components/MyPony/MyPony';
import BuyPony from './components/BuyPony/BuyPony';
import { ROUTES } from './consttants/routes';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import AccoumtLoyaut from './layout/AccoumtLoyaut';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderDeterminativeByName />} />
            <Route path="/age-predictor" element={<AgePredictor />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/pony" element={<PonyLayout />}>
              <Route path="my-pony" element={<MyPony />} />
              <Route path="buy-pony" element={<BuyPony />} />
            </Route>
            <Route path="account" element={<AccoumtLoyaut />}>
              <Route />
              <Route />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
