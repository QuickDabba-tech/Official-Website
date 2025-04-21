import { Outlet } from 'react-router-dom';
import Navbar from './Home/Navbar/Navbar';
import Footer from './Home/Footer/Footer';
import ScrollToTop from './ScrollToUp';

const AppLayout = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default AppLayout;
