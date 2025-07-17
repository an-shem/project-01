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
import ProductPage from '../pages/ProductPage/ProductPage';
import UserPage from '../pages/UserPage/UserPage';
import { UsersPage } from '../pages/UsersPage/UsersPage';
import Login from '../pages/Login/Login';
import CreateProduct from '../pages/CreateProduct/CreateProduct';
import Galery from '../components/Galery/Galery';
import ToggleCardPage from '../pages/ToggleCardPage/ToggleCardPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import { Parent } from '../components/Parent/Parent';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
          <Route path={ROUTES.PRODUCTS + '/:id'} element={<ProductPage />} />
          <Route path={ROUTES.PRODUCTS + '/add'} element={<CreateProduct />} />
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.USERS + '/:id'} element={<UserPage />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderDeterminativeByName />} />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route path="/pony" element={<PonyLayout />}>
            <Route path="/pony/my-pony" element={<MyPony />} />
            <Route path="/pony/buy-pony" element={<BuyPony />} />
          </Route>
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route path={ROUTES.ACCOUNT_SETTINGS} element={<AccountSettings />} />
            <Route path={ROUTES.ACCOUNT_INFO} element={<AccountInfo />} />
          </Route>
          <Route path={ROUTES.GALERY} element={<Galery />} />
          <Route path={ROUTES.TOGGLE_CARD} element={<ToggleCardPage />} />
          <Route path={'/parent'} element={<Parent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
