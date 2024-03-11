import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/layout/footer';
import Header from './components/layout/header';
import AllRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <Header/>
      {pathname !== "/checkout" && <Navbar />}
      <AllRoutes/>
     <Footer />
     <ToastContainer />
    </>
  )
}

export default App
