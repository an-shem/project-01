import { Routes, Route } from 'react-router-dom';
import AgePredictor from '../components/AgePredictor/AgePredictor';
import BuyPony from '../components/BuyPony/BuyPony';
import Counter from '../components/Counter/Counter';
import { GenderDeterminativeByName } from '../components/GenderDeterminativeByName/GenderDeterminativeByName';
import MyPony from '../components/MyPony/MyPony';
import { ROUTES } from '../constants/routes';
import { MainLayout } from '../layout/MainLayout';
import { PonyLayout } from '../layout/PonyLayout';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Registration from '../pages/Registration/Registration';
import AccountLayout from '../layout/AccountLayout';
import AccountInfo from '../components/AccountInfo/AccountInfo';
import AccountSettings from '../components/AccountSettings/AccountSettings';
import { ProductsList } from '../components/ProductsList/ProductsList';
import ProductPage from '../pages/ProductPage/ProductPage';
import UsersList from '../pages/UsersList/UsersList';
import UserPage from '../pages/UserPage/UserPage';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderDeterminativeByName />} />
          <Route path="/age-predictor" element={<AgePredictor />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/pony" element={<PonyLayout />}>
            <Route path="/pony/my-pony" element={<MyPony />} />
            <Route path="/pony/buy-pony" element={<BuyPony />} />
          </Route>
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route path={ROUTES.ACCOUNT_SETTINGS} element={<AccountSettings />} />
            <Route path={ROUTES.ACCOUNT_INFO} element={<AccountInfo />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
