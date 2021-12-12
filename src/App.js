import logo from './logo.svg';
import 'bootstrap'

import Navbar from './Navbar/Navbar';
import Container from './Container/Container'
import Footer from './Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    
    <div className='container-fluid'>
      <BrowserRouter>
      <Navbar></Navbar>
      
      <Container></Container>
      <Footer></Footer>
      </BrowserRouter>
      <ToastContainer/>
    </div>
    
  );
}

export default App;
