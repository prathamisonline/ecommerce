import Footer from './components/layout/footer';
import Header from './components/layout/header';
import AllRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header/>
      <AllRoutes/>
     <Footer />
     <ToastContainer />
    </>
  )
}

export default App
