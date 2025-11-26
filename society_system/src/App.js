import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Adminroutes from './routes/MainAdminRoutes/Adminroutes';
import Usersroutes from './routes/Userroutes/Usersroutes';
import SecurityRoutes from './routes/Userroutes/StaffRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Adminroutes />
      <Usersroutes />
      <SecurityRoutes/>
    </BrowserRouter>
  );
}
