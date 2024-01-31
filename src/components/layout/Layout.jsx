// libraries
import { Outlet } from 'react-router-dom';

// components
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
      <> 
        <Header />
        <Outlet />
        <Footer date={new Date().getFullYear()} />
      </>
    );
  }
  
  export default Layout;