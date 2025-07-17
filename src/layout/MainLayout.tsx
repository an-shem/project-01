import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>

      <main className="flex-1 bg-cyan-50">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center min-h-36 bg-cyan-800 text-cyan-50 text-4xl font-[Monoton]">
        <p>FOOTER</p>
      </footer>
    </div>
  );
};
