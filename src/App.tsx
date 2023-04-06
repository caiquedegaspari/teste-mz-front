import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './Pages/Home';


function App() {
  return (
    <div>
     <Home />
     <ToastContainer />
    </div>
  );
}

export default App;
